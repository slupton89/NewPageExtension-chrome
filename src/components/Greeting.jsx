import React, { Component } from 'react'
import Moment from 'moment'
require('../styles/css/greeting.css')
export default class Greeting extends Component {
  moment = new Moment()
  getDayTime = () => {
    let date = new Date()
    let hour = date.getHours()
    return hour >= 21 && hour <= 5 ? 'Night'
      : hour >= 17 && hour <= 20 ? 'Evening'
      : hour >= 12 && hour <= 16 ? 'Afternoon'
      : hour >= 6 && hour <= 11 ? 'Morning'
      : 'ERROR'
  }
  render() {
    return (
      <div className="greetingWidget">
        <h1>Good</h1>
        <h1 className="greetingTime">{this.getDayTime()},</h1>
        <h1 className="greetingName">Shane</h1>
      </div>
    )
  }
}