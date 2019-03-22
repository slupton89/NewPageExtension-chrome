import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import('../../styles/css/location.css')

export default function Location(props) {
  const requestPermission = () => {
    navigator.geolocation.getCurrentPosition(()=> console.log('success'), () => console.log('error'))
    localStorage.setItem('firstRun', true)
  }

  return (
    <div className={props.className} style={props.style}>
      <h1 className='title'>Enabling Location Services</h1>
      <h2 className='desc'>Location is only used for weather services</h2>
      <button className='loc-btn' onClick={() => requestPermission()}><p className='btn-text'>Enable Location</p></button>
      <FontAwesomeIcon className='nextBtn' icon="play-circle" onClick={() => window.location.reload()}/>
    </div>
  )
}