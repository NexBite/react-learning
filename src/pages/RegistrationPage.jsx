import React from "react";
import RegistrationForm from "../components/RegistrationForm";
import UserList from "../components/UserList";

export default function RegistrationPage({ users, onRegister }) {
  return (
    <div>
      <RegistrationForm onRegister={onRegister} />
      <UserList users={users} />
    </div>
  );
}