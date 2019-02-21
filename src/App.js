import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons'
import './styles/css/app.css';

import Greeting from './components/Greeting'

library.add(fas)
class App extends Component {
  render() {
    return (
      <div className="App">
        <section className="hero">
          <div className="hero-inner">
            {/* TODO replace with components */}
            <div className="greetingSection">
              <Greeting />
            </div>
            <div className="widgetSection">
              {/* TODO replace with components */}
              {/* TODO show weather if location allowed */}
              <div className="weatherSection widget">
                <FontAwesomeIcon icon="cloud-sun" className="icon" />
                <h2>Weather info</h2>
              </div>
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
          </div>
        </section>
      </div>
    );
  }
}

export default App;
