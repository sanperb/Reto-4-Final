import React from 'react';
import {BrowserRouter,Switch,Route } from "react-router-dom";
import { Provider } from 'react-redux';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './components/Header/header.css';
import './components/Footer/footer.css';
import SobreNosotros from './components/Footer/SobreNosotros/SobreNosotros';
import './components/Footer/SobreNosotros/SobreNosotros.css'
import Register from './components/Footer/Register/Register';
import Contact from './components/Footer/Contacto/Contact';
import './components/Footer/Contacto/contacto.css';
import './components/Footer/Register/register.css';
import Movies from './components/Container/movies';
import './components/Container/movie.css'

import configureStore from './config/store';
import Search from './components/Search/Search';
import Detail from './components/Detail/Detail';

const store = configureStore();

/* Contenedor de todo el contenido de nuestra App */

function App() {
  return (
   <div className="App">

    <Provider store={store}>
    <BrowserRouter>
     <Header/>
     <Switch>
       <Route path="/SobreNosotros" component={SobreNosotros} exact/>
       <Route path="/Register" component={Register} exact/>
       <Route path="/Contact" component={Contact} exact/>
       <Route path="/" component={Search} exact/>
       <Route path="/detail/:id" component={Detail} exact/>
       <Route path="/:movieType" component={Movies} exact/>
     </Switch>
     <Footer/>
    </BrowserRouter>
    </Provider>

   </div>
  );
}

export default App;
