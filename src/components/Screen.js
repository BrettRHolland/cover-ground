import React from 'react';
import './Screen.css';

const Screen = props => {
  const { isScreenOpen } = props;
  return (
    <div className={isScreenOpen ? 'screen screen--open' : 'screen'}>
      <div className="info">
        <h1 className="logo">Cg.</h1>
        <h2 className="about__headline">Vestibulum quis vehicula dui.</h2>
        <p className="about__description">
          Vestibulum porttitor, urna a aliquet consectetur, odio erat tincidunt risus, non tristique
          diam dui eget eros. Sed consectetur, justo mattis iaculis consequat, diam ex elementum
          augue, vel malesuada lacus dolor non lectus. Cras aliquet odio turpis, eu porta turpis
          commodo et.
        </p>
      </div>

      <div className="photo photo--screen">
        <div className="featured">
          <h3 className="featured__headline">Ut cursus odio ac mauris rhoncus, quis fringilla felis aliquam.</h3>
        </div>
      </div>

      <div className="sidebar" />
    </div>
  );
};

export default Screen;
