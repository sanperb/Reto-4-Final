import React from 'react';
import { NavLink} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


const Footer = props => {
    /* Devuelve el contenido del footer */
    return (

        <footer className="footer-container">
            <div className="container-fluid">
                <nav class="navbar navbar-expand-lg navbar-light aboutus-list">
                    <div className="collapse navbar-collapse items-navbar" id="navbarNav">
                        <ul class="navbar-nav footer-list">
                            <li className="nav-item">
                            <NavLink className="link-footer" to="/SobreNosotros">Sobre Nosotros</NavLink>
                            </li>
                            <li class="nav-item">
                            <NavLink className="link-footer" to="/Register">Subscríbete</NavLink>
                            </li>
                            <li class="nav-item">
                            <NavLink className="link-footer" to="/Contact">Contacto</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
                <a class="navbar-brand logoweb-footer" href="http://localhost:3000/">
                    <img src="https://i.postimg.cc/gJkt3KrR/LOGOcolor2.png" width="177px" height="59px" alt="logoweb" loading="lazy" />
                </a>
            </div>
            <div className="copyright-container">
                <div className="row text-center">
                    <div className="col-12">© 2020 Copyright:
    <a className="github" href="https://github.com/sanperb"> Github/sanperb</a>
                    </div>
                </div>
            </div>


        </footer>
    );
}

export default Footer;