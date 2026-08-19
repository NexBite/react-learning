Important connection to your JavaScript learning
In vanilla JavaScript you used:
const input = document.getElementById("taskInput");
const value = input.value;
In React:
const [task, setTask] = useState("");
and:
<input
  value={task}
  onChange={(e) => setTask(e.target.value)}
/>

React is now managing the input value through state.
# -- 📝 Form Submit
Use:
function handleSubmit(e) {
  e.preventDefault();

  console.log(name);
}
Then:
<form onSubmit={handleSubmit}>
Why:
e.preventDefault();
Normally a browser form submission can reload/navigate the page.
React applications usually handle the submission themselves.