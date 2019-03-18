import React from 'react'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { getBGs } from '../actions/backgroundActions';
import {
  landscapeId,
  spaceId,
  citiesId,
  abstractId
} from '../../config'
import('../../styles/css/backgrounds.css')

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

  changeBackground = (image) => {
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
              onMouseOver={()=> this.changeBackground('https://farm3.staticflickr.com/2940/34149109766_4b7a0ef51b_b.jpg')}
              onClick={() => this.props.dispatch(getBGs(landscapeId))}
            >
              <h3 className='img-title'>Landscapes</h3>
            </div>
            <div className='img-group'
              onMouseOver={()=> this.changeBackground('https://farm9.staticflickr.com/8479/8187467569_6a380686d3_b.jpg')}
              onClick={() => this.props.dispatch(getBGs(spaceId))}
            >
              <h3 className='img-title'>Space</h3>
            </div>
            <div className='img-group'
              onMouseOver={()=> this.changeBackground('https://farm8.staticflickr.com/7466/16023505656_a1c130e6ac_b.jpg')}
              onClick={() => this.props.dispatch(getBGs(citiesId))}
            >
              <h3 className='img-title'>Cities</h3>
              <img className='img' src='' alt='' />
            </div>
            <div className='img-group'
              onMouseOver={()=> this.changeBackground('https://farm8.staticflickr.com/7043/13384323343_951f59c1e0_b.jpg')}
              onClick={() => this.props.dispatch(getBGs(abstractId))}
            >
              <h3 className='img-title'>Abstract</h3>
            </div>
          </div>
          <FontAwesomeIcon className='nextBtn' icon="play-circle" />
        </div>
      </div>
    )
  }
}

connect()(Backgrounds)