import React from "react";
import styles from "./startPageView.module.scss";

import Header from "../header/header";
import Main from "../main/main";
import Offers from "../offers/Offers";
import Footer from "../footer/Footer";

const MainPageView = () => (
  <div className={styles.wrapper}>
    <Header />
    <Main />
    <Offers />
    <Footer />
  </div>
);

export default MainPageView;
