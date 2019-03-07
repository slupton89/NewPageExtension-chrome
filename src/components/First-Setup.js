import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import('../styles/css/FirstSetup.css')
import('../styles/css/animate.css')
export default class FirstSetup extends React.Component {
  constructor() {
    super()

    this.state = {
      intro: 'intro',
      name: 'name',
      backgrounds: 'backgrounds',
      theme: 'theme',
      location: ''
    }
  }
  render() {
    return (
      <div className='firstrun'>
        <div className={this.state.intro} >
          <div className= 'setup animated fadeInRight'>
            <h1 className='welcome'>Welcome to zentab</h1>
            <FontAwesomeIcon className='startBtn' icon='play-circle'
              onClick={() => {
                this.setState(Object.assign({}, this.state, {
                  intro: 'intro animated fadeOutLeft',
                  pagetwo: 'introtwo animated fadeInRight'
                }))
              }
            } />
            <h2 className='intro'>Lets get started on personalizing your new tab</h2>
          </div>
          {/* second page */}
            {/* name */}

          {/* third page */}
            {/* dark or light theme */}

          {/* forth page */}
            {/* enable location */}

        </div>
      </div>
    )
  }
}