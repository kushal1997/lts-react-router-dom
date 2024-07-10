// src/LoaderNavLink.jsx
import React, { useState } from "react";
import { NavLink as Link, useNavigate } from "react-router-dom";

const NavLink = ({ to, children, activeCSS, inActiveCSS, ...rest }) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    setLoading(true);
    const delay = Math.floor(Math.random() * 11000) + 10000; // Random delay between 10-20 seconds

    setTimeout(() => {
      setLoading(false);
      navigate(to);
    }, delay);
  };

  return (
    <>
      {loading ? (
        "s"
      ) : (
        <Link
          {...rest}
          to={to}
          className={({ isActive }) => (isActive ? activeCSS : inActiveCSS)}
          onClick={handleClick}
        >
          {children}
        </Link>
      )}
    </>
  );
};

export default NavLink;
