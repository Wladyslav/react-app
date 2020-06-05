import React from "react";
import styles from "./printersView.module.scss";
import Printers from "./Printers";

const PrintersView = () => (
  <div className={styles.wrapper}>
    <h1 className={styles.title}>DRUKARKI I URZĄDZENIA WIELOFUNKCYJNE</h1>
    <div className={styles.products}>
      <Printers />
    </div>
  </div>
);
export default PrintersView;
