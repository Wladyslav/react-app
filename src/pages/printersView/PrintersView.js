import React, { Component } from "react";

import styles from "./printersView.module.scss";
import Item from "../../components/item/Item";
import printersData from "../../data/printersData";

class PrintersView extends Component {
  state = {
    itemId: 0,
    isPopupOpen: false,
  };
  handlePopupClose = () => {
    this.setState((prevState) => ({
      isPopupOpen: !prevState.isPopupOpen,
    }));
  };
  render() {
    const currentID = this.state.itemId;

    return (
      <div className={styles.wrapper}>
        <h1 className={styles.title}>
          DRUKARKI I URZĄDZENIA WIELOFUNKCYJNE{console.log(this.state.itemId)}
        </h1>

        <div className={styles.printers}>
          {printersData.map((printer) => (
            <Item
              key={printer.id}
              handlePopupOpen={() => {
                this.setState((prevState) => ({
                  itemId: printer.id,
                  isPopupOpen: !prevState.isPopupOpen,
                }));
              }}
              image={printer.image}
              alt={printer.alt}
              product={printer.product}
              price={printer.price}
            />
          ))}
        </div>
        <div
          // onClick={this.handlePopupClose}
          className={
            this.state.isPopupOpen
              ? `${styles.displayCover} ${styles.open}`
              : `${styles.displayCover}`
          }
        >
          <div className={styles.popup}>
            <h1 className={styles.popupTitle}>
              {printersData[this.state.itemId].product}
            </h1>
            <div className={styles.productDescription}>
              <ul className={styles.listWrapper}>
                {printersData[currentID].descriptions.map((description) => (
                  <li key={description} className={styles.listItem}>
                    {description}
                  </li>
                ))}
              </ul>
            </div>
            <img
              className={styles.img}
              src={printersData[currentID].image}
              alt={printersData[currentID].product}
            />
            <h1 className={styles.price}>
              Cena: {printersData[currentID].price} zł
            </h1>
          </div>
        </div>
      </div>
    );
  }
}
export default PrintersView;
