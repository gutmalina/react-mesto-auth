import React from "react";
import headerLogo from '../../src/images/header-logo.svg';
import {Link} from 'react-router-dom';

function Header({onLocation, signOut}){
  return(
    <header className="header indent__header">
      <img className="header__logo" src={headerLogo} alt="Логотип сервиса Mesto Russian"/>
        { onLocation.pathname !== '/' ?
            (onLocation.pathname === '/sign-in' ?
            <Link to="/sign-up" className="header__menu_link">Регистрация</Link> :
            <Link to="/sign-in" className="header__menu_link">Войти</Link>)
            :
            <a className="header__menu_link" onClick={signOut}>Выйти</a>
        }
    </header>
  )
}

 export default Header;
