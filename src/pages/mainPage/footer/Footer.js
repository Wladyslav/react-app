import React from "react";
import styles from "./footer.module.scss";

const Footer = () => (
  <footer className={styles.footer}>
    <h1 className={styles.name}>INFORMACJE</h1>
    <div className={styles.about}>
      <h2 className={styles.shop}>Sklep stacjonarny</h2>
      <p>ul.Piłsudzkiedo 23</p>
      <p>52-201 Wrocław</p>
      <a href="tel:792-221-223">792-221-223</a>
    </div>
  </footer>
);
export default Footer;
