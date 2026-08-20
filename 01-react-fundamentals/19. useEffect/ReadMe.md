19. useEffect
What problem does useEffect solve?
React components render UI.
But sometimes we need to perform something outside the normal rendering process.
For example:
Fetch API data
Start a timer
Subscribe to something
Update document title
Connect to an external system
That's where useEffect comes in.
# Basic example
  import { useEffect } from "react";
  function App() {
    useEffect(() => {
      console.log("Component rendered");
    });
    return <h1>Hello React</h1>;
  }
  The function inside useEffect runs after React renders.
  Think:
  Component renders
       ↓
  React updates UI
        ↓
  useEffect runs
# Dependency array
  `This is extremely important.
  useEffect(() => {
    console.log("Runs once");
  }, []);
  The empty array means:
  Run this effect after the initial render.`
# With dependency
  useEffect(() => {
  console.log("Count changed");
  }, [count]);
Now:
    count changes
      ↓
    component renders
        ↓
    effect runs
# No dependency array
  useEffect(() => {
  console.log("Runs after every render");
  });
  Remember
useEffect(() => {
   // effect
}, []);
[]

Run once after initial render.
  useEffect(() => {
    // effect
  }, [count]);
  [count]
  Run when count changes.
  useEffect(() => {
    // effect
  });
  No array
  Run after every render.