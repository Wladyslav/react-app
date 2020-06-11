import React from "react";
import styles from "./printers.module.scss";
import Printer from "../../components/item/Item";
import kyocera3060 from "../../files/kyocerap3060dn.jpg";

const Printers = () => (
  <div className={styles.wrapper}>
    <Printer
      image={kyocera3060}
      alt={"kyocera p3060dn"}
      product={"Kyocera ECOSYS P3060dn"}
      price={"3699,00"}
    />
    <Printer
      image={kyocera3060}
      alt={"kyocera p3060dn"}
      product={"Kyocera ECOSYS P3060dn"}
      price={"3699,00"}
    />
    <Printer
      image={kyocera3060}
      alt={"kyocera p3060dn"}
      product={"Kyocera ECOSYS P3060dn"}
      price={"3699,00"}
    />
    <Printer
      image={kyocera3060}
      alt={"kyocera p3060dn"}
      product={"Kyocera ECOSYS P3060dn"}
      price={"3699,00"}
    />
    <Printer
      image={kyocera3060}
      alt={"kyocera p3060dn"}
      product={"Kyocera ECOSYS P3060dn"}
      price={"3699,00"}
    />
    <Printer
      image={kyocera3060}
      alt={"kyocera p3060dn"}
      product={"Kyocera ECOSYS P3060dn"}
      price={"3699,00"}
    />
  </div>
);

export default Printers;
