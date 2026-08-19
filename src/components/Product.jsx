// import React from "react";

export default function Product({ id, name, brand, price, inStock, onToggleStock }) {
  return (
    <div style={{ border: "1px solid #ddd", padding: "12px", marginBottom: "10px", borderRadius: "6px" }}>
      <h3>{name}</h3>
      <p>Brand: {brand}</p>
      <p>Price: ₹{price}</p>
      <p style={{ color: inStock ? "green" : "red", fontWeight: "bold" }}>
        {inStock ? "✓ In Stock" : "✗ Out of Stock"}
      </p>
      <button onClick={() => onToggleStock(id)}>
        Toggle Stock Status
      </button>
    </div>
  );
}