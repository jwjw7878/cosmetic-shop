// src/components/Header.jsx
import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Header.module.scss";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to="/" className={styles.link}>
          Cosmetic Shop
        </Link>
      </div>
      <nav className={styles.nav}>
        <Link to="/" className={styles.navLink}>
          Home
        </Link>
        <Link to="/about" className={styles.navLink}>
          About
        </Link>
      </nav>
    </header>
  );
}

export default Header;
