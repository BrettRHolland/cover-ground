import React, { Component, Fragment } from 'react';
import './App.css';
import Menu from './components/Menu';

class App extends Component {
  state = {
    menuOpen: false
  };

  render() {
    const { menuOpen } = this.state;
    return (
      <Fragment>
        <Menu isMenuOpen={menuOpen} />
      <div className="splash">
        <div className="photo" />
        <div className="about">
          <header>
            <h1 className="logo">Cover ground.</h1>
            <div
              className="icon"
              onClick={() => {
                this.setState({ menuOpen: !menuOpen });
              }}
            >
              <div className={menuOpen ? 'menu-icon menu-icon--rotate' : 'menu-icon'} />
              <div
                className={
                  menuOpen
                    ? 'menu-icon menu-icon--bottom menu-icon--bottom--rotate'
                    : 'menu-icon menu-icon--bottom'
                }
              />
            </div>
          </header>
          <p className="about__description">
            Vestibulum porttitor, urna a aliquet consectetur, odio erat tincidunt risus, non
            tristique diam dui eget eros. Sed consectetur, justo mattis iaculis consequat, diam ex
            elementum augue, vel malesuada lacus dolor non lectus. Cras aliquet odio turpis, eu
            porta turpis commodo et.
          </p>
          <button className="button">Discover</button>
        </div>
      </div>
      </Fragment>
    );
  }
}

export default App;
