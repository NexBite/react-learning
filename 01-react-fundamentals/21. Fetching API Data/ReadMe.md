21. Fetching API Data
This is one of the most common uses of useEffect.
Suppose we want:
  React
    ↓
  API
    ↓
  Users
    ↓
  State
    ↓
  UI
Example:
import { useEffect, useState } from "react";

function App() {

  const [users, setUsers] = useState([]);

  useEffect(() => {

    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => {
        setUsers(data);
      });

  }, []);

  return (
    <div>
      {users.map(user => (
        <p key={user.id}>
          {user.name}
        </p>
      ))}
    </div>
  );
}

export default App;
The important sequence is:
Component renders
       ↓
useEffect
       ↓
fetch()
       ↓
API response
       ↓
setUsers(data)
       ↓
React re-renders
       ↓
users displayed
Real-world version
Usually you'll also have:
const [loading, setLoading] = useState(true);
const [error, setError] = useState("");
Then:
Loading
   ↓
API request
   ↓
Success → show data
OR
Failure → show error
This is the pattern you'll use constantly in real React applications.