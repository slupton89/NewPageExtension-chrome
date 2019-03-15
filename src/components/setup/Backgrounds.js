import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import FirstSetup from '../FirstSetup'
import('../../styles/css/backgrounds.css')


var ReactDOM = require('react-dom')
export class Backgrounds extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      style: {
        display: 'flex',
      },
      backgroundImage: 'linear-gradient(-110deg, rgb(235, 161, 0), rgb(66, 0, 97))'
    }
  }

  landscapeGal = 72157690383405223
  spaceGal = 72157704051272222
  citiesGal = 72157704051615492
  abstractGal = 72157679355152808

  changeBackground = (id, image) => {
    console.log(this.state.backgroundImage)
    this.setState({
      backgroundImage: image
    })
  }
  render() {
    return (
      <div>
        <img style={{ width: '100vw', height: '100vh' }}
          src={this.state.backgroundImage}
          alt="background-example"
        />
        <div className={this.props.className} style={this.state.style} ref='backgrounds' >
          <h1 className='title'>What backgrounds would you like to see?</h1>
          <div className='img-container'>
            <div className='img-group'
              onMouseOver={()=> this.changeBackground(this.landscapeGal, 'https://farm3.staticflickr.com/2940/34149109766_4b7a0ef51b_b.jpg')}
            >
              <h3 className='img-title'>Landscapes</h3>
            </div>
            <div className='img-group' onMouseOver={()=> this.changeBackground(this.spaceGal, 'https://farm9.staticflickr.com/8479/8187467569_6a380686d3_b.jpg')}>
              <h3 className='img-title'>Space</h3>
            </div>
            <div className='img-group'onMouseOver={()=> this.changeBackground(this.citiesGal, 'https://farm8.staticflickr.com/7466/16023505656_a1c130e6ac_b.jpg')}>
              <h3 className='img-title'>Cities</h3>
              <img className='img' src='' alt='' />
            </div>
            <div className='img-group' onMouseOver={()=> this.changeBackground(this.abstractGal, 'https://farm8.staticflickr.com/7043/13384323343_951f59c1e0_b.jpg')}>
              <h3 className='img-title'>Abstract</h3>
            </div>
          </div>
          <FontAwesomeIcon className='nextBtn' icon="play-circle" />
        </div>
      </div>
    )

  }
}