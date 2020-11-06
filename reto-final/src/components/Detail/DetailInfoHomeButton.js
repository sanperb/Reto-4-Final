import React, { PureComponent } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './DetailInfoHomeButton.module.css';

/* Botoón Volver de la página de detalles */

class DetailInfoHomeButton extends PureComponent {
  render() {
    return (
      <NavLink
        to="/"
        className={styles['DetailInfoHomeButton']}>
        Volver
      </NavLink>
    );
  }
}

export default DetailInfoHomeButton;
