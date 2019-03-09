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
          <div className='image'></div>
          <div className='image'></div>
          <div className='image'></div>
          <div className='image'></div>
        </div>
      </div>
    )

  }
}