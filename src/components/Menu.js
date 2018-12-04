import React from 'react';
import './Menu.css';

const Menu = (props) => {
  const { isMenuOpen, handleLinkClick, handleHomeClick } = props;
  return (
    <ul className={isMenuOpen ? 'menu menu--open' : 'menu'}>
      <li onClick={handleHomeClick}>Home</li>
      <li onClick={handleLinkClick}>Another Page</li>
    </ul>
  );
};

export default Menu;