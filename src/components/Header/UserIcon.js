import React from 'react';

// The UserIcon component
const UserIcon = ({ user, handleLoginLogout }) => (
  <div onClick={handleLoginLogout}>
    {user ? (
      <i className="fas fa-user"></i>
    ) : (
      <span>Login / Sign Up </span> 
    )}
  </div>
);

export default UserIcon;
