# -- 10 Keys
You may notice React will give you a warning:
Each child in a list should have a unique "key" prop.
So we add:
{products.map((product, index) => (
  <p key={index}>{product}</p>
))}
Better when your data has IDs:
const products = [
  { id: 1, name: "Laptop" },
  { id: 2, name: "Mobile" },
  { id: 3, name: "Keyboard" }
];
Then:
{products.map((product) => (
  <p key={product.id}>
    {product.name}
  </p>
))}
Why keys?
React uses keys to identify which list item is which when the list changes.
Prefer:
key={product.id}
rather than:
key={index}
when you have a stable unique ID.