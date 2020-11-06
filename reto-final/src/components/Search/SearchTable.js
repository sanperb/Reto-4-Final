import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Table } from 'antd';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getColumns } from './searchTableHelper';
import { selectorSearch } from '../../reducers';
import { selectorGenres } from '../../reducers';
import {withRouter} from 'react-router';


/* Tabla con la barra de búsqueda, el listado de las 10 más populares y sus detalles en el listado */

function TableTitle(props) {
  return <div className="title-table-container">
    <h3 className="name-table">{props.title}</h3>
    </div>
}


class SearchTable extends PureComponent {
  static contextTypes = {
    router: PropTypes.object,
  };
  goToDetail(id, dataSource) {
    console.log("SearchTable", this.props)

    this.props.history.push({
      pathname: `/detail/${id}`,
      state: { dataSource },
    });
  }

  render() {
    const {
      isLoadingMovies,
      movies,
      isLoadingGenres,
      genresNames,
    } = this.props;

    const columns = getColumns(genresNames);

    return (
      <div className="table">
        <Table
          title={()=> <TableTitle title="Las 10 + Populares"/>}
          loading={isLoadingMovies || isLoadingGenres}
          showSorterTooltip= {false}
          dataSource={movies}
          columns={columns}
          pagination={{ pageSize: 10 }}
          onRow={record => {
            return {
              onClick: () => this.goToDetail(record.id, movies),
            };
          }}
          rowKey={record => record.id}
        />
      </div>
    );
  }
}

SearchTable.propTypes = {
  movies: PropTypes.array.isRequired,
  isLoadingMovies: PropTypes.bool.isRequired,
  genresNames: PropTypes.object.isRequired,
  isLoadingGenres: PropTypes.bool.isRequired,
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

export default connect(mapStateToProps)(withRouter(SearchTable));
