# - 145 Updating Objects in State
Suppose we have:
import { useState } from "react";

function App() {
  const [user, setUser] = useState({
    name: "Aditya",
    age: 30,
    city: "Kolkata"
  });
  return (
    <div>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>City: {user.city}</p>
    </div>
  );
}

export default App;
Now we want to change the city.
# -- ❌ Don't do this
user.city = "Delhi";
React state should not be mutated directly.
# -- ✅ Use the setter
setUser({
  ...user,
  city: "Delhi"
});
The spread operator creates a new object:
old user
   ↓
{ name, age, city }
   ↓
...user
   ↓
new object
   ↓
city: "Delhi"
Example
<button
  onClick={() =>
    setUser({
      ...user,
      city: "Delhi"
    })
  }
>
  Change City
</button>
Now:
Suppose:

const [products, setProducts] = useState([
  "Laptop",
  "Mobile",
  "Keyboard"
]);

You should not do:

products.push("Mouse"); // ❌

Instead:

setProducts([
  ...products,
  "Mouse"
]);

Now:

Laptop
Mobile
Keyboard
Mouse
Adding an item
function addProduct() {
  setProducts([
    ...products,
    "Mouse"
  ]);
}
Removing an item
Suppose:
const [products, setProducts] = useState([
  { id: 1, name: "Laptop" },
  { id: 2, name: "Mobile" },
  { id: 3, name: "Keyboard" }
]);

Remove the Mobile:

setProducts(
  products.filter(product => product.id !== 2)
);
This is very important.
You will use:
map()
filter()
constantly in React applications.
Updating an array item
Suppose you want to change Laptop's price:
const [products, setProducts] = useState([
  { id: 1, name: "Laptop", price: 60000 },
  { id: 2, name: "Mobile", price: 25000 }
]);

Use:
setProducts(
  products.map(product =>
    product.id === 1
      ? { ...product, price: 55000 }
      : product
  )
);

Think:
map()
 ↓
find matching id
 ↓
copy object
 ↓
change price
 ↓
return other objects unchanged