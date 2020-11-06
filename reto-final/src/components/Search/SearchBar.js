import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Input } from 'antd';
import 'bootstrap/dist/css/bootstrap.min.css';
import { fetchSearch } from '../../actions';
import './searchbar.css'

/*Barra de búsqueda */

const Search = Input.Search;

class SearchBar extends PureComponent {
  render() {
    const { fetchSearch } = this.props;
    return (
      <div className="search-form">
        <Search
          placeholder="Búsqueda..."
          enterButton="Buscar"
          size="large"
          onSearch={value => fetchSearch(value)}
        />
      </div>
    );
  }
}

SearchBar.propTypes = {
  fetchSearch: PropTypes.func.isRequired,
};

export default connect(
  null,
  { fetchSearch }
)(SearchBar);
