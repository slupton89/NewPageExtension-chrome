import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Name } from './setup/Name'
import Backgrounds from './setup/Backgrounds'
import Location from './setup/Location'

import('../styles/css/firstsetup.css')
import('../styles/css/animate.css')
export default class FirstSetup extends React.Component {
  constructor() {
    super()

    this.state = {
      intro: 'intro',
      introStyle: {},
      name: 'name',
      nameStyle: {display: 'none'},
      backgrounds: 'backgrounds',
      bgStyle: {display: 'none'},
      location: 'location',
      locStyle: {display: 'none'}
    }
  }

  setName(name) {
    localStorage.setItem('username', name)
    this.setState(Object.assign({}, this.state, {
      name: 'name animated fadeOutLeft',
      nameStyle: {display: 'none'},
      backgrounds: 'background animated fadeInRight',
      bgStyle: {display: 'flex'}
    }))
  }

  setBackgrounds(bgs) {
    localStorage.setItem('backgrounds', bgs)
    this.setState(Object.assign({}, this.state, {
      backgrounds: 'background animated fadeOutLeft',
      bgStyle: {display: 'none'},
      location: 'location animated fadeInRight',
      locStyle: {display: 'flex'},
    }))
  }

  finishSetup(){
    this.setState(Object.assign({}, this.state, {
      location: 'location animated fadeOutLeft',
      locStyle: {display: 'none'},
    }))
    localStorage.setItem('firstRun', true)
  }

  render() {
    return (
      <div className='firstrun' ref='firstRun'>
        <div className={this.state.intro} style={this.state.introStyle}>
          <div className= 'setup animated fadeInRight'>
            <h1 className='welcome'>Welcome to zentab</h1>
            <h2 className='intro'>Lets get started on personalizing your new tab</h2>
            <FontAwesomeIcon className='startBtn' icon='play-circle'
              onClick={() => {
                this.setState(Object.assign({}, this.state, {
                  intro: 'intro animated fadeOutLeft',
                  name: 'name animated fadeInRight',
                  nameStyle: {display: 'flex'},
                }))
                setTimeout(() => this.setState(Object.assign({}, this.state, {
                  introStyle: {display: 'none'}
                })), 1000)
              }
            } />
          </div>
        </div>
        {/* second page */}
        <Name className={this.state.name} style={this.state.nameStyle}
          setName={this.setName.bind(this)}/>
        {/* third page */}
        <Backgrounds className={this.state.backgrounds} style={this.state.bgStyle}
          firstRun={this.refs.firstRun}
          setBackgrounds={this.setBackgrounds.bind(this)}/>
        {/* forth page */}
        <Location className={this.state.location} style={this.state.locStyle}
          finishSetup={this.finishSetup.bind(this)}/>
      </div>
    )
  }
}