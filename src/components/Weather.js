import React from 'react'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import socketIOClient from 'socket.io-client'
import { CircleLoader } from 'react-spinners'

class Weather extends React.Component {
  constructor() {
    super()

    this.state = {
      response: false,
      endpoint: 'http://localhost:8080'
    }
  }

  componentDidMount() {
    const { endpoint } = this.state
    const socket = socketIOClient(endpoint)
    socket.on("FromAPI", data => this.setState({ response: data }))
  }

  render() {
    const { response } = this.state
    return (
      <div style={{ textAlign: "center" }}>
        {response
          ? <div className="widget">
              The temperature is currently: {response} °F
            </div>
            : <div className="widget">
              <CircleLoader className="loader"
                css={{textAlign: 'center'}}
                sizeUnit={'px'}
                size={50}
                color={'#FFFFFF'}
              />
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