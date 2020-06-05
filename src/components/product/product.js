import React from "react";
import styles from "./product.module.scss";
import { Link } from "react-router-dom";

const Product = ({ name, picture, description, pathPage }) => (
  <Link className={styles.link} to={pathPage}>
    <div className={styles.item}>
      <img src={picture} alt={description} className={styles.logo} />
      <h2 className={styles.title}>{name}</h2>
    </div>
  </Link>
);
export default Product;
