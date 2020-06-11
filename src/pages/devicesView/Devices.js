import React from "react";
import styles from "./devices.module.scss";
import Device from "../../components/item/Item";
import kyocera3060 from "../../files/kyocerap3060dn.jpg";

const Devices = () => (
  <div className={styles.wrapper}>
    <Device
      image={kyocera3060}
      alt={"kyocera p3060dn"}
      product={"Kyocera ECOSYS P3060dn"}
      price={"3699,00"}
    />
    <Device
      image={kyocera3060}
      alt={"kyocera p3060dn"}
      product={"Kyocera ECOSYS P3060dn"}
      price={"3699,00"}
    />
    <Device
      image={kyocera3060}
      alt={"kyocera p3060dn"}
      product={"Kyocera ECOSYS P3060dn"}
      price={"3699,00"}
    />
    <Device
      image={kyocera3060}
      alt={"kyocera p3060dn"}
      product={"Kyocera ECOSYS P3060dn"}
      price={"3699,00"}
    />
    <Device
      image={kyocera3060}
      alt={"kyocera p3060dn"}
      product={"Kyocera ECOSYS P3060dn"}
      price={"3699,00"}
    />
    <Device
      image={kyocera3060}
      alt={"kyocera p3060dn"}
      product={"Kyocera ECOSYS P3060dn"}
      price={"3699,00"}
    />
  </div>
);

export default Devices;
