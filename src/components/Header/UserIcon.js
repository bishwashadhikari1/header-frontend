// src/components/Header/UserIcon.js
import React from 'react';

// The UserIcon component
const UserIcon = ({ user, handleLoginLogout }) => (
  <div onClick={handleLoginLogout}>
    {user ? (
      <img src={user.icon} alt="User Icon" />
    ) : (
      <span>Login / Sign Up </span> 
    )}
  </div>
);

export default UserIcon;
