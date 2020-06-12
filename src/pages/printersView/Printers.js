import React from "react";
import styles from "./printers.module.scss";
import Item from "../../components/item/Item";
import printersData from "../../data/printersData";

const Printers = () => (
  <div className={styles.wrapper}>
    {printersData.map((printer) => (
      <Item
        key={printer.id}
        image={printer.image}
        alt={printer.alt}
        product={printer.product}
        price={printer.price}
      />
    ))}
  </div>
);

export default Printers;
