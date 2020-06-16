import React from 'react';
import styles from './articlesView.module.scss';
import Articles from './Articles';

const ArticlesView = () => (
  <div className={styles.wrapper}>
    <h1 className={styles.title}>DRUKARKI I URZĄDZENIA WIELOFUNKCYJNE</h1>
    <div className={styles.products}>
      <Articles />
    </div>
  </div>
);
export default ArticlesView;
