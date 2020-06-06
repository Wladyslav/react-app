import React from "react";
import styles from "./printer.module.scss";
const Printer = ({ image, alt, description, product, price }) => (
  <div className={styles.printer}>
    <img className={styles.image} src={image} alt={alt} />
    <h2 className={styles.productName}>{product}</h2>
    <h1 className={styles.price}>{price} zł</h1>
    <div className={styles.buy}></div>
  </div>
);

export default Printer;
