import React from 'react';

/* Contenido del link SobreNosotros */

const SobreNosotros = props => {
  return (<div className="info-pag">
    <div className="aboutus-div">

      <h3>Quiénes Somos</h3>
      <p>LaVidaesCine es una web sobre cine, con toda la información de las películas, tanto actuales como antiguas y futuros proyectos. Nos gusta informar con pasión de cada uno de los detalles que rodean al cine y recomendar lo mejor para disfrutar de lo audiovisual, ya sea en una sala de cine, en el salón de casa o en cualquier lugar donde llegue un streaming</p>
    </div>

    <div className="editora">
      <h5 className="name">Sandra Pérez Barrios</h5>
      <div className="foto">
        <a href="/autor/sandra-pb">
          <img className="sinmarco" src="https://media-exp1.licdn.com/dms/image/C5603AQGy3QGr1SHj1w/profile-displayphoto-shrink_200_200/0?e=1609372800&v=beta&t=6PhfMnGr3bvFNKPfRo__2XQx93q8Bzs2S1kOJca-6UI" width="125em" height="125em"alt="sandrapb" />
        </a>
      </div>
      <div className="sandra-text">
        <div className="article-metadata">
          <div className="article-author">
            <strong>Editora</strong> en LaVidaesCine desde 2020
          </div>
        </div>

        <div className="cv-resume">
          <p>Graduada en Comunicación Audiovisual y actuamente formandome en el mundo del FrontEnd

        </p>
          <p>
            <a href="mailto:sandrapb1993@gmail.com">sandrapb1993@gmail.com</a>
          </p>
        </div>
      </div>

    </div>
  </div>
  )
}
export default SobreNosotros;