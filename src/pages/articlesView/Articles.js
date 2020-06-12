import React from "react";
import styles from "./articles.module.scss";
import Item from "../../components/item/Item";
import articlesData from "../../data/articlesData";

const Articles = () => (
  <div className={styles.wrapper}>
    {articlesData.map((article) => (
      <Item
        key={article.id}
        image={article.image}
        alt={article.alt}
        product={article.product}
        price={article.price}
      />
    ))}
  </div>
);

export default Articles;
