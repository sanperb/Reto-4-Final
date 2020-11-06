import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchSearchById } from '../../actions';
import DetailPoster from './DetailPoster';
import DetailInfo from './DetailInfo';
import './Detail.css'

/* Nos devuelve ela página de detalles con la información de cada película  */

class Detail extends PureComponent {
  componentDidMount() {
    const { fetchSearchById, location } = this.props;
    if (location && location.pathname) {
      const id = location.pathname.replace('/detail/', '');
      if (id) fetchSearchById(id);
    }
  }

  render() {
    return (
      <div className="Detail">
        <div className="DetailPosterWrapper">
          <DetailPoster />
        </div>
        <div className="DetailInfoWrapper">
          <DetailInfo />
        </div>
      </div>
    );
  }
}

Detail.propTypes = {
  fetchSearchById: PropTypes.func.isRequired,
};

export default connect(
  null,
  { fetchSearchById }
)(Detail);
