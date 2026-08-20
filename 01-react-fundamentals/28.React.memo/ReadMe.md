# 28. React.memo
Now imagine:
App
│
├── Header
├── Product
└── Footer
App re-renders.
A child can potentially render again even if its props haven't changed.
React.memo can help prevent unnecessary re-renders when the component's props are unchanged.
import { memo } from "react";

const Product = memo(function Product({ name, price }) {
  console.log("Product rendered");
  return (
    <div>
      <h3>{name}</h3>
      <p>₹{price}</p>
    </div>
  );
});

export default Product;
# The three concepts are therefore:
useMemo
   → memoize calculated value

useCallback
   → memoize function reference

React.memo
   → memoize component rendering based on props
⚠️ Don't blindly use all three

Memoization has its own cost. Use it when it actually helps performance.