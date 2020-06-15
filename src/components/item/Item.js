import React from "react";
import styles from "./item.module.scss";

const Item = ({ handlePopupOpen, image, alt, product, price }) => (
  <div onClick={handlePopupOpen} className={styles.printer}>
    <h2 className={styles.productName}>{product}</h2>
    <img className={styles.image} src={image} alt={alt} />
    <h1 className={styles.price}>{price} zł</h1>
  </div>
);

export default Item;
