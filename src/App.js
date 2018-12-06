import React, { Component, Fragment } from 'react';
import './App.css';
import Menu from './components/Menu';

class App extends Component {
  state = {
    menuStatus: 'initial',
  };

  handleClick = () => {
    console.log('test')
    const { menuStatus } = this.state;
    if (menuStatus === 'initial' || menuStatus === 'closed') {
      this.setState({
        menuStatus: 'open',
      });
    }
    if (menuStatus === 'open') {
      this.setState({
        menuStatus: 'closed',
      });
    }
  };

  render() {
    const { menuStatus } = this.state;
    return (
      <Fragment>
        <header>
          <div className="menu-icon" onClick={this.handleClick}>
            <div
              className={
                menuStatus === 'initial'
                  ? 'menu-icon__bar'
                  : menuStatus === 'open'
                    ? 'menu-icon__bar open'
                    : 'menu-icon__bar closed'
              }
            />
            <div
              className={
                menuStatus === 'initial'
                  ? 'menu-icon__bar'
                  : menuStatus === 'open'
                    ? 'menu-icon__bar open'
                    : 'menu-icon__bar closed'
              }
            />
            <div
              className={
                menuStatus === 'initial'
                  ? 'menu-icon__bar'
                  : menuStatus === 'open'
                    ? 'menu-icon__bar open'
                    : 'menu-icon__bar closed'
              }
            />
          </div>
        </header>
        <div className="landing">
          <div className="photo" />
          <div className="about">
            <h1 className="about__headline">Cover ground.</h1>
            <p className="about__description">
              Vestibulum porttitor, urna a aliquet consectetur, odio erat tincidunt risus, non
              tristique diam dui eget eros. Sed consectetur, justo mattis iaculis consequat, diam ex
              elementum augue, vel malesuada lacus dolor non lectus. Cras aliquet odio turpis, eu
              porta turpis commodo et.
            </p>
            <button className="button" onClick={this.handleClick}>
              Discover
            </button>
          </div>
        </div>
        <Menu
          menuStatus={menuStatus}
        />
      </Fragment>
    );
  }
}

export default App;
