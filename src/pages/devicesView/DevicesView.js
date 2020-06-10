import React from "react";
import styles from "./devicesView.module.scss";
import Devices from "./Devices";

const DevicesView = () => (
  <div className={styles.wrapper}>
    <h1 className={styles.title}>DRUKARKI I URZĄDZENIA WIELOFUNKCYJNE</h1>
    <div className={styles.products}>
      <Devices />
    </div>
  </div>
);
export default DevicesView;
