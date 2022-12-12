import React from 'react';
import iconlogin from '../imgs/icon-login.png'
import "../styles/css/registerform.css"

const RegisterForm = () => {
    return (
      <div className="container-form-register">
        <div className="title-register">
          <img src={iconlogin} alt="icon-login" width={30} />
          <h1>Inmuebes App</h1>
        </div>
        <div className="div-form-register">
          <form className="form-register" action="" method="POST">
          <h1 className="welcome">¡Registrate ahora!</h1>
            <div className="form-group">
              <label>Nombre de usuario</label>
              <input type="text" />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" />
            </div>
            <div className="form-group">
              <label>Contraseña</label>
              <input type="password" />
            </div>
            <div className="form-group">
              <label>Repite la contraseña</label>
              <input type="password" />
            </div>
            <div className="form-group">
              <button className="button-new" type="submit">Registrar nueva cuenta</button>
            </div>
          </form>
        </div>
      </div>
    );
}

export default RegisterForm;
