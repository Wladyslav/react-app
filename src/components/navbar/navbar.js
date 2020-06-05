import React from "react";
import styles from "./navbar.module.scss";

const Navbar = ({ openNav }) => (
  <div className={styles.navbar}>
    <div className={styles.logo}>
      {/* <a href="#" class={styles.navbar__imageLink}> */}
      <img src="../" alt="" className={styles.logoImage} />
      {/* </a> */}
    </div>
    <div onClick={openNav} className={styles.hamburger}>
      <div className={styles.btn}></div>
    </div>
  </div>
);
export default Navbar;
