import React from 'react'
import { connect } from 'react-redux'
import socketIOClient from 'socket.io-client'
import { CircleLoader } from 'react-spinners'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import '../styles/css/weather.css'
class Weather extends React.Component {
  constructor() {
    super()

    this.state = {
      response: false,
      endpoint: 'localhost:1337'
    }
  }

  componentDidMount() {
    const { endpoint } = this.state
    const socket = socketIOClient(endpoint)
    navigator.geolocation.getCurrentPosition(pos => socket.send([pos.coords.latitude, pos.coords.longitude]))
    socket.on("FromAPI", data => {
      this.setState({ response: data })
    })
  }

  formatTemp(temp) {
    const newTemp = temp.toString().slice(0, 2)
    console.log(newTemp)
    return newTemp
  }

  render() {
    const { response } = this.state
    return (

          response
            ? <div className="weather">
                {/* <FontAwesomeIcon icon="cloud" className="icon"/> */}
                <h1 className="temp">{this.formatTemp(response.temperature)}°f</h1>
                <h2 className="summary">{response.summary}</h2>
              </div>
            : <div className="weather">
                <div className="loader">
                  <CircleLoader
                    sizeUnit={'px'}
                    size={50}
                    color={'#FFFFFF'}
                  />
                </div>
              </div>

    )
  }
}

const mapStateToProps = state => ({
  loc: state.weather.loc,
  data: state.weather.data,
  lastReq: state.weather.lastReq
})

export default connect(mapStateToProps)(Weather)