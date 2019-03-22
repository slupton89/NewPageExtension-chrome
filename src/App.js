import React, { Component } from 'react';
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './styles/css/app.css';

import Greeting from './components/Greeting'
import Weather from './components/Weather'
import FirstSetup from './components/FirstSetup';

class App extends Component {
  constructor(props) {
    super()

    this.state = {
      backgrounds: localStorage.backgrounds || [],
      currentBackground: ''
    }
  }

  setBackground() {
    this.setState((state) => {
      const bgs = state.backgrounds.split(',')
      return {currentBackground: bgs[Math.floor(Math.random() * bgs.length)]}
    })
  }

  componentDidMount() {
    this.setBackground()
  }

  render() {
    if(localStorage.getItem('firstRun') !== 'true' || localStorage.getItem('username') === null) {
      return <FirstSetup />
    } else {
      return (
        <div className="App">
          <section className="hero" style={{
            backgroundImage: `url(${this.state.currentBackground})`
            }}>
            <Greeting />
            <div className="widgetSection">
              {/* TODO show weather if location allowed */}
              <Weather />

              {/* <TopSites className="topSiteSection widget"/> */}
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
