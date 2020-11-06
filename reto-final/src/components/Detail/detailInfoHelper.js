import React from 'react';

import DetailInfoItem from './DetailInfoItem';
import DetailInfoHeader from './DetailInfoHeader';

/* Sacamos la información de cada película */

export const getDataSource = props => {
  const {
    detail: {
      movie: {
        genres,
        overview,
        popularity,
        production_companies,
        release_date,
        runtime,
        original_title,
        vote_average,
        vote_count,
      },
    },
  } = props;

  const dataSource = [

    {
      key: 'original_title',
      label: 'Título Original',
      type: 'text',
      value: original_title,
    },
    
    {
      key: 'genres',
      label: 'Género',
      type: 'array',
      value: genres,
    },
    {
      key: 'overview',
      label: 'Overview',
      type: 'text',
      value: overview,
    },
    {
      key: 'release_date',
      label: 'Fecha de Lanzamiento',
      type: 'date',
      value: release_date,
    },
    {
      key: 'vote_average',
      label: 'Valoración',
      type: 'number',
      value: vote_average,
    },
    {
      key: 'vote_count',
      label: 'Nº Votos',
      type: 'number',
      value: vote_count,
    },
    {
      key: 'runtime',
      label: 'Duración',
      type: 'time',
      value: runtime,
    },
    
    {
      key: 'production_companies',
      label: 'Productora',
      type: 'array',
      value: production_companies,
    },

    {
      key: 'popularity',
      label: 'Popularity',
      type: 'number',
      value: popularity,
    },
    
  ];

  return dataSource;
};

export const getDetailInfoHeader = (title, tagline) => (
  <DetailInfoHeader title={title} tagline={tagline} />
);

export const getDetailInfoItem = item => (
  <DetailInfoItem>{item}</DetailInfoItem>
);
