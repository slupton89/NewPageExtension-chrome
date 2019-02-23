import React from 'react';
import { connect } from 'react-redux'
import { getEvents } from './modules/gcal'

class GoogleOAuth extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      events: []
    }
  }

  componentDidMount = () => {
    getEvents((events) => {
      this.setState({events})
    })
  }

  render(){
    return (
      this.state.events.map((event) => {
        console.log(event)
        return(
          event.summary
        )
      })
    )
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps)(GoogleOAuth)