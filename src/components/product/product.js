import React from 'react';
import styles from './product.module.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Product = ({ name, picture, description, pathPage }) => (
  <Link className={styles.link} to={pathPage}>
    <div className={styles.item}>
      <img src={picture} alt={description} className={styles.logo} />
      <h2 className={styles.title}>{name}</h2>
    </div>
  </Link>
);
Product.propTypes = {
  name: PropTypes.string,
  picture: PropTypes.string,
  // description: PropTypes.arrayOf(PropTypes.string),
  pathPage: PropTypes.string,
};
export default Product;
