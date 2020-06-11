import React from "react";
import styles from "./materials.module.scss";
import Material from "../../components/item/Item";
import kyocera3060 from "../../files/kyocerap3060dn.jpg";

const Materials = () => (
  <div className={styles.wrapper}>
    <Material
      image={kyocera3060}
      alt={"kyocera p3060dn"}
      product={"Kyocera ECOSYS P3060dn"}
      price={"3699,00"}
    />
    <Material
      image={kyocera3060}
      alt={"kyocera p3060dn"}
      product={"Kyocera ECOSYS P3060dn"}
      price={"3699,00"}
    />
    <Material
      image={kyocera3060}
      alt={"kyocera p3060dn"}
      product={"Kyocera ECOSYS P3060dn"}
      price={"3699,00"}
    />
    <Material
      image={kyocera3060}
      alt={"kyocera p3060dn"}
      product={"Kyocera ECOSYS P3060dn"}
      price={"3699,00"}
    />
    <Material
      image={kyocera3060}
      alt={"kyocera p3060dn"}
      product={"Kyocera ECOSYS P3060dn"}
      price={"3699,00"}
    />
    <Material
      image={kyocera3060}
      alt={"kyocera p3060dn"}
      product={"Kyocera ECOSYS P3060dn"}
      price={"3699,00"}
    />
  </div>
);

export default Materials;
