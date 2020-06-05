import React from "react";
import styles from "./printers.module.scss";
import Printer from "./Printer";
import kyocera3060 from "../../files/kyocerap3060dn.jpg";

const Printers = () => (
  <div className={styles.wrapper}>
    <Printer
      image={kyocera3060}
      alt={"kyocera p3060dn"}
      description={
        "Praca w sieci - Tak Prędkość str A4 na min - 60Format - A4Rodzaj druku - Laserowy monoWydajność bębna (stron) - 500000Duplex - TakWydajność tonera czarnego K (pełnej wydajności) - 25000Wydajność tonera czarnego K (startowego) - 10000Dodatkowe kasety na papier - Tak (opcja)WiFi - Tak (opcja)"
      }
      product={"Kyocera ECOSYS P3060dn"}
      price={"3699"}
    />
  </div>
);

export default Printers;
