import React from "react";
import styles from "./nav.module.scss";
import { NavLink } from "react-router-dom";

const Nav = ({ navStatus }) => (
  <nav
    className={
      navStatus ? `${styles.navigation} ${styles.open}` : `${styles.navigation}`
    }
  >
    <ul className={styles.list}>
      <li className={styles.item}>
        <NavLink
          exact
          activeClassName={styles.itemLinkActive}
          className={styles.itemLink}
          to="/"
        >
          Strona główna
        </NavLink>
      </li>
      <li className={styles.item}>
        <NavLink
          activeClassName={styles.itemLinkActive}
          className={styles.itemLink}
          to="/printers"
        >
          Drukarki i urządzenie wielofuncyjne
        </NavLink>
      </li>
      <li className={styles.item}>
        <NavLink
          activeClassName={styles.itemLinkActive}
          className={styles.itemLink}
          to="/materials"
        >
          Materiały eksploatacyjne
        </NavLink>
      </li>
      <li className={styles.item}>
        <NavLink
          activeClassName={styles.itemLinkActive}
          className={styles.itemLink}
          to="/devices"
        >
          Urządzenie biurowe
        </NavLink>
      </li>
      <li className={styles.item}>
        <NavLink
          activeClassName={styles.itemLinkActive}
          className={styles.itemLink}
          to="/articles"
        >
          Artykuły biurowe
        </NavLink>
      </li>
      <li className={styles.item}>
        <NavLink
          activeClassName={styles.itemLinkActive}
          className={styles.itemLink}
          to="/service"
        >
          Serwis
        </NavLink>
      </li>

      <li className={styles.item}>
        <NavLink
          activeClassName={styles.itemLinkActive}
          className={styles.itemLink}
          to=""
        >
          Kontakt
        </NavLink>
      </li>
    </ul>
  </nav>
);
export default Nav;
