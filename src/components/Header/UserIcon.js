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
        <div className="text-xs sm:text-xs md:text-base">
          <span>Login / Sign Up</span>
        </div>
      </Link>
    )}
  </div>
);

export default UserIcon;
