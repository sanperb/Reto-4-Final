import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faLanguage, faCog, faPowerOff, faUser } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from "react-router-dom";

/* Contenido del Header */

const Header = props => {
    return (<header>
        {/* Logos de RRSS */}

        <div>
            <div className="col">
                <a className="twitter float-left" href="https://twitter.com/">
                    <FontAwesomeIcon icon={faTwitter} />
                </a>
            </div>
            <div className="col">
                <a className="facebook float-left" href="https://www.facebook.com/">
                    <FontAwesomeIcon icon={faFacebook} />
                </a>
            </div>
            <div className="col">
                <a className="instagram float-left" href="https://instagram.com/">

                    <FontAwesomeIcon icon={faInstagram} />
                </a>
            </div>
            <div className="col">
                <a className="youtube float-left" href="https://youtube.com/">
                    <FontAwesomeIcon icon={faYoutube} />
                </a>
            </div>

            {/* Logos deL Header en la parte superior derecha */}

            <div className="col">
                <a className="language float-right" href="https://translate.google.es/?hl=es">
                    <FontAwesomeIcon icon={faLanguage} />
                </a>
            </div>
            <div className="col">
                <a className="configuration float-right" href="https://www.google.com/">
                    <FontAwesomeIcon icon={faCog} />
                </a>
            </div>
            <div className="col">
                <a className="power float-right" href="https://instagram.com/">

                    <FontAwesomeIcon icon={faPowerOff} />
                </a>
            </div>
            <div className="col">
                <a className="user float-right" href="https://youtube.com/">
                    <FontAwesomeIcon icon={faUser} />
                </a>
            </div>
        </div>

    {/* Logo de la App */}

        <div className="nav justify-content-center">
            <a className="navbar-brand logoweb" href="http://localhost:3000/">
                <img src="https://i.postimg.cc/4yCbQ5S3/LOGOV2.png" alt="logoweb" loading="lazy" />
            </a>
        </div>

    {/* Menú principal del Header */}

        <div className="menu nav justify-content-center">
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="collapse navbar-collapse items-navbar" id="navbarNav">
                    <ul className="menu navbar-nav">
                        <li className="nav-item">
                            <NavLink className="link-header" to="/popular">+Populares</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="link-header" to="/top_rated">+Valoradas</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="link-header" to="/now_playing">Ahora en Cines</NavLink>
                        </li>
                    </ul>
                </div>


            </nav>

        </div>

    </header>)


}

export default Header;