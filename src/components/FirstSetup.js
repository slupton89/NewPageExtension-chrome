import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Name } from './setup/Name';
import { Backgrounds } from './setup/Backgrounds';

import('../styles/css/firstsetup.css')
import('../styles/css/animate.css')
export default class FirstSetup extends React.Component {
  constructor() {
    super()

    this.state = {
      intro: 'intro',
      introStyle: {},
      name: 'name',
      backgrounds: 'backgrounds',
      theme: 'theme',
      location: ''
    }
  }

  setName(name) {
    localStorage.setItem('username', name)
    this.setState(Object.assign({}, this.state, {
      name: 'name animated fadeOutLeft',
      backgrounds: 'background animated fadeInRight'
    }))
  }

  render() {
    return (
      <div className='firstrun'>
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
        <Name className={this.state.name} style={this.state.nameStyle} setName={this.setName.bind(this)}/>
        {/* third page */}
        {/* <Backgrounds className={this.state.backgrounds} style={this.state.nameStyle} /> */}
        {/* forth page */}
          {/* enable location */}

      </div>
    )
  }
}