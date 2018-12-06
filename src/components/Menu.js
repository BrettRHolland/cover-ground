import React from 'react';
import './Menu.css';

const Menu = (props) => {
  const { menuStatus } = props;
  return (
    <ul className={menuStatus === 'open' ? 'menu menu--open' : 'menu'}>
      <li>Lorem Ipsum</li>
      <li>Aliquam Sit</li>
      <li>Cras Feugiat</li>
      <li>Duis Volutpat </li>
    </ul>
  );
};

export default Menu;