import React from 'react';
import styles from './header.module.scss';
import printerImage from '../../../files/printer.png';

const Header = () => (
  <header className={styles.wrapper}>
    <div className={styles.slide}>
      <h2 className={styles.slide__text}>Oficialny dystrybutor oraz serwis drukarek Kyocera</h2>
      <img src={printerImage} alt="" className={styles.slide__image} />
    </div>
  </header>
);
export default Header;
