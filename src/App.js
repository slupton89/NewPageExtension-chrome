import React, { Component } from 'react';
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './styles/css/app.css';

import Greeting from './components/Greeting'
import Weather from './components/Weather'
import FirstSetup from './components/FirstSetup';
// import GoogleOAuth from './components/GoogleAuth';
// import TopSites from './components/TopSites';

class App extends Component {
  render() {
    if(localStorage.getItem('firstRun') !== true) {
      return <FirstSetup />
    } else {
      return (
        <div className="App">
          <section className="hero">
            <Greeting />
            <div className="widgetSection">
              {/* TODO show weather if location allowed */}
              <Weather />

              {/* <TopSites className="topSiteSection widget"/> */}
              {/* TODO replace with components */}
              <div className="todaySection widget">
                <FontAwesomeIcon icon="calendar-day" className="icon" />
                <h2>Today</h2>
              </div>
              {/* TODO replace with components */}
              <div className="widget"></div>
              <div className="widget"></div>
              <div className="widget"></div>
              <div className="widget"></div>
              <div className="widget"></div>
              <div className="widget"></div>
              <div className="widget"></div>
              <div className="widget"></div>
              <div className="widget"></div>
              <div className="widget"></div>
            </div>
            <footer className="footer">
              <img src={require('./images/zentab.png')} alt="zentab logo"></img>
            </footer>
          </section>
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    zip: state.weather.zip,
    data: state.weather.lastData
  }
}

export default connect(mapStateToProps)(App);
