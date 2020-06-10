import React from "react";
import styles from "./main.module.scss";
import Product from "../../../components/product/product";
import materials from "../../../files/icon-materials.svg";
import printers from "../../../files/icon-printers.svg";
import device from "../../../files/icon-gilotin.svg";
import stuff from "../../../files/icon-erector.svg";

const Main = () => (
  <main className={styles.main}>
    <h1 className={styles.catName}>KATEGORIE PRODUKTÓW</h1>
    <div className={styles.products}>
      <Product
        name="Drukarki i urządzenia wielofunkcyjne"
        picture={printers}
        description="printers"
        pathPage="/printers"
      />
      <Product
        name="Materiały ekspoatacyjne"
        picture={materials}
        description="materials"
        pathPage="/materials"
      />
      <Product
        name="Urządzenie biurowe"
        picture={device}
        description="device"
        pathPage="/devices"
      />
      <Product
        name="Artykuły biurowe"
        picture={stuff}
        description="office stuff"
        pathPage="/articles"
      />
    </div>
  </main>
);
export default Main;
