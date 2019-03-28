import React from 'react'
import { connect } from 'react-redux'
import socketIOClient from 'socket.io-client'
import { PropagateLoader } from 'react-spinners'
import { WEATHER_URI } from '../config'
import '../styles/css/weather.css'
class Weather extends React.Component {
  constructor() {
    super()

    this.state = {
      response: false,
      endpoint: WEATHER_URI
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
    return temp.toString().slice(0, 2)
  }

  render() {
    const { response } = this.state
    return (

          response
            ? <div className="weather">
                <h1 className="temp">{this.formatTemp(response.temperature)}°f</h1>
                <h2 className="summary">{response.summary}</h2>
              </div>
            : <div className="weather">
                <div className="loader">
                  <PropagateLoader
                    sizeUnit={'px'}
                    size={25}
                    color={'rgba(255, 255, 255, 0.25)'}
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