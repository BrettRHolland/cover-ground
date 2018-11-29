import React from 'react';
import './Menu.css';

const Menu = (props) => {
  const { isMenuOpen } = props;
  return (
    <ul className={isMenuOpen ? 'menu menu--open' : 'menu'}>
      <li>Item One</li>
      <li>Item One</li>
      <li>Item One</li>
      <li>Item One</li>
    </ul>
  );
};

export default Menu;