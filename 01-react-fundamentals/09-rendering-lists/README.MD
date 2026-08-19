# 9️ Rendering Lists

You already learned JavaScript:

const products = [
  "Laptop",
  "Mobile",
  "Keyboard"
];

You can use .map() in React:

function App() {


  const products = [
    "Laptop",
    "Mobile",
    "Keyboard"
  ];


  return (
    <div>
      {products.map((product) => (
        <p>{product}</p>
      ))}
    </div>
  );
}

Output:

Laptop
Mobile
Keyboard

This is rendering a list.