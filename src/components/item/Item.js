import React from 'react';
import PropTypes from 'prop-types';
import styles from './item.module.scss';

const Item = ({ handlePopupOpen, image, alt, product, price }) => (
  <div onClick={handlePopupOpen} className={styles.printer}>
    <h2 className={styles.productName}>{product}</h2>
    <img className={styles.image} src={image} alt={alt} />
    <h1 className={styles.price}>{price} zł</h1>
  </div>
);
Item.propTypes = {
  handlePopupOpen: PropTypes.func,
  image: PropTypes.string,
  alt: PropTypes.string,
  product: PropTypes.string,
  price: PropTypes.string,
};
export default Item;
