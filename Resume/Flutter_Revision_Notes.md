# Flutter Interview Quick Revision Notes

A high-yield summary cheat sheet for last-minute review before Flutter Software Engineer interviews.

---

## 1. DART CONCURRENCY & MEMORY
* **Event Loop:** Single-threaded execution loop. Processes events from the **Microtask Queue** (internal priority tasks, execution first) and the **Event Queue** (network I/O, user taps, UI draw triggers).
* **Isolates:** Separate memory heap executions. They do not share memory and communicate using message passing via `ReceivePort` and `SendPort`.
* **Streams:** Asynchronous event sequences.
  * *Single-Subscription:* Listens once. Throws error if listened to again.
  * *Broadcast:* Allows multiple listeners. Convert using `.asBroadcastStream()`.

---

## 2. FLUTTER LAYOUT & THREE TREES
* **The Trees:**
  * **Widget Tree:** Blueprint configuration. Cheap, immutable.
  * **Element Tree:** structural representation. Manages lifecycle. Reuse occurs if `runtimeType` and `key` are identical during rebuilds.
  * **RenderObject Tree:** Low-level layout and paint instructions. Computes constraints.
* **Layout Rule:** *"Constraints go down, Sizes go up, Parent sets position."*

---

## 3. STATE MANAGEMENT CHEAT SHEET
* **Provider:** Wrapper around InheritedWidget. Exposes model downward. Rebuilds depend on `context.watch<T>()` or `Consumer`.
* **Riverpod:** Compile-time safe, independent of context. Exposes global providers.
  * `ref.watch(provider)`: Subscribes to provider changes, triggers composable rebuild.
  * `ref.read(provider)`: Reads provider state once without subscribing (used inside button click handlers).
  * `ref.listen(provider, callback)`: Performs action (navigation, dialog) on state change without rebuilding UI.

---

## 4. STORAGE & NETWORKING
* **Dio Client:** Advanced network capabilities: interceptors (managing auth tokens, retry delays, and offline mocks), global headers, file upload progress, request cancellations.
* **Secure Storage:** Flutter Secure Storage encrypts keys and values using Android KeyStore (AES-256) and iOS Keychain services, protecting credentials.
* **Code Generation:** Use `retrofit_generator` with `build_runner` to automatically compile interfaces into type-safe network callers.

---

## 5. PROJECT QUICK FLASHCARDS
* **Shojja Hospital:** Lead Flutter Developer. Clean Architecture, Riverpod. Offline-first caching handled via Dio Interceptors and Riverpod state caching. Secure OTP verification via REST APIs.
* **CZM Mobile App & Biyeta:** Matrimony & Zakat apps. Used Provider. Contributions: Dynamic list optimization (lazy list rendering to remove visual lag) and profile setup modules.

---

## 6. TOP 5 RAPID-FIRE QUESTIONS
* **Q1: What is the difference between Hot Reload and Hot Restart?**  
  * *Answer:* Hot Reload injects source code changes directly into the Dart VM, preserving the current state. Hot Restart resets the application state and compiles all widget configurations from scratch.
* **Q2: Why should you avoid using deeply nested `setState` calls?**  
  * *Answer:* `setState` marks the current stateful element as dirty, forcing it and all its children to rebuild, wasting GPU cycles on unchanged views.
* **Q3: What does `@pragma('vm:entry-point')` accomplish?**  
  * *Answer:* Tells the compiler that the annotated function is called from native code (like background FCM messaging isolates) and must not be stripped out during tree-shaking optimizations.
* **Q4: How do you mock API layers during Use Case tests?**  
  * *Answer:* Use `mockito` or `mocktail` to write mock implementations of abstract Repository interfaces and mock data responses inside use-case tests.
* **Q5: Why is the Domain layer strictly forbidden from importing Flutter libraries?**  
  * *Answer:* To ensure core business rules remain pure Dart code, completely decoupled from UI engines, making them testable in isolation.
