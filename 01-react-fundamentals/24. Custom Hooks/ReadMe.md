# 24. Custom Hooks
A custom Hook is a way to reuse React logic.
Suppose you repeatedly need window width.
Instead of putting the same logic into five components:
Component A
   ↓
window width logic
Component B
   ↓
window width logic
Component C
   ↓
window width logic

# Create:
useWindowWidth()

# Example:
import { useEffect, useState } from "react";
function useWindowWidth() {

  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };

  }, []);
  return width;
}
export default useWindowWidth;

# Then:

function App() {
  const width = useWindowWidth();
  return <h1>Width: {width}</h1>;
}

That's a Custom Hook.

# Rule
Custom Hooks normally start with:
# use
Examples:
  useAuth()
  useFetch()
  useLocalStorage()
  useWindowWidth()
  useForm()
  The key idea:
  Custom Hooks reuse logic, not UI.
  