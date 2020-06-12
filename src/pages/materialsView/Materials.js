import React from "react";
import styles from "./materials.module.scss";
import Item from "../../components/item/Item";
import materialsData from "../../data/materialsData";

const Materials = () => (
  <div className={styles.wrapper}>
    {materialsData.map((material) => (
      <Item
        key={material.id}
        image={material.image}
        alt={material.alt}
        product={material.product}
        price={material.price}
      />
    ))}
  </div>
);

export default Materials;
