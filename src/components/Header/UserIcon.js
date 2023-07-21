import React from "react";
import { Link } from "react-router-dom";

const UserIcon = ({ user, handleLoginLogout }) => (
  <div onClick={handleLoginLogout}>
    {user ? (
      <Link to="/profile">
        <i className="fas fa-user"></i>
      </Link>
    ) : (
      <Link to="/login">
        <span>Login / Sign Up</span>
      </Link>
    )}
  </div>
);

export default UserIcon;
