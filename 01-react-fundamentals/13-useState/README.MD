# 13. useState — Today's missing topic
useState is a React Hook that allows a component to remember information and update the UI when that information changes.
Basic example:
import { useState } from "react";
function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>{count}</h1>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>

      <button onClick={() => setCount(count - 1)}>
        Decrease
      </button>
      <button onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
}

export default App;

Understand this line very clearly: