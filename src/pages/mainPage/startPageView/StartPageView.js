import React, { Component } from "react";
import data from "../../../data/data";
import styles from "./startPageView.module.scss";
import Header from "../header/header";
import Main from "../main/main";
import Offers from "../offers/Offers";
import Footer from "../footer/Footer";

class MainPageView extends Component {
  state = {
    properties: data.properties,
    index: 0,
  };
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        index: prevState.index + 1,
      }));
      if (this.state.index === this.state.properties.length) {
        this.setState({
          index: 0,
        });
      }
    }, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
  nextProperty = () => {
    this.setState((prevState) => ({
      index: prevState.index + 1,
    }));
    clearInterval(this.interval);
  };

  prevProperty = () => {
    this.setState((prevState) => ({
      index: prevState.index - 1,
    }));
    clearInterval(this.interval);
  };
  render() {
    const { properties, index } = this.state;
    return (
      <>
        <div className={styles.wrapper}>
          <Header />
          <Main />
          <div className={styles.offersWrapper}>
            <button
              className={styles.btnPrev}
              onClick={() => this.prevProperty()}
              disabled={this.state.index === 0}
            >
              Prev
            </button>
            <button
              className={styles.btnNext}
              onClick={() => this.nextProperty()}
              disabled={this.state.index === data.properties.length - 1}
            >
              Next
            </button>
            <h1 className={styles.title}>PROMOCJE</h1>
            <div className={styles.offers}>
              {properties.map((property) => (
                <Offers index={index} key={property.id} property={property} />
              ))}
            </div>
          </div>
          <Footer />
        </div>
      </>
    );
  }
}
export default MainPageView;
