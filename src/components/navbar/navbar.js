import React from 'react';
import styles from './navbar.module.scss';
import logoMobi from '../../files/logoMobi.png';
import logo from '../../files/logo1.png';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const Navbar = ({ openNav, navStatus }) => (
  <div className={styles.navbar}>
    <div className={styles.logo}>
      <Link className={styles.link} to="/">
        <picture className={styles.picture}>
          <source media="(min-width: 460px)" srcSet={logo} />
          <img src={logoMobi} alt="" className={styles.logoMobi} />
        </picture>
      </Link>
    </div>
    <div className={styles.desctopNav}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <NavLink exact activeClassName={styles.itemLinkActive} className={styles.itemLink} to="/">
            Strona główna
          </NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink
            activeClassName={styles.itemLinkActive}
            className={styles.itemLink}
            to="/printers"
          >
            Drukarki
          </NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink
            activeClassName={styles.itemLinkActive}
            className={styles.itemLink}
            to="/materials"
          >
            Materiały eksploatacyjne
          </NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink
            activeClassName={styles.itemLinkActive}
            className={styles.itemLink}
            to="/devices"
          >
            Urządzenia biurowe
          </NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink
            activeClassName={styles.itemLinkActive}
            className={styles.itemLink}
            to="/articles"
          >
            Artykuły biurowe
          </NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink
            activeClassName={styles.itemLinkActive}
            className={styles.itemLink}
            to="/service"
          >
            Serwis
          </NavLink>
        </li>
      </ul>
    </div>
    <div
      onClick={openNav}
      className={navStatus ? `${styles.hamburger} ${styles.open}` : `${styles.hamburger}`}
    >
      <div className={styles.btn}></div>
    </div>
  </div>
);
Navbar.propTypes = {
  openNav: PropTypes.func,
  navStatus: PropTypes.bool,
};

export default Navbar;
