import React, { useState } from "react";
// import "../styles/css/loginform.css";
import imagelogin from "../imgs/img-login7.jpg";
import iconlogin from "../imgs/icon-login.png";
import "../styles/scss/loginform.scss";
import { Link } from "react-router-dom";
import loginService from "../services/login";
import notesService from "../services/notes"
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);

  const navigate = useNavigate();
  

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const user = await loginService.login({
        username,
        password,
      });
      window.localStorage.setItem(
        'loggedNoteappUser', JSON.stringify(user)
      )
      notesService.setToken(user.token)
      setUser(user);
      setUsername("");
      setPassword("");
      navigate("/"); // redirect to home page after login
    } catch (exception) {
      setErrorMessage("Wrong credentials");
      setTimeout(() => {
        setErrorMessage(null);
      }, 5000);
    }
  };

  return (
    <div className="container-login">
      <div className="container-form">
        <div className="title-login">
          <img src={iconlogin} alt="icon-login" width={30} />
          <h1>Inmuebes App</h1>
        </div>
        <div className="div-form-login">
          <form className="form-login" onSubmit={handleLogin}>
            <h1 className="welcome">!Bienvenido/a!</h1>
            {errorMessage === null ? null : (
              <div style={{ color: "red" }}>{errorMessage}</div>
            )}
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                value={username}
                onChange={({ target }) => {
                  setUsername(target.value);
                }}
              />
            </div>
            <div className="form-group">
              <label>Contraseña</label>
              <input
                type="password"
                value={password}
                onChange={({ target }) => {
                  setPassword(target.value);
                }}
              />
            </div>
            <div className="form-group-check">
              <div className="check-label-group">
                <input className="checkbox" type="checkbox" />
                <label>Recuérdame</label>
              </div>
              <a className="link-forgotpass" href=".">
                ¿Has olvidado la contraseña?
              </a>
            </div>
            <div className="form-group">
              <button className="button-submit" type="submit">
                Iniciar sesión
              </button>
              <button className="button-new">
                <Link style={{ textDecoration: "none", color: "black"}} to="/register">Registrar nueva cuenta</Link>
              </button>
            </div>
          </form>
        </div>
      </div>
      <img className="img-login" src={imagelogin} alt="img-login" />
    </div>
  );
};

export default LoginForm;
