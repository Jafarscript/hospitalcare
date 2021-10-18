import React from "react";
import { Link } from "react-router-dom";
import {
  header,
  nav,
  logo,
  logoTitle,
  navlist,
  navlistitem,
  link
} from "./header.module.css";

const Header = () => {
  return (
    <div className={header}>
      <div className={logo}>
          <h1 className={logoTitle}>Northcare<i class="fas fa-clinic-medical"></i></h1>
      </div>
      <nav className={nav}>
        <ul className={navlist}>
          <Link to="/" className={link}><li className={navlistitem}>Home</li></Link>
          <Link to="/about" className={link}><li className={navlistitem}>About</li></Link>
          <Link to="/contact" className={link}><li className={navlistitem}>Contact</li></Link>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
