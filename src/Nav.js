import React, { useState, useEffect } from "react";
import "./Nav.css";

function Nav() {
  const [handleShow, setHandleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setHandleShow(true);
      } else setHandleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${handleShow && "nav__black"}`}>
      <img
        className="nav__logo"
        src="https://www.clipartmax.com/png/full/215-2154144_transparent-background-netflix-logo.png"
        alt="Netflix Logo"
      />
      <img
        className="nav__avatar"
        src="https://i2.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1"
        alt="Netflix User Avatar"
      />
    </div>
  );
}

export default Nav;
