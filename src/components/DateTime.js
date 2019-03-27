import React from 'react'
import moment from 'moment'
require('../styles/css/datetime.css')

export default class DateTime extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      date: new Date(),
      month: '',
      day: '',
      dayDate: '',
      time: '',
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.setState(Object.assign({}, this.state, {
      date: new Date(),
      month: moment(this.state.date).format('MMMM'),
      day: moment(this.state.date).format('dddd'),
      dayDate: moment(this.state.date).format('Do'),
      time: moment(this.state.date).format('h:mm:ss'),
    }))}, 1000)

  }

  render() {
    return (
      <div className="datetime">
        <h2 className='date'>{this.state.day}, {this.state.dayDate} of {this.state.month}</h2>
      </div>
    )
  }
}