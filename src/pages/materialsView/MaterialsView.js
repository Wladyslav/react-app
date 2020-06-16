import React from 'react';
import styles from './materialsView.module.scss';
import Materials from './Materials';

const MaterialsView = () => (
  <div className={styles.wrapper}>
    <h1 className={styles.title}>DRUKARKI I URZĄDZENIA WIELOFUNKCYJNE</h1>
    <div className={styles.products}>
      <Materials />
    </div>
  </div>
);
export default MaterialsView;
