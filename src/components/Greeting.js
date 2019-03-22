import React from 'react'
import { connect } from 'react-redux'

require('../styles/css/greeting.css')

export default function Greeting(props) {
  let getDayTime = () => {
    let date = new Date()
    let hour = date.getHours()
    return hour >= 21 || hour <= 4 ? 'Night'
      : hour >= 18 ? 'Evening'
      : hour >= 1 ? 'Afternoon'
      : hour >= 5 ? 'Morning'
      : 'ERROR'
  }

  let getUserName = () => {
    const name = localStorage.getItem('username')
    return name !== undefined ? name : 'No Name Entered'
  }

  return (
    <div className="greetingWidget">
      <h1>Good</h1>
      <h1 className="greetingTime">{getDayTime()},</h1>
      <h1 className="greetingName">{getUserName()}</h1>
    </div>
  )
}