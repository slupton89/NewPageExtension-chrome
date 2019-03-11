import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import('../../styles/css/backgrounds.css')

export class Backgrounds extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      username: ''
    }
  }
  render() {
    return (
      <div className={this.props.className} style={this.props.style}>
        <h1 className='title'>What backgrounds would you like to see?</h1>
        <div className='img-container'>
          <div className='img-group'>
            <h3 className='img-title'>Landscapes</h3>
          </div>
          <div className='img-group'>
            <h3 className='img-title'>Space</h3>
          </div>
          <div className='img-group'>
            <h3 className='img-title'>Cities</h3>
            <img className='img' src='' alt='' />
          </div>
          <div className='img-group'>
            <h3 className='img-title'>Space</h3>
          </div>
        </div>
        <FontAwesomeIcon className='nextBtn' icon="play-circle" />
      </div>
    )

  }
}