import React from 'react';
import './Menu.css';

const Menu = (props) => {
  const { isMenuOpen, handleLinkClick } = props;
  return (
    <ul className={isMenuOpen ? 'menu menu--open' : 'menu'}>
      <li onClick={handleLinkClick}>Item One</li>
      <li onClick={handleLinkClick}>Item Two</li>
      <li onClick={handleLinkClick}>Item Three</li>
      <li onClick={handleLinkClick}>Item Four</li>
    </ul>
  );
};

export default Menu;