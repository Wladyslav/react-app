import React from "react";
import styles from "./navbar.module.scss";
import logoMobi from "../../files/logoMobi.png";
import logo from "../../files/logo1.png";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Navbar = ({ openNav, navStatus }) => (
  <div className={styles.navbar}>
    <div className={styles.logo}>
      <Link className={styles.link} to="/">
        <picture className={styles.picture}>
          <source media="(min-width: 460px)" srcset={logo} />
          <img src={logoMobi} alt="" className={styles.logoMobi} />
        </picture>
      </Link>
    </div>
    <div className={styles.desctopNav}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <NavLink className={styles.itemLink} to="/">
            Strona główna
          </NavLink>
        </li>
        <li className={styles.navItem}>
          <a href="#category" className={styles.itemLink}>
            Kategorie produktów
          </a>
        </li>
      </ul>
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
