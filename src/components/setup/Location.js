import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import('../../styles/css/location.css')

export default function Location(props) {
  return (
    <div className={props.className} style={props.style}>
      <h1 className='title'>Enabling Location Services</h1>
      <h2 className='desc'>Location is only used for weather services</h2>
      <button className='loc-btn'><p className='btn-text'>Enable Location</p></button>
      <FontAwesomeIcon className='nextBtn' icon="play-circle"/>
    </div>
  )
}