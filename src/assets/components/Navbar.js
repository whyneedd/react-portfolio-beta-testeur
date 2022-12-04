import { useState } from "react";

export const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <header className="header header-js">
      <ul className={`${isActive ? "active" : ""}`}>
        <li>
          <a href="#" className="link">
            {" "}
            Home
          </a>
        </li>
        <li>
          <a href="#" className="link">
            {" "}
            About
          </a>
        </li>
        <li>
          <a href="#" className="link">
            {" "}
            Services
          </a>
        </li>
        <li>
          <a href="#" className="link">
            {" "}
            Contact
          </a>
        </li>
      </ul>
      <div
        onClick={() => {
          setIsActive(!isActive);
        }}
        className={`header-menu ${isActive ? "active" : ""}`}
      >
        <div className="bar"></div>
      </div>
    </header>
  );
};

export default Navbar;
