import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

/* Titulo de la película dentro de detalles */

class DetailInfoHeader extends PureComponent {
  render() {
    const { title } = this.props;
    return (
      <div>
        <h2>
          <strong>{title}</strong>
        </h2>
      </div>
    );
  }
}

DetailInfoHeader.propTypes = {
  title: PropTypes.string,
  tagline: PropTypes.string,
};

export default DetailInfoHeader;
