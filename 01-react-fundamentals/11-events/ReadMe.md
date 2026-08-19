# ----- 11 Events
React events are similar to JavaScript DOM events.
JavaScript:
button.addEventListener("click", handleClick);
React:
<button onClick={handleClick}>
  Click Me
</button>
Example:
function App() {
  function handleClick() {
    console.log("Button clicked");
  }
  return (
    <button onClick={handleClick}>
      Click Me
    </button>
  );
}
⚠️ Important
Don't do:
<button onClick={handleClick()}>
❌ This calls the function immediately.
Use:
<button onClick={handleClick}>

✅ React calls it when the button is clicked.
Passing an event
function handleChange(event) {
  console.log(event.target.value);
}

return (
  <input onChange={handleChange} />
);
You can also use:
<input
  onChange={(e) => console.log(e.target.value)}
/>
This will be very important when we learn forms.