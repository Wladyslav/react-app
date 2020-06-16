import React from 'react';
import PropTypes from 'prop-types';
import styles from './input.module.scss';

const Input = ({ tag: Tag, type, name, label, maxLength }) => (
  <div className={styles.formItem}>
    <Tag
      className={Tag === 'textarea' ? styles.textarea : styles.input}
      type={type}
      name={name}
      id={name}
      required
      maxLength={maxLength}
      placeholder=" "
    />
    <label className={styles.label} htmlFor={name}>
      {label}
    </label>
    <div className={styles.formItemBar} />
  </div>
);

Input.propTypes = {
  tag: PropTypes.string,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};
Input.defaultProps = {
  tag: 'input',
  maxLength: 200,
};
export default Input;
