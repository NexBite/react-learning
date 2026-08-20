import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { productsData } from "./data/products";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import RegistrationPage from "./pages/RegistrationPage";

// import button 

import CounterButtons from './components/CounterButtons';

import CounterDisplay from './components/CounterDisplay';


export default function App() {
  const [products, setProducts] = useState(productsData);
  const [users, setUsers] = useState([]);
  const [count, setCount] = useState(0);





  const handleToggleStock = (id) => {
    setProducts((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, inStock: !item.inStock } : item
      )
    );
  };

  const handleRegister = (newUser) => {
    setUsers((prevUsers) => [...prevUsers, newUser]);
  };

  return (
    <BrowserRouter>
      <div style={{ padding: "20px", fontFamily: "sans-serif", maxWidth: "600px", margin: "0 auto" }}>
        <Header />
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={<HomePage products={products} onToggleStock={handleToggleStock} />}
          />
          <Route
            path="/register"
            element={<RegistrationPage users={users} onRegister={handleRegister} />}
          />
        </Routes>

        <Footer />
        // counter 
      </div>
      <div style={{ textAlign: 'center', padding: '20px' }}>
      <CounterDisplay count={count} />
      <CounterButtons count={count} setCount={setCount} />
    </div>
    </BrowserRouter>
  );
}