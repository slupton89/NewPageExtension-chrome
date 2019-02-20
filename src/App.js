import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <section class="hero">
          <div class="hero-inner">
            <div className="greetingSection">
              <h1>Good</h1>
              {/* TODO replace */}
              <h1 className="greetingTime">Evening</h1>
              {/* TODO replace */}
              <h1 className="greetingName">Shane</h1>
            </div>

            {/* TODO show weather if location allowed */}
            <div className="weatherSection">
              <h2>Weather info</h2>
            </div>
            <h2>Look at this Website and bask in its amazing glory!</h2>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
