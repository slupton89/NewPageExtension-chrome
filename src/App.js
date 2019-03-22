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
        <div className="App" onClick={() => console.log(this.state)}>
          <section className="hero" style={{
            backgroundImage: `linear-gradient(150deg, rgba(0, 0, 0, .8), rgba(0, 0, 0, 0.3)),
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
