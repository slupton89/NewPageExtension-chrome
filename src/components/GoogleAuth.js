import React from 'react';
import { connect } from 'react-redux'
import {GoogleAPI,GoogleLogin,GoogleLogout} from 'react-google-oauth'
import { GOOGLE_ID } from '../config'

import { setToken } from './actions/authActions'

class GoogleOAuth extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      events: []
    }
  }

  componentDidMount = () => {
    this.getEvents();
  }

  getEvents(){
    let that = this;
    function start() {
      gapi.client.init({
        'apiKey': GOOGLE_ID
      }).then(function() {
        return gapi.client.request({
          'path': `https://www.googleapis.com/calendar/v3/calendars/events`,
        })
      }).then( (response) => {
        let events = response.result.items
        that.setState({
          events
        }, ()=>{
          console.log(that.state.events);
        })
      }, function(reason) {
        console.log(reason);
      });
    }
    gapi.load('client', start)
  }
  render(){
    return (
      this.state.events.map(function(event){
        return(
          event.summary
          (event.start.dateTime - event.end.dateTime)
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

export default connect()(GoogleOAuth)