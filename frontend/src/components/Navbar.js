import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Navbar.css'; // Assuming you have a separate CSS file for styling

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Easy Loans</Link>
      </div>
      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/calculator">Loan Calculator</Link></li>
          <li><Link to="/application">Loan Application</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
      </div>
      <div className="navbar-toggle" onClick={toggleNavbar}>
        <span className="toggle-bar"></span>
        <span className="toggle-bar"></span>
        <span className="toggle-bar"></span>
      </div>
    </nav>
  );
};

export default Navbar;
