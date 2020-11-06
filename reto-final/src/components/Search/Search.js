import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBar from './SearchBar';
import SearchTable from './SearchTable';
import { selectorSearch } from '../../reducers';
import { selectorGenres } from '../../reducers';
import { fetchPopular, fetchGenres } from '../../actions';

/* Contenedor de todos los componentes necesarios para obtener la barra de búsqueda*/

class Search extends PureComponent {
  componentDidMount() {
    const {
      isLoadingMovies,
      movies,
      isLoadingGenres,
      genresNames,
    } = this.props;
    const { fetchPopular, fetchGenres } = this.props;
    if (!isLoadingMovies && movies.length === 0) fetchPopular();
    if (!isLoadingGenres && Object.keys(genresNames).length === 0)
      fetchGenres();
  }

  render() {
    return (
      <Fragment>
        <SearchBar />
        <SearchTable/>
      </Fragment>
    );
  }
}

Search.propTypes = {
  movies: PropTypes.array.isRequired,
  isLoadingMovies: PropTypes.bool.isRequired,
  genresNames: PropTypes.object.isRequired,
  isLoadingGenres: PropTypes.bool.isRequired,
  fetchPopular: PropTypes.func.isRequired,
  fetchGenres: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  const { movies, isLoading: isLoadingMovies } = selectorSearch(state);
  const { names: genresNames, isLoading: isLoadingGenres } = selectorGenres(
    state
  );
  return {
    movies,
    isLoadingMovies,
    genresNames,
    isLoadingGenres,
  };
};

export default connect(
  mapStateToProps,
  { fetchPopular, fetchGenres }
)(Search);
