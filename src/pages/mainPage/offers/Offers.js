import React from "react";
import styles from "./offers.module.scss";

const Offers = ({ property, index }) => (
  <div
    className={styles.wrapper}
    style={{
      transform: `translateX(-${index * 100}%)`,
    }}
  >
    <h2 className={styles.productName}>{property.productName}</h2>
    <img
      className={styles.offerImg}
      src={property.productImage}
      alt={property.productName}
    />
    <h3 className={styles.productPrice}>
      Cena promocyjna {property.productPrice}
    </h3>
  </div>
);
export default Offers;
