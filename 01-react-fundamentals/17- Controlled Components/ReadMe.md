A controlled component means:
React state controls the input's value.
Example:
import { useState } from "react";

function App() {

  const [name, setName] = useState("");

  return (
    <div>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
      />


      <p>Name: {name}</p>
    </div>
  );
}

export default App;

The flow is:

User types
    ↓
onChange
    ↓
setName()
    ↓
State changes
    ↓
React re-renders
    ↓
input value updates

This is a controlled input.