# 25. useReducer
You've already learned:
useState()
For simple state:
const [count, setCount] = useState(0);
But imagine a complicated application:
cart
 ├── add item
 ├── remove item
 ├── increase quantity
 ├── decrease quantity
 └── clear cart
Many state transitions can become difficult to manage with many setState() calls.

That's where useReducer can help.
Basic idea
const [state, dispatch] = useReducer(reducer, initialState);
There are three important pieces:
state
   ↓
current data
dispatch
   ↓
send an action
reducer
   ↓
decides how state changes
Example:
function reducer(state, action) {

  if (action.type === "increment") {
    return { count: state.count + 1 };
  }
  if (action.type === "decrement") {
    return { count: state.count - 1 };
  }
  return state;
}

# Then:

dispatch({ type: "increment" });

Flow:

Button
  ↓
dispatch()
  ↓
action
  ↓
reducer
  ↓
new state
  ↓
React re-renders
useState vs useReducer
useState
   ↓
Simple state
useReducer
   ↓
Complex state transitions

Don't use `useReducer just because it exists.
For:
counter
boolean
simple input
useState is usually enough.
For:
complex form
shopping cart
multi-step state transitions

useReducer can make the logic clearer.
# 26. useMemo
useMemo is about performance optimization.
Suppose you have an expensive calculation:
const result = expensiveCalculation(data);
Every render could run that calculation again.
useMemo allows React to cache the calculated result until its dependencies change.
Example:
const expensiveResult = useMemo(() => {
  return expensiveCalculation(numbers);
}, [numbers]);

# Think:
numbers
   ↓
calculation
   ↓
result

numbers didn't change?
   ↓
reuse previous result
If numbers changes:
numbers changed
      ↓
calculate again
Don't use useMemo everywhere
This is important.
useMemo is an optimization tool, not something every variable needs.
Don't automatically write:
const name = useMemo(() => "Aditya", []);
That's pointless.
Use it when there is a meaningful expensive calculation or a demonstrated performance reason.
One sentence to remember
Lifting state up = move shared state to the nearest common parent so multiple components can use the same state.