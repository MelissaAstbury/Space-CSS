import React from "react";
import { FaDiceD20 } from "react-icons/fa";

import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="wrapper">
        <div className="logo">
          <FaDiceD20 size={36} />
        </div>
        <ul className="nav-links">
          <li className="nav-link">Home</li>
          <li className="nav-link">Learn</li>
          <li className="nav-link">Explore</li>
          <li className="nav-link">Careers</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
