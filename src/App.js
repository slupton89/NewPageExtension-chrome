import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <section class="hero">
          <div class="hero-inner">
            <h1>My Awesome Website</h1>
            <h2>Look at this Website and bask in its amazing glory!</h2>
            <a href="https://google.com" class="btn">Go ahead...</a>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
