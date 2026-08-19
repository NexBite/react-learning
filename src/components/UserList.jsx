import React from "react";
import UserCard from "./UserCard";

export default function UserList({ users }) {
  if (users.length === 0) {
    return <p>No registered users yet.</p>;
  }

  return (
    <div>
      <p style={{ color: "green", fontWeight: "bold" }}>
        Registration successful!
      </p>

      {/* Challenge 5: Rendering arrays with map */}
      {users.map((registeredUser, index) => (
        <UserCard key={index} user={registeredUser} />
      ))}
    </div>
  );
}