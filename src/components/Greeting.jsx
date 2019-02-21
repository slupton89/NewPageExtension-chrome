import React, { Component } from 'react'
import { connect } from 'react-redux'
require('../styles/css/greeting.css')
class Greeting extends Component {
  getDayTime = () => {
    let date = new Date()
    let hour = date.getHours()
    return hour >= 21 ? 'Night'
      : hour >= 17 ? 'Evening'
      : hour >= 12 ? 'Afternoon'
      : hour >= 6 ? 'Morning'
      : 'ERROR'
  }

  getUserName = () => {
    const name = this.props.userName
    return name !== undefined ? name : 'No Name Entered'
  }
  render() {

    return (
      <div className="greetingWidget">
        <h1>Good</h1>
        <h1 className="greetingTime">{this.getDayTime()},</h1>
        <h1 className="greetingName">{this.getUserName()}</h1>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    userName: state.user.userName
  }
}

export default connect(mapStateToProps)(Greeting)