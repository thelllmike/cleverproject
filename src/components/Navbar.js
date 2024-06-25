import React from 'react';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      
      <a href="#">CONTACT</a>
      <a href="#">PROJECTS</a>
      <a href="#">PRODUCTS</a>
      <a href="#">CAREERS</a>
      <img src="/logo.png" alt="Logo" className={styles.logo} />
    </nav>
  );
};

export default Navbar;
