import React from "react";
import styles from "./articles.module.scss";
import Article from "../../components/item/Item";
import kyocera3060 from "../../files/kyocerap3060dn.jpg";

const Articles = () => (
  <div className={styles.wrapper}>
    <Article
      image={kyocera3060}
      alt={"kyocera p3060dn"}
      product={"Kyocera ECOSYS P3060dn"}
      price={"3699,00"}
    />
    <Article
      image={kyocera3060}
      alt={"kyocera p3060dn"}
      product={"Kyocera ECOSYS P3060dn"}
      price={"3699,00"}
    />
    <Article
      image={kyocera3060}
      alt={"kyocera p3060dn"}
      product={"Kyocera ECOSYS P3060dn"}
      price={"3699,00"}
    />
    <Article
      image={kyocera3060}
      alt={"kyocera p3060dn"}
      product={"Kyocera ECOSYS P3060dn"}
      price={"3699,00"}
    />
    <Article
      image={kyocera3060}
      alt={"kyocera p3060dn"}
      product={"Kyocera ECOSYS P3060dn"}
      price={"3699,00"}
    />
    <Article
      image={kyocera3060}
      alt={"kyocera p3060dn"}
      product={"Kyocera ECOSYS P3060dn"}
      price={"3699,00"}
    />
  </div>
);

export default Articles;
