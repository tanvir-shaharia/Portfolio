# Android Software Engineer Interview Preparation Handbook

Welcome to your personal interview preparation handbook for Senior-level Android Developer roles. This guide is built strictly around the verified technologies, architectures, and projects listed on your Android-focused resume.

---

## TABLE OF CONTENTS
1. [Kotlin & Java Core Programming](#1-kotlin--java-core-programming)
2. [Android SDK & Modern UI (Jetpack Compose & XML)](#2-android-sdk--modern-ui-jetpack-compose--xml)
3. [Mobile Architecture & Design Patterns](#3-mobile-architecture--design-patterns)
4. [Data Management & Networking](#4-data-management--networking)
5. [Bluetooth & IoT Hardware Integration](#5-bluetooth--iot-hardware-integration)
6. [Nascenia Production Projects Deep-Dive](#6-nascenia-production-projects-deep-dive)
7. [Firebase Services & Development Tools](#7-firebase-services--development-tools)
8. [Agile Methodologies & Peer Code Reviews](#8-agile-methodologies--peer-code-reviews)

---

## 1. KOTLIN & JAVA CORE PROGRAMMING

### Core Concepts Explained
* **Null Safety:** Kotlin's type system is designed to eliminate `NullPointerException`. It distinguishes between nullable types (`String?`) and non-nullable types (`String`). Safely access nullable variables using the safe call operator (`?.`), Elvis operator (`?:`), or let function (`value?.let { ... }`).
* **Sealed Classes:** Used to represent restricted class hierarchies. Unlike enums, subclass instances of a sealed class can have their own state, making them ideal for representing State objects in MVVM (e.g., `Success`, `Error`, `Loading`).
* **Kotlin Coroutines:** A lightweight concurrency framework for asynchronous task execution without blocking threads. Coroutines run inside a `CoroutineScope` and utilize `Dispatchers` (e.g., `Dispatchers.IO` for networking/database, `Dispatchers.Main` for UI updates).
* **Kotlin Flow vs. LiveData:** 
  * `Flow` is a cold stream of data from Kotlin Coroutines that emits values sequentially. It requires a collector and supports reactive transformations.
  * `LiveData` is a lifecycle-aware observable data holder designed specifically for the UI layer. It always caches the latest value and emits only when the observer is in an active state (`STARTED` or `RESUMED`).
  * `StateFlow` is a hot Flow that acts as a modern, state-holding replacement for LiveData, requiring an initial value and emitting updates to active collectors.

### Interview Questions & Detailed Answers
* **Q1: What is the difference between `launch` and `async` in Kotlin Coroutines?**
  * **Answer:** Both are coroutine builders used to start asynchronous tasks. `launch` returns a `Job` and does not return any result; it is used for "fire-and-forget" background work. `async` returns a `Deferred<T>` (which is a subclass of Job) and allows you to call `.await()` to retrieve the return value. If an exception occurs, `launch` will propagate it to the parent handler immediately, whereas `async` will encapsulate the exception in the Deferred object until `await()` is called.
* **Q2: Explain how Kotlin's null safety is enforced at the bytecode level when interoperating with Java.**
  * **Answer:** Kotlin compiles nullable and non-nullable parameters into Java bytecode with annotations (`@Nullable` and `@NotNull`). When Kotlin compiles a function with a non-nullable parameter, it inserts runtime checks (`Intrinsics.checkNotNullParameter`) at the very beginning of the compiled method. If a Java class calls this method and passes a `null` value, the application throws an `IllegalArgumentException` immediately at the entry point rather than causing a late, harder-to-trace `NullPointerException` deep inside the method.

### Project Context: Weighing Scale App & My Robi
* In the **Weighing Scale App**, Kotlin Coroutines and background threads were critical. Bluetooth byte streams were processed on `Dispatchers.IO`, parsed into measurements, and posted to the UI thread using `StateFlow` to prevent blocking the operator's interface.

### Scenarios, Mistakes, and Checklists
* **Real-world Scenario:** You need to process a continuous feed of incoming Bluetooth bytes and update the UI in real-time. Use a `StateFlow` inside a coroutine bound to the Lifecycle using `repeatOnLifecycle(Lifecycle.State.STARTED)` to collect the flow safely without wasting CPU when the app is in the background.
* **Common Mistake:** Blocking the UI thread inside a coroutine by calling blocking IO libraries without switching dispatchers. Always wrap blocking calls inside `withContext(Dispatchers.IO)`.
* **Revision Checklist:**
  - [ ] Can I explain the event loop and thread pool mechanics of Coroutines?
  - [ ] Do I understand the difference between `StateFlow` and `SharedFlow`?

---

## 2. ANDROID SDK & MODERN UI (JETPACK COMPOSE & XML)

### Core Concepts Explained
* **Jetpack Compose vs. XML Layouts:**
  * **XML Layouts:** Imperative UI. You write views in XML, reference them using ViewBinding or `findViewById`, and manually mutate their properties (e.g., `textView.text = "Hello"`).
  * **Jetpack Compose:** Declarative UI. The UI is a direct representation of the current state. When the state changes, the framework automatically triggers *Recomposition* of the affected composable functions.
* **State Hoisting:** A pattern of moving state to the caller of a composable to make the composable stateless. Stateless composables are easier to test, reuse, and maintain.
* **Side-Effect APIs in Compose:** Composable functions should be side-effect free. When you need to trigger an action outside the composable scope (like making a network request or displaying a SnackBar), use:
  * `LaunchedEffect`: Runs a suspend block when keys change.
  * `rememberCoroutineScope`: Provides a coroutine scope bound to the composable lifecycle (ideal for user-triggered events like button clicks).

### Interview Questions & Detailed Answers
* **Q1: Explain what "Recomposition" is in Jetpack Compose and how to optimize it.**
  * **Answer:** Recomposition is the process of re-executing Composable functions when their inputs (parameters or State variables) change. To optimize it:
    1. Use stateless composables with State Hoisting.
    2. Pass lambda expressions instead of raw values when passing states to child components to delay state read (e.g., pass `{ state.value }` instead of `state.value`).
    3. Annotate immutable data classes with `@Stable` or `@Immutable` to let Compose skip recomposition if parameters have not changed.
    4. Use `remember` to cache expensive operations across recompositions.
* **Q2: How does a `RecyclerView` recycle views, and how does it compare to a Compose `LazyColumn`?**
  * **Answer:** `RecyclerView` uses a pool of view holders. As a list item scrolls off-screen, its view container is detached, sent to the `RecyclerPool`, and re-bound with new data for the item scrolling on-screen, avoiding expensive layout creation. A Compose `LazyColumn` achieves similar performance but dynamically emits layouts. Instead of recycling traditional view hierarchies, it skips composables that are out of bounds and only executes composable functions for visible items, avoiding the overhead of maintaining complex class-based ViewHolders.

### Project Context: My Robi & My Airtel BD
* In **My Robi** and **My Airtel BD**, legacy XML view structures and ViewBinding were used. Contributions involved updating feature UIs and refactoring existing screens to match modern layouts.

### Scenarios, Mistakes, and Checklists
* **Real-world Scenario:** Refactoring an XML-based profile screen. You must transition the screen elements without breaking functionality. Create a composable view and load it within the legacy XML layout using a `ComposeView`, bridging the transition step-by-step.
* **Common Mistake:** Reading state variables too high in the Compose tree, triggering unnecessary recompositions of the entire parent layout. Keep state reads as close to the target UI elements as possible.
* **Revision Checklist:**
  - [ ] Do I know how to use `rememberSaveable` to survive configuration changes?
  - [ ] Can I implement a custom XML Layout inside a Composable using `AndroidView`?

---

## 3. MOBILE ARCHITECTURE & DESIGN PATTERNS

### Core Concepts Explained
* **MVVM (Model-View-ViewModel):**
  * **Model:** Handles data storage and retrieval.
  * **View:** Displays UI elements and forwards user gestures.
  * **ViewModel:** Holds UI state, survives configuration changes, and communicates with repositories.
* **Clean Architecture:** Separates the software into concentric layers to ensure independence from frameworks, databases, and external UI.
  * **Domain Layer:** Pure Kotlin (no Android dependencies). Contains Entities, Repositories definitions, and Use Cases.
  * **Data Layer:** Contains Repositories implementations, DB models, API callers, and Data Sources.
  * **Presentation Layer:** Views (Compose/XML) and ViewModels.
* **SOLID Principles:**
  * *Single Responsibility:* A class (like a Repository) should handle one thing (e.g., Zakat data extraction).
  * *Dependency Inversion:* ViewModels depend on abstraction layers (interfaces) rather than direct data repositories implementations.

### Interview Questions & Detailed Answers
* **Q1: Why is the Domain layer in Clean Architecture compiled as a pure Java/Kotlin module without Android SDK dependencies?**
  * **Answer:** The Domain layer contains the core business logic of the application. Keeping it free of Android libraries ensures that the logic remains platform-independent. This makes the layer easily testable using JVM unit tests (which run in seconds without Android emulators) and protects the business logic if the database framework, networking client, or UI toolkit changes.
* **Q2: Explain the difference between Dependency Injection (DI) and Service Locator, and how Hilt fits in.**
  * **Answer:** Both patterns decouple classes from their dependencies.
    * A **Service Locator** is a registry where classes explicitly request their dependencies. This creates a hidden dependency on the locator itself, making testing harder.
    * **Dependency Injection** passes dependencies into the class constructor (pushed, not pulled). 
    * **Hilt** is a dependency injection library built on top of Dagger. It automatically manages component lifecycles (e.g., providing dependencies bound to the Lifecycle of an Activity or ViewModel) using compile-time code generation, reducing boilerplate while ensuring dependency graphs are validated before launch.

### Project Context: Shojja Hospital
* **Shojja Hospital** utilized Clean Architecture. The domain layer defined abstract interfaces for patient registration, and the data layer implemented those interfaces using REST client structures.

### Scenarios, Mistakes, and Checklists
* **Real-world Scenario:** A ViewModel needs to fetch Zakat collections. Do not initialize a Retrofit service inside the ViewModel. Instead, inject a ZakatUseCase interface, which calls a ZakatRepository, returning data mapped cleanly to UI model objects.
* **Common Mistake:** Letting Android classes (like Context or Activity) leak into Use Cases or ViewModels, leading to memory leaks when configuration changes occur.
* **Revision Checklist:**
  - [ ] Can I sketch the dependencies flow of Clean Architecture?
  - [ ] Do I understand how Hilt's component scopes (ActivityScoped, ViewModelScoped) map to Android lifecycles?

---

## 4. DATA MANAGEMENT & NETWORKING

### Core Concepts Explained
* **Retrofit & OkHttp:**
  * **Retrofit:** Turns your REST API endpoints into type-safe Java/Kotlin interfaces using annotations.
  * **OkHttp:** The underlying HTTP client. It handles connection pooling, request routing, caching, and interception.
* **Interceptors:** OkHttp interceptors are powerful middleware that allow you to read, modify, or retry requests. Perfect for logging, adding Auth tokens (headers), or handling offline fallback.
* **Room Database:** An abstraction layer over SQLite that provides compile-time verification of SQL queries, mapped entities, and reactive query support (returning StateFlow/Flow).

### Interview Questions & Detailed Answers
* **Q1: How would you configure an OkHttp Interceptor to automatically refresh an expired Auth Token?**
  * **Answer:** You can write a custom interceptor that intercepts requests. If the API returns a `401 Unauthorized` code, you use a synchronized block to request a new token using a refresh token endpoint. Once obtained, you update local storage (SharedPreferences/EncryptedSharedPreferences), construct a new request with the updated token header, and call `chain.proceed(newRequest)` to retry the request seamlessly.
* **Q2: Explain how Room Database ensures database migrations are safe and how to test them.**
  * **Answer:** Room uses schemas to track database versions. When you change your database schema (e.g., adding a table column), you must increment the database version and define a migration class containing the custom SQL commands (e.g., `database.execSQL("ALTER TABLE ...")`). If version mismatch occurs without a migration path, Room will throw an `IllegalStateException`. You test migrations by exporting schema JSON files during compilation and using Room's testing helper class to validate the database structure pre- and post-migration.

### Project Context: Biyeta & CZM Apps
* Both applications relied heavily on REST API integration. Networking layers were managed using Retrofit and OkHttp to parse payloads, cache responses, and handle localized error states.

### Scenarios, Mistakes, and Checklists
* **Real-world Scenario:** The user enters offline mode. Create an OkHttp Cache interceptor that checks network availability. If offline, modify the request header to force cached data read (`Cache-Control: public, only-if-cached, max-stale=...`).
* **Common Mistake:** Executing heavy database queries or network parsing on the main thread, causing frames to drop (UI freezes). Always dispatch Room DAOs or network calls using IO context.
* **Revision Checklist:**
  - [ ] Do I know how to set up Room relationships using `@Relation` annotations?
  - [ ] Can I write an interceptor that automatically appends localized Accept-Language headers to every API call?

---

## 5. BLUETOOTH & IOT HARDWARE INTEGRATION

### Core Concepts Explained
* **Bluetooth Classic vs. BLE:**
  * **Bluetooth Classic:** High bandwidth, constant streaming connection. Ideal for continuous data streaming (like weighing scale measurements).
  * **Bluetooth Low Energy (BLE):** Optimized for low power consumption, communicating via small attributes (GATT).
* **Serial Port Profile (SPP):** Standard profile for serial data transfer over Bluetooth Classic. The app establishes a connection using a UUID (`00001101-0000-1000-8000-00805F9B34FB`) and communicates via InputStream and OutputStream.
* **Background Thread Management:** Bluetooth sockets block threads during connection and input reading. This blocking must never occur on the UI thread.

### Interview Questions & Detailed Answers
* **Q1: Describe the architecture of a thread-safe, resilient Bluetooth Classic connection manager in Android.**
  * **Answer:** The manager should run as a bound background service. It contains a `ConnectThread` that initiates the socket connection using `device.createRfcommSocketToServiceRecord(UUID)`. Once connected, it launches a separate `ConnectedThread` containing an infinite loop that reads from the `InputStream` into a buffer. All state transitions (Connecting, Connected, Disconnected) are posted to the app using a thread-safe channel or StateFlow. In case of thread block, socket operations are closed using the `close()` method from another thread.
* **Q2: How do you handle buffer overflow and packet fragmentation when reading raw byte streams from industrial hardware?**
  * **Answer:** Raw serial inputs can arrive in fragments. To handle this, the `ConnectedThread` reads bytes into a temporary buffer and appends them to a `ByteArrayOutputStream` (or a ring buffer). The parser scans the accumulated bytes for specific start and end delimiters (like Carriage Return `\r` or Line Feed `\n`). Once a complete packet is detected, it is extracted, parsed into a weight model, and the remaining bytes are preserved in the accumulator for the next read loop.

### Project Context: Weighing Scale App
* In the **Weighing Scale App**, you implemented real-time Bluetooth communication with scale hardware. You managed connection socket lifecycles in background threads and parsed raw string streams into actual weights safely.

### Scenarios, Mistakes, and Checklists
* **Real-world Scenario:** The Bluetooth connection drops mid-measurement. Build an automated retry algorithm using a back-off timer. When the socket throws an `IOException` during read, close the socket, transition status to `Disconnected`, wait 3 seconds, and initiate the `ConnectThread` again.
* **Common Mistake:** Failing to release Bluetooth socket resources when closing the app, which locks the device's Bluetooth stack and requires a system reboot.
* **Revision Checklist:**
  - [ ] Am I familiar with Android Bluetooth permissions (BLUETOOTH_CONNECT, BLUETOOTH_SCAN for API 31+)?
  - [ ] Do I know how to safely close Bluetooth sockets on background thread cancellation?

---

## 6. NASCENIA PRODUCTION PROJECTS DEEP-DIVE

### **My Robi** & **My Airtel BD**
* **Project Scope:** High-traffic self-care telecommunications apps serving millions of users in Bangladesh.
* **Architecture:** MVVM with clean, modular features.
* **Responsibilities:** UI updates using XML, fixing production crash logs, and optimizing REST API configurations.
* **Technical Challenges Resolved:**
  * Debugging intermittent networking failures caused by concurrent data loads. Resolved by introducing standardized Retrofit clients with OkHttp timeout configurations and robust retry policies.
  * Screen transition lags. Resolved by profile-tuning XML view hierarchies, replacing deeply nested layouts with ConstraintLayout, and optimizing bitmap caching.

### Interview Questions & Detailed Answers
* **Q1: On a massive app like My Robi, how do you locate and prioritize critical crashes using tools like Firebase Crashlytics?**
  * **Answer:** I filter Crashlytics by the version release, crash frequency, and user impact. Focus is directed to crashes affecting the highest number of unique users (high impact). I read the obfuscated stack trace, use ProGuard mapping files to de-obfuscate the trace, locate the exact line of code, and analyze user properties or custom keys logged during the crash to understand the device state leading to the failure.
* **Q2: Explain how you optimized UI rendering performance in XML files on My Robi.**
  * **Answer:** I used Android Studio's Layout Inspector to identify deeply nested view groups (e.g., nested LinearLayouts), which cause excessive layout passes (double taxation). I flattened the layouts using ConstraintLayout. Additionally, I moved static resource allocations out of loop cycles and utilized the `include` and `merge` tags to keep layout hierarchies modular and reusable without increasing view tree depth.

---

## 7. FIREBASE SERVICES & DEVELOPMENT TOOLS

### Core Concepts Explained
* **Firebase Cloud Messaging (FCM):** Google's infrastructure for push notification dispatch. Handled in Android by extending `FirebaseMessagingService` and overriding `onMessageReceived` and `onNewToken`.
* **ProGuard & R8:** R8 is the default compiler that optimizes, shrinks, and obfuscates your Java/Kotlin bytecode. ProGuard rules (`proguard-rules.pro`) prevent R8 from obfuscating classes loaded via reflection (like JSON data models mapped by Retrofit).
* **Gradle Build Variants:** Gradle allows you to configure different builds (e.g., `debug`, `release`) using build types and product flavors (e.g., `staging`, `production`).

### Interview Questions & Detailed Answers
* **Q1: What happens to a push notification when the app is in the background vs. the foreground, and how do you handle both cases?**
  * **Answer:** 
    * If a notification contains a **notification payload**, the system tray handles it automatically when the app is in the background. When clicked, it launches the launcher Activity. In the foreground, `onMessageReceived` is called, and the app must handle it.
    * If it contains only a **data payload**, `onMessageReceived` is always called regardless of whether the app is in the foreground or background, making data payloads ideal for silent data updates or custom notification layouts.
* **Q2: Why do ProGuard rules sometimes cause Retrofit response parsing to fail in release builds, and how do you fix it?**
  * **Answer:** Retrofit uses serialization libraries (like Gson or Moshi) that inspect data model classes at runtime using reflection. R8/ProGuard shrinks and obfuscates class and field names in release builds (e.g., renaming `val userName: String` to `val a: String`). When the JSON parser tries to map `user_name` from the API to the data class, it fails because it cannot find the matching field name. We resolve this by keeping data classes intact using the `@Keep` annotation or adding `-keepclassmembers` rules in ProGuard.

---

## 8. AGILE METHODOLOGIES & PEER CODE REVIEWS

### Core Concepts Explained
* **Agile Scrum Framework:** Work is structured in short cycles called Sprints (typically 2 weeks). Key ceremonies include Sprint Planning, Daily Stand-ups, Sprint Review, and Retrospective.
* **Task Estimation:** Collaborative effort to assign complexity estimates to tasks using Story Points (often based on the Fibonacci sequence) or hours.
* **Peer Code Reviews:** Process of reviewing teammate code contributions to catch bugs, ensure architectural alignment, and share knowledge across the mobile team.

### Interview Questions & Detailed Answers
* **Q1: How do you handle constructive criticism during a peer code review?**
  * **Answer:** I treat code reviews as a collaborative learning tool, not a personal critique. I focus on code maintainability, scalability, and performance. If a reviewer suggests a change, I evaluate the reasoning behind it (e.g., structural optimization, readability) and discuss alternative patterns if needed. If I find an error in a teammate's code during review, I explain the issue constructively and suggest a solid, clean code alternative.
* **Q2: Explain how task estimation works in a sprint and how you estimate a complex feature like Bluetooth connectivity.**
  * **Answer:** We use Planning Poker. The mobile team estimates task complexity based on effort, risk, and uncertainty. For a complex feature like Bluetooth connectivity, I break the task down into sub-tasks: permission handling, socket connection manager, data parser thread, UI integration, and testing. Breaking it down reduces uncertainty and allows for a more accurate estimation of complexity (e.g., estimating 8 story points for the connection engine, and 3 points for the UI layout).

---
