import React from 'react';

/* Contenido del link Register */


class Register extends React.Component {
    constructor() {
      super();    
      
      this.state = {form: 'login'};   
     
      this.toggle = {
        login: 'register',
        register: 'login'
      };
    }
    
    onSubmit(e) {
      e.preventDefault();
    }
  
    render() {    
      return (
        /* Devuelve el contenido del formulario de Subscripción */

        <div className="container-register">
          <div style={{transform: `translate(${this.state.form === 'login' ? 0 : 250}px, 0px)`}} className="form-div">
            <form onSubmit={this.onSubmit.bind(this)}>
              <input placeholder="Email" type="text" />
              <input placeholder="Contraseña" type="password" />
              {this.state.form === 'login' ? '': <input placeholder="Repite Contraseña" type="password" />}
              <button className="button-primary">Submit</button>
            </form>
          </div>
          <div style={{transform: `translate(${this.state.form === 'login' ? 0 : -250}px, 0px)`}} className="button-div">
            <p>{this.state.form === 'login' ? '¿Ya tienes una cuenta?' : '¿Ya eres miembro?'}</p>
            <button onClick={() => {this.setState({form: this.toggle[this.state.form]})}}>{this.toggle[this.state.form]}</button>
          </div>
        </div>
      );
    }
  }
  
export default Register;