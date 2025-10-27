# useLocalStorage Hook

This hook creates a persistent piece of state that automatically syncs with localStorage, keeping UI reactive and up-to-date across reloads and sessions.

## Features

-   Lazy initialization of state to load from localStorage on first render.
-   Synchronized React state with localStorage on updates via useEffect.
-   Try-catch in getters and setters for error handling (e.g., JSON parse errors).
-   Returns [value, setValue] tuple, similar to useState, for easy integration.
-   Simple abstraction that combines React state and localStorage persistence.

## Use Case

-   Persist simple React state like user preferences, themes, form inputs.
-   Automatically update UI on state changes with persistent backing.
-   Ideal for typical React component state syncing with localStorage.

---

# useLocalStorageWithSetGet Hook

This variant adds manual control by exposing setter and getter methods, featuring access or update localStorage whenever needed, but should be used carefully to avoid losing React’s auto reactivity

## Features

-   Includes all features of useLocalStorage state sync.
-   Explicit methods: setItem() for setting localStorage and state, getItem() to fetch the current value from localStorage directly.
-   Allows manual control over storage operations beyond automatic state sync.
-   Useful for cases needing explicit read/write calls separate from component state.

## Use Case

-   Access or update localStorage outside component lifecycle or React render.
-   Perform explicit read/write operations, e.g. in event handlers or effects.
-   Scenarios requiring direct localStorage management alongside reactive UI sync.
-   Handling complex cases with manual control over persistence timing.
