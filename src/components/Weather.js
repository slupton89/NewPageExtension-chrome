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

  render() {
    const { response } = this.state
    console.log(this.state.response)
    return (
      <div style={{ textAlign: "center" }}>
        {response
          ? <div className="widget weatherDesc">
              <FontAwesomeIcon icon="cloud" className="icon"/>
              <h1 className="temp">{response.temperature}°F</h1>
              <h2 className="summart">{response.summary}</h2>
            </div>
            : <div className="widget">
                <div className="loader">
                  <CircleLoader
                    sizeUnit={'px'}
                    size={50}
                    color={'#FFFFFF'}
                  />
                </div>
              </div>}
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