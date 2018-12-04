import React, { Component, Fragment } from 'react';
import './App.css';
import Menu from './components/Menu';
import Screen from './components/Screen';

class App extends Component {
  state = {
    menuOpen: false,
    screenOpen: false
  };

  handleLinkClick = () => {
    this.setState({
      menuOpen: false,
      screenOpen: true
    });
  };

  handleHomeClick = () => {
    this.setState({
      menuOpen: false,
      screenOpen: false
    });
  };



  render() {
    const { menuOpen, screenOpen } = this.state;
    return (
      <Fragment>
        <div className="landing">
          <div className="photo" />
          <div className="about">
            <header>              
              <div
                className="menu-icon"
                onClick={() => {
                  this.setState({ menuOpen: !menuOpen });
                }}
              >
                <div className={menuOpen ? 'menu-icon__bar menu-icon__bar--rotate' : 'menu-icon__bar'} />
                <div
                  className={
                    menuOpen
                      ? 'menu-icon__bar menu-icon__bar--bottom menu-icon__bar--bottom--rotate'
                      : 'menu-icon__bar menu-icon__bar--bottom'
                  }
                />
              </div>
            </header>
            <h1 className="about__headline">Cover ground.</h1>
            <p className="about__description">
              Vestibulum porttitor, urna a aliquet consectetur, odio erat tincidunt risus, non
              tristique diam dui eget eros. Sed consectetur, justo mattis iaculis consequat, diam ex
              elementum augue, vel malesuada lacus dolor non lectus. Cras aliquet odio turpis, eu
              porta turpis commodo et.
            </p>
            <button className="button" onClick={this.handleLinkClick}>
              Discover
            </button>
          </div>
        </div>
        <Menu isMenuOpen={menuOpen} handleLinkClick={this.handleLinkClick} handleHomeClick={this.handleHomeClick} />
        <Screen isScreenOpen={screenOpen} handleHomeClick={this.handleHomeClick}  />
      </Fragment>
    );
  }
}

export default App;
