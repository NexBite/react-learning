# -- 1️2️ State
Now we reach one of the most important React concepts.
What is State?
State is data that belongs to a component and can change over time.
Example:
Counter

0
↑
1
↑
2
↑
3
The value changes.
React needs a way to remember that value.
That's what state does.
useState
We use the useState Hook.
import { useState } from "react";

function App() {

  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
}

export default App;
This line is extremely important:
const [count, setCount] = useState(0);
Think:
count
   ↓
current value
setCount
   ↓
function that changes the value

0
   ↓
initial value