import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import classNames from "classnames";
import gravatar from "../utils/gravatar";
import { logoutRequest } from "../actions";
import "../assets/styles/components/Header.scss";
import logo from "../assets/static/logo-platzi-video-BW2.png";
import userIcon from "../assets/static/user-icon.png";

//reto
// import PropTypes from 'prop-types';
// validaciones con prop-types
// Header.propTypes = {
// el user debe de ser un objeto
//   user: propTypes.object,
// el logoutRequest debe ser una funcion
//   logoutRequest: propTypes.func,
// };

const Header = (props) => {
  console.log(props);
  console.log(props.history);
  const { user, isLogin, isRegister } = props;
  // para que nosotros podamos comprobar que un objeto tiene "n" elementos, lo que hacemos es pasarlo por medio de Object punto keys. Y de esta forma a nosotros nos regresa cuantos elementos tiene ese objeto, esto con Object en mayúsculas y de esta forma puedo entonces, ahora sí, utilizar el punto length, y validar si este elemento tiene más de un hijo.
  const hasUser = Object.keys(user).length > 0;

  const handleLogout = () => {
    props.logoutRequest({});
  };

  const headerClass = classNames("header", {
    isLogin,
    isRegister,
  });
  return (
    <header className={headerClass}>
      <Link to="/">
        <img className="header__img" src={logo} alt="Platzi Video" />
      </Link>
      <div className="header__menu">
        <div className="header__menu--profile">
          {/* //validacion de hasUser */}
          {hasUser ? (
            <img src={gravatar(user.email)} alt={user.email} />
          ) : (
            <img src={userIcon} alt="" />
          )}
          <p>Perfil</p>
        </div>
        <ul>
          {/*Operador ternario Nos va a permitir saber si tenemos o no una cuenta iniciada */}
          {hasUser ? (
            <li>
              <a href="/">{user.name}</a>
            </li>
          ) : null}

          {hasUser ? (
            <li>
              <a href="#logout" onClick={handleLogout}>
                Cerrar Sesión
              </a>
            </li>
          ) : (
            <li>
              <Link to="/login">Iniciar Sesión</Link>
            </li>
          )}
        </ul>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {
  logoutRequest,
};
// export default Header;
export default connect(mapStateToProps, mapDispatchToProps)(Header);
