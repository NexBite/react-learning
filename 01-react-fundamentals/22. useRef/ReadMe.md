22. useRef
  useRef is different from useState.
  const countRef = useRef(0);
  A ref can store a value without causing a component re-render when that value changes.
# Most common use: DOM access
  import { useRef } from "react";
    function App() {
      const inputRef = useRef(null);

      function focusInput() {
        inputRef.current.focus();
      }
      return (
        <>
          <input ref={inputRef} />
          <button onClick={focusInput}>
            Focus Input
          </button>
        </>
      );
    }
# When the button is clicked:
    button
    ↓
    focusInput()
      ↓
    inputRef.current
      ↓
    .focus()
      ↓
    Input receives focus
# -- useState vs useRef
-------------------------------------------------------------------------------
| `useState`                   | `useRef`                                     |
| ---------------------------- | -------------------------------------------- |
| Stores data                  | Stores a value/reference                     |
| Changing it causes re-render | Changing `.current` does not cause re-render |
| Used for UI                  | Often used for DOM/timers/previous values    |
| `setCount()`                 | `ref.current = ...`                          |
-------------------------------------------------------------------------------