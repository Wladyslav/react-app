import React from "react";
import styles from "./footer.module.scss";
import { FcCustomerSupport, FcShop, FcAbout } from "react-icons/fc";

const Footer = () => (
  <footer className={styles.footer}>
    <h1 className={styles.name}>INFORMACJE</h1>
    <div className={styles.dataWrapper}>
      <div className={styles.information}>
        <h2 className={styles.informationTitle}>
          <FcCustomerSupport className={styles.icon} />
          Kontakt
        </h2>
        <p>Godziny otwarcia:</p>
        <p>Poniedziałek-Piątek od 8.30 do 16.30</p>
        <p>Sobota: Nieczynne</p>
      </div>
      <div className={styles.information}>
        <h2 className={styles.informationTitle}>
          <FcShop className={styles.icon} />
          Sklep stacjonarny
        </h2>
        <p>ul.Piłsudzkiedo 23</p>
        <p>52-201 Wrocław</p>
        <a href="tel:792-221-223">792-221-223</a>
      </div>
      <div className={styles.information}>
        <h2 className={styles.informationTitle}>
          <FcAbout className={styles.icon} />
          Informacje dodatkowe
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
          earum quas porro fugit quo unde, voluptatem veritatis neque quasi
          aspernatur.
        </p>
      </div>
    </div>
  </footer>
);
export default Footer;
