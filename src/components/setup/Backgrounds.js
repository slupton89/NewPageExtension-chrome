import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import FirstSetup from '../FirstSetup'
import('../../styles/css/backgrounds.css')

var ReactDOM = require('react-dom')
export class Backgrounds extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      backgroundColor: 'linear-gradient(-110deg, rgb(235, 161, 0), rgb(66, 0, 97))'
    }
  }

  landscapeGal = 72157690383405223
  spaceGal = 72157704051272222
  citiesGal = 72157704051615492
  abstractGal = 72157679355152808
  changeBackground = (id) => {

  }
  render() {
    return (
      <div className={this.props.className} style={this.props.style}>
        <h1 className='title'>What backgrounds would you like to see?</h1>
        <div className='img-container'>
          <div className='img-group' onMouseOver={()=> this.changeBackground(this.landscapeGal)}>
            <h3 className='img-title'>Landscapes</h3>
          </div>
          <div className='img-group' onMouseOver={()=> this.changeBackground(this.spaceGal)}>
            <h3 className='img-title'>Space</h3>
          </div>
          <div className='img-group'onMouseOver={()=> this.changeBackground(this.citiesGal)}>
            <h3 className='img-title'>Cities</h3>
            <img className='img' src='' alt='' />
          </div>
          <div className='img-group' onMouseOver={()=> this.changeBackground(this.abstractGal)}>
            <h3 className='img-title'>Abstract</h3>
          </div>
        </div>
        <FontAwesomeIcon className='nextBtn' icon="play-circle" />
      </div>
    )

  }
}