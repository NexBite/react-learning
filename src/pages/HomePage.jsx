import React, { useState } from "react";
import Product from "../components/Product";
import FilterControls from "../components/FilterControls";

export default function HomePage({ products, onToggleStock }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [maxPrice, setMaxPrice] = useState(70000);
  const [showOnlyInStock, setShowOnlyInStock] = useState(false);

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPrice = product.price <= maxPrice;
    const matchesStock = showOnlyInStock ? product.inStock : true;

    return matchesSearch && matchesPrice && matchesStock;
  });

  return (
    <div>
      <FilterControls
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        maxPrice={maxPrice}
        setMaxPrice={setMaxPrice}
        showOnlyInStock={showOnlyInStock}
        setShowOnlyInStock={setShowOnlyInStock}
      />

      <h2>Store Inventory</h2>
      <div>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <Product
              key={product.id}
              {...product}
              onToggleStock={onToggleStock}
            />
          ))
        ) : (
          <p>No products match your criteria.</p>
        )}
      </div>
    </div>
  );
}