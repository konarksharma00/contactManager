import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => (
  <div className="header">
    <div className="container">
      <Link className="navbar-brand logoname" to="/about">
        About the project
      </Link>
      <h1 className="header__title">{props.title}</h1>
      {props.subtitle && <h2 className="header__subtitle">{props.subtitle}</h2>}
    </div>
  </div>
);

Header.defaultProps = {
  title: 'Contact Manager'
};

export default Header;
