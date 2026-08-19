import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ display: "flex", gap: "15px", marginBottom: "20px", paddingBottom: "10px", borderBottom: "1px solid #ccc" }}>
      <Link to="/" style={{ textDecoration: "none", fontWeight: "bold" }}>Store Inventory</Link>
      <Link to="/register" style={{ textDecoration: "none", fontWeight: "bold" }}>Registration</Link>
    </nav>
  );
}