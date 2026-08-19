# - 8️ Conditional Rendering

Conditional rendering means:
Show different UI depending on a condition.
already know JavaScript if/else.
For example:
const isLoggedIn = true;
if (isLoggedIn) {
    console.log("Welcome");
} else {
    console.log("Please login");
}
React can do the same thing.
Using ternary
function App() {
  const isLoggedIn = true;

  return (
    <div>
      {isLoggedIn ? (
        <h2>Welcome Aditya</h2>
      ) : (
        <h2>Please Login</h2>
      )}
    </div>
  );
}
If:
isLoggedIn = true
you get:
Welcome Aditya
If:
isLoggedIn = false
you get:
Please Login
&& conditional rendering
You can also use:
{isLoggedIn && <button>Logout</button>}
Meaning:
if isLoggedIn
    ↓
show Logout button
This is very common in React.