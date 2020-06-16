import React from 'react';
import styles from './devices.module.scss';
import Item from '../../components/item/Item';
import devicesData from '../../data/devicesData';

const Devices = () => (
  <div className={styles.wrapper}>
    {devicesData.map((device) => (
      <Item
        key={device.id}
        image={device.image}
        alt={device.alt}
        product={device.product}
        price={device.price}
      />
    ))}
  </div>
);

export default Devices;
