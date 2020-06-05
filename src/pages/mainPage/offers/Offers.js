import React from "react";
import styles from "./offers.module.scss";
import kyocera2040 from "../../../files/kyoceram2040dn.png";

const Offers = () => (
  <div className={styles.wrapper}>
    <h1 className={styles.name}>PROMOCJE</h1>
    <div className={styles.offer}>
      <h2 className={styles.productName}>Urządzenie KYOCERA Ecosys M2040dn </h2>
      <img
        className={styles.offerImg}
        src={kyocera2040}
        alt="Urządzenie KYOCERA Ecosys M2040dn"
      />
      <p className={styles.productDescription}>
        M2040dn drukuje z prędkością 40 stron na minutę, cechuje się krótkim
        czasem oczekiwania na pierwszy wydruk i pierwszą kopię oraz posiada
        zaawansowane funkcje skanowania, w tym możliwość jednoczesnego
        skanowania obu stron dokumentu, dzięki czemu z łatwością zwiększy
        wydajność pracy w Twoim biurze. Model posiada wydajne tonery na 7200
        arkuszy oraz dużą pojemność podajników papieru wynoszącą 850 stron.
        (Możliwość rozbudowy o 2 dodatkowe podajniki papieru na 850 arkuszy).
        Trwałe podzespoły gwarantują nadzwyczajną wydajność i niezawodność,
        których możesz być pewien w każdej sytuacji. Wyjątkowo niskie koszty
        wydruku w swojej klasie.
      </p>
      <h3 className={styles.productPrice}>1400 zł</h3>
    </div>
  </div>
);
export default Offers;
