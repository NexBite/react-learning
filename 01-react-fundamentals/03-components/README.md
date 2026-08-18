# --3️ Components
  Components are one of the most important React concepts.
  A component is generally a JavaScript function that returns UI.
  Example:
    function Welcome() {
      return <h1>Welcome to React</h1>;
  }
  Then use it:
    function App() {
    return (
        <div>
            <Welcome />
        </div>
    );
}
Notice:
<Welcome />
This is using your component.

# Component naming
React components should start with a capital letter.
Correct:
function ProductCard() {
    return <h2>Laptop</h2>;
}
Then:
<ProductCard />
Incorrect:
function productCard() {
    return <h2>Laptop</h2>;
}
The capital letter helps React distinguish your component from normal HTML tags.

# Components can contain JavaScript
function Product() {

    const name = "Laptop";
    const price = 60000;

          return (
              <div>
                  <h2>{name}</h2>
                  <p>₹{price}</p>
              </div>
          );
      }
# 4️ JSX
JSX is the syntax that lets us write markup-like code inside JavaScript.

# Example: 
  function App() {
        return (
            <div>
                <h1>Hello React</h1>
                <p>I'm learning JSX.</p>
            </div>
        );
    }
    It looks like HTML:
    <h1>Hello React</h1>
    but it's being written inside JavaScript.
# JSX is NOT exactly HTML

  There are some differences.

  For example, HTML uses:

  <div class="container">

  JSX uses:

  <div className="container">

  Because class is a JavaScript-related reserved concept, JSX uses:

  className
# JSX requires one parent
    function App() {

      return (
          <h1>Hello</h1>
          <p>React</p>
      );
  }
# You need a parent:
  function App() {

    return (
        <div>
            <h1>Hello</h1>
            <p>React</p>
        </div>
    );
}
# Or use a React Fragment:
  function App() {

    return (
        <>
            <h1>Hello</h1>
            <p>React</p>
        </>
    );
}
# The fragment:
<>
...
</>
# JSX attributes
HTML:
<button class="btn">
    Click
</button>
JSX:
<button className="btn">
    Click
</button>

# 5️ Expressions in JSX
This is where your JavaScript knowledge becomes very useful.
You can put JavaScript expressions inside JSX using:
{ }
# Example:
function App() {

    const name = "Aditya";

    return (
        <h1>
            Hello {name}
        </h1>
    );
}
# Variables
function App() {

    const name = "Aditya";
    const age = 30;

    return (
        <div>
            <h2>{name}</h2>
            <p>Age: {age}</p>
        </div>
    );
}
# Arithmetic expressions

function App() {

    const price = 60000;
    const quantity = 2;

    return (
        <h2>
            Total: ₹{price * quantity}
        </h2>
    );
}
# String expressions
const firstName = "Aditya";
const lastName = "Kumar";

return (
    <h2>
        {firstName + " " + lastName}
    </h2>
);
# Template literals
  const name = "Aditya";

return (
    <h2>
        {`Hello ${name}`}
    </h2>
);
# Expressions vs Statements
An expression produces a value.

Examples:

10 + 20
name
price * quantity
user.name

These can go inside JSX:

<p>{10 + 20}</p>

But statements such as:

if
for
while

cannot simply be placed inside {}.

For example, this doesn't work:

{
    if (age > 18) {
        "Adult";
    }
}

Later we'll learn the React way to handle this through conditional rendering.
# Example combining all 5 topics

Let's build a small product component.
function Product() {

    const productName = "Laptop";
    const brand = "Dell";
    const price = 60000;
    const quantity = 2;

    return (
        <div>

            <h1>Product Details</h1>

            <h2>{productName}</h2>

            <p>Brand: {brand}</p>

            <p>Price: ₹{price}</p>

            <p>
                Total: ₹{price * quantity}
            </p>

        </div>
    );
}
Then:
  function App() {

    return (
        <Product />
    );
}
You just used:
React
 ↓
Component
 ↓
JSX
 ↓
JavaScript expressions