import React from 'react'

require('../styles/css/greeting.css')

export default function Greeting() {
  let getDayTime = () => {
    let date = new Date()
    let hour = date.getHours()
    return hour >= 18 || hour <= 4 ? 'Evening'
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
      <h1 className="greetingTime">Good {getDayTime()}, {getUserName()}</h1>
    </div>
  )
}