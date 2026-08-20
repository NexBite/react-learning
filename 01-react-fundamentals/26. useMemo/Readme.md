# Problem

# Imagine an expensive calculation:
function calculateTotal(products) {
  console.log("Calculating...");

  return products.reduce(
    (total, product) => total + product.price,
    0
  );
}

Every time the component re-renders, this calculation can run again.

useMemo lets React remember the calculated value.
const total = useMemo(() => {
  return calculateTotal(products);
}, [products]);

# Think:
products
   ↓
expensive calculation
   ↓
useMemo
   ↓
cached result
If products hasn't changed, React can reuse the previous result.
Important
useMemo is a performance optimization, not something you should automatically use for every calculation.