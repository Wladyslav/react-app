import React, { Component } from 'react';
import data from '../../../data/data';
import styles from './startPageView.module.scss';
import Header from '../header/header';
import Main from '../main/main';
import Offers from '../offers/Offers';
import Footer from '../footer/Footer';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';

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
  };

  prevProperty = () => {
    this.setState((prevState) => ({
      index: prevState.index - 1,
    }));
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
              <FaArrowCircleLeft size="30px" color="#f2632c" />
            </button>
            <button
              className={styles.btnNext}
              onClick={() => this.nextProperty()}
              disabled={this.state.index === data.properties.length - 1}
            >
              <FaArrowCircleRight size="30px" color="#f2632c" />
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
