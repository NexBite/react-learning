import React from "react";

export default function UserCard({ user }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "6px",
        padding: "12px",
        marginBottom: "10px",
        backgroundColor: "#f9f9f9",
      }}
    >
      <p style={{ margin: "4px 0" }}><strong>Name:</strong> {user.name}</p>
      <p style={{ margin: "4px 0" }}><strong>Email:</strong> {user.email}</p>
      <p style={{ margin: "4px 0" }}><strong>Age:</strong> {user.age}</p>
      <p style={{ margin: "4px 0" }}><strong>City:</strong> {user.city}</p>
    </div>
  );
}