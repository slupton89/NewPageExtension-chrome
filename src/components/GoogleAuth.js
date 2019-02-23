import React from 'react';
import { connect } from 'react-redux'
import {GoogleAPI,GoogleLogin,GoogleLogout} from 'react-google-oauth'
import { GOOGLE_ID } from '../config'

function GoogleOAuth(props) {

  return (
  <GoogleAPI clientId={GOOGLE_ID}
    onUpdateSigninStatus={console.log('signed in')}
    onInitFailure={console.log('failed')} >
    <div>
      <div><GoogleLogin /></div>
      <div><GoogleLogout /></div>
    </div>
  </GoogleAPI>
  )
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  }
}

export default connect()(GoogleOAuth)