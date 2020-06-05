import React from "react";
import styles from "./nav.module.scss";
import { NavLink } from "react-router-dom";

const Nav = () => (
  <nav className={styles.navigation}>
    <ul className={styles.list}>
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
          to=""
        >
          Urządzenie biurowe
        </NavLink>
      </li>
      <li className={styles.item}>
        <NavLink
          activeClassName={styles.itemLinkActive}
          className={styles.itemLink}
          to=""
        >
          Artykuły biurowe
        </NavLink>
      </li>
      <li className={styles.item}>
        <NavLink
          activeClassName={styles.itemLinkActive}
          className={styles.itemLink}
          to=""
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
          Promocje
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
