React forms are extremely important.
Basic form:
function App() {
  return (
    <form>
      <input type="text" />
      <input type="email" />
      <button type="submit">
        Submit
      </button>
    </form>
  );
}
But we need to know what the user typed.
That's where state comes in.