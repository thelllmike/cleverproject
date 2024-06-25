import React from 'react';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <a href="#">CONTACT</a>
      <a href="#">PROJECTS</a>
      <a href="#">PRODUCTS</a>
      <a href="#">CAREERS</a>
    </nav>
  );
};

export default Navbar;
