/*global chrome*/
import React, { Component } from 'react';
import { connect } from 'react-redux'

import './styles/css/app.css';

import Greeting from './components/Greeting'
import Weather from './components/Weather'
import FirstSetup from './components/FirstSetup';
import DateTime from './components/DateTime';

class App extends Component {
  constructor(props) {
    super()

    this.state = {
      backgrounds: localStorage.backgrounds.split(',') || [],
      currentBackground: ''
    }
  }

  componentDidMount() {
    this.setState((state) => {
      const bgs =state.backgrounds
      return {currentBackground: bgs[Math.floor(Math.random() * bgs.length)]}
    })
  }

  render() {
    console.log(this.state.backgrounds)
    if(localStorage.getItem('firstRun') !== 'true' || localStorage.getItem('username') === null) {
      return <FirstSetup />
    } else {
      return (
        <div className="App">
          <section className="hero" style={{
            backgroundImage: `linear-gradient(140deg, rgba(0, 0, 0, 0.75), rgba(0, 0, 000, 0)),
                              url(${this.state.currentBackground})`
            }}>
            <div className='greeting-container'>
              <Greeting />
              <DateTime />
              <Weather />
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
