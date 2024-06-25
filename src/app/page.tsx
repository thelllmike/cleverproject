import React from 'react';
import Navbar from '../components/Navbar';
import AnimatedShape from '../components/AnimatedShape';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.content}>
        <div data-aos="fade-up" className={styles.mainTextContainer}>
          <span className={styles.weAre}>We are</span>
          <h1 className={styles.mainText}>
            TECH-SAVVY PALS, <br />
            ALWAYS READY TO <br />
            <span className={styles.magic}>SPRINKLE</span> A BIT OF <span className={styles.magic}>MAGIC</span>
          </h1>
        </div>
        <AnimatedShape />
      </div>
    </div>
  );
}
