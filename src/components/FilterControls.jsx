// import React from "react";

export default function FilterControls({
  searchTerm,
  setSearchTerm,
  maxPrice,
  setMaxPrice,
  showOnlyInStock,
  setShowOnlyInStock,
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "20px" }}>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        <div>
          <label>Search: </label>
          <input
            type="text"
            placeholder="Search product or brand..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div>
          <label>Max Price: ₹{maxPrice} </label>
          <input
            type="range"
            min="1000"
            max="70000"
            step="1000"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
          />
        </div>
      </div>

      <div>
        <button onClick={() => setShowOnlyInStock(!showOnlyInStock)} style={{ padding: "6px 12px" }}>
          {showOnlyInStock ? "Show All Items" : "Show In-Stock Only"}
        </button>
      </div>
    </div>
  );
}