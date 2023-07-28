import React from "react";
import { Link } from "react-router-dom";

const UserIcon = ({ user, handleLoginLogout }) => (
  <div onClick={handleLoginLogout}>
    {user ? (
      <Link to="/profile">
      {/* in the src url below we can use user.imageURL to get user's actual image after backend is created*/}
        <img src="https://cdn-icons-png.flaticon.com/512/1946/1946429.png" alt="User" className="w-6 h-6 rounded-full" />
      </Link>
    ) : (
      <Link to="/login">
        <div className="text-xs sm:text-xs md:text-base">
          <span>ログイン / 新規登録</span>
        </div>
      </Link>
    )}
  </div>
);

export default UserIcon;
