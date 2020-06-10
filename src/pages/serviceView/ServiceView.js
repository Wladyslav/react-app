import React, { Component } from "react";
import styles from "./serviceView.module.scss";
import Input from "../../components/input/Input";

class ServiceView extends Component {
  state = {};
  render() {
    return (
      <div className={styles.wrapper}>
        <h1 className={styles.title}>ZGŁOSZENIE SERWISOWE</h1>
        <form className={styles.form} autoComplete="off">
          <Input type="email" name={"email"} label={"Adres Mail"} />
          <Input type="text" name={"City"} label={"Miasto"} />
          <Input type="text" name={"Street"} label={"Ulica"} />
          <Input type="number" name={"number"} label={"Numer domu"} />
          <Input type="number" name={"tel"} label={"Numer telefonu"} />
          <Input
            tag="textarea"
            type="text"
            name="ticket"
            label="Treść zgłoszenia"
          />
          <button className={styles.button}>Wyślij</button>
        </form>
      </div>
    );
  }
}

export default ServiceView;
