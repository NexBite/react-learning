# useCallback is related to functions.
Normally:
function App() {

  const handleClick = () => {
    console.log("Clicked");
  };

}
A new function can be created when the component renders again.
With:
const handleClick = useCallback(() => {
  console.log("Clicked");
}, []);

React can preserve the function reference between renders until its dependencies change.
Think:
useMemo
   ↓
memoize a VALUE
useCallback
   ↓
memoize a FUNCTION
That's the easiest distinction.