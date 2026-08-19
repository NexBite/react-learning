import React, { useState } from "react";

export default function RegistrationForm({ onRegister }) {
  // Challenge 1: Object state for form fields
  const [user, setUser] = useState({
    name: "",
    email: "",
    age: "",
    city: "",
  });

  // Challenge 4: Validation error state
  const [error, setError] = useState("");

  // Challenge 2 (⭐ Better Challenge): Universal handler with Computed Property Syntax
  function handleChange(e) {
    const { name, value } = e.target;

    setUser({
      ...user,
      [name]: value, // Dynamic key lookup based on input's "name" attribute
    });
  }

  // Challenge 3 & 4: Form submission & validation logic
  function handleSubmit(e) {
    e.preventDefault();

    // Challenge 4: Validation checks
    if (!user.name.trim()) {
      setError("Please enter your name.");
      return;
    }

    if (!user.email.trim()) {
      setError("Please enter your email.");
      return;
    }

    if (!user.age) {
      setError("Please enter your age.");
      return;
    }

    if (!user.city.trim()) {
      setError("Please enter your city.");
      return;
    }

    // Clear error if validation passes
    setError("");

    // Send valid user data up to parent
    onRegister(user);

    // Reset form after successful submission
    setUser({
      name: "",
      email: "",
      age: "",
      city: "",
    });
  }

  return (
    <div style={{ maxWidth: "350px", marginBottom: "30px" }}>
      <h2>--------------------------------</h2>
      <h3 style={{ textAlign: "center" }}>Registration</h3>
      <h2>--------------------------------</h2>

      {/* Challenge 4: Display inline validation error */}
      {error && (
        <p style={{ color: "red", fontWeight: "bold", marginBottom: "15px" }}>
          {error}
        </p>
      )}

      {/* Challenge 3: Attach handleSubmit to form */}
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <label>Name:</label>
          <br />
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
            placeholder="Enter name"
            style={{ width: "100%", padding: "6px" }}
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Email:</label>
          <br />
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            placeholder="Enter email"
            style={{ width: "100%", padding: "6px" }}
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Age:</label>
          <br />
          <input
            type="number"
            name="age"
            value={user.age}
            onChange={handleChange}
            placeholder="Enter age"
            style={{ width: "100%", padding: "6px" }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>City:</label>
          <br />
          <input
            type="text"
            name="city"
            value={user.city}
            onChange={handleChange}
            placeholder="Enter city"
            style={{ width: "100%", padding: "6px" }}
          />
        </div>

        <button type="submit" style={{ width: "100%", padding: "8px", cursor: "pointer" }}>
          Register
        </button>
      </form>
    </div>
  );
}