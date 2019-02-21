import React, { Component } from 'react'
require('../styles/css/greeting.css')
export default class Greeting extends Component {
  render() {
    return (
      <div className="greetingWidget">
        <h1>Good</h1>
        <h1 className="greetingTime">Evening</h1>
        <h1 className="greetingName">Shane</h1>
      </div>
    )
  }
}