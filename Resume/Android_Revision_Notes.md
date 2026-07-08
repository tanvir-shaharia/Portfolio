# Android Interview Quick Revision Notes

A high-yield summary cheat sheet for last-minute review before Android Software Engineer interviews.

---

## 1. KOTLIN CONCURRENCY & LANGUAGE
* **Null Safety:** \`val a: String? = null\` (nullable). Use safe call \`a?.length\`, Elvis \`a?.length ?: 0\`, or non-null assertion \`a!!\` (avoid in production).
* **Coroutines Builders:** 
  * \`launch\`: Async, returns a \`Job\`, fire-and-forget, propagates errors immediately.
  * \`async\`: Async, returns a \`Deferred<T>\`, retrieve result via \`await()\`, errors are stored until \`.await()\` execution.
* **Flows vs LiveData:**
  * **Flow:** Cold stream. Executes on collection. Requires a coroutine scope. Not lifecycle-aware by default.
  * **StateFlow:** Hot stream. Always holds state (requires initial value), active collector updates.
  * **LiveData:** Hot, lifecycle-aware observable. Caches latest value. Only emits when observer is active (STARTED/RESUMED).

---

## 2. JETPACK COMPOSE CHEAT SHEET
* **Recomposition:** Re-running composables when their State changes. Optimize by hoisting state and using \`remember\` to cache values.
* **Compose State Lifecycle:** Use \`remember { mutableStateOf(value) }\` to persist state across recompositions, and \`rememberSaveable\` to survive orientation/config changes.
* **Side Effects API:**
  * \`LaunchedEffect(key)\`: Runs suspend code when \`key\` changes. Bound to composable lifecycle.
  * \`rememberCoroutineScope()\`: Exposes a coroutine scope to launch jobs in user-triggered events (e.g. clicks).
  * \`DisposableEffect\`: Runs effect cleanup when composable leaves composition.

---

## 3. ARCHITECTURE & DI
* **Clean Architecture:** Domain (Kotlin-only; Use Cases, Entities, Repositories definitions) <- Presentation (Compose/XML Views, ViewModels) & Data (SQLite, Retrofit, Repository implementations).
* **Dependency Injection (Hilt):** Annotation-driven compilation validation. Components: \`@HiltAndroidApp\`, \`@AndroidEntryPoint\` (activities/fragments), \`@Inject constructor()\`, \`@Module\` + \`@Provides\` (injecting interface implementations).

---

## 4. BLUETOOTH CLASSIC (SPP) SYSTEM DESIGN
* **Connection Lifecycle:** Socket creation using SPP UUID -> Asynchronous thread block to establish RFCOMM socket -> Continuous InputStream while loop in background thread -> Parsing byte frames based on start/end delimiters (\`\r\n\`).
* **Auto-Reconnect Policy:** Back-off timer. Catch connection exceptions, close current socket, wait 3 seconds, and re-launch connection thread to avoid resource leaks.

---

## 5. PROJECT QUICK FLASHCARDS
* **My Robi / My Airtel BD:** High-traffic self-care apps. Built in Kotlin/XML using MVVM. Contribution: UI updates, optimizing network calls (OkHttp/Retrofit), flattening XML view trees using ConstraintLayout to avoid double taxation.
* **Weighing Scale App:** Native Kotlin app. Contribution: Managed Bluetooth serial connection threads, handled data buffering and auto-recovery logic during physical disconnections.

---

## 6. TOP 5 RAPID-FIRE QUESTIONS
* **Q1: Why does Android require custom ProGuard rules for Gson data classes?**  
  * *Answer:* Gson uses reflection to map JSON fields to properties. ProGuard obfuscates properties (renaming them to `a`, `b`, etc.) in release builds, breaking JSON mapping. Keep them using `@Keep` or `@SerializedName`.
* **Q2: What is the difference between `withContext` and `Async`?**  
  * *Answer:* `withContext` is a suspending function that switches coroutine contexts synchronously (blocks the calling coroutine until completion). `async` launches an asynchronous block immediately in parallel.
* **Q3: What causes `Double Taxation` in Android Layouts?**  
  * *Answer:* Deeply nested view hierarchies (especially LinearLayouts with weights) that force the layout engine to perform two sizing passes on children, leading to dropped frames.
* **Q4: How do you collect a Flow safely in a Composable?**  
  * *Answer:* Collect using `collectAsStateWithLifecycle()` to ensure collection automatically pauses when the application goes to the background.
* **Q5: How does Room handle database migrations?**  
  * *Answer:* By tracking schemas via JSON files. Define a `Migration` class detailing raw SQL migration scripts (`database.execSQL(...)`) and provide it to the database builder.
