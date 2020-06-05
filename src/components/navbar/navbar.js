import React from "react";
import styles from "./navbar.module.scss";

const Navbar = ({ openNav, navStatus }) => (
  <div className={styles.navbar}>
    <div className={styles.logo}>
      <img src="../" alt="" className={styles.logoImage} />
    </div>
    <div
      onClick={openNav}
      className={
        navStatus ? `${styles.hamburger} ${styles.open}` : `${styles.hamburger}`
      }
    >
      <div className={styles.btn}></div>
    </div>
  </div>
);
export default Navbar;
