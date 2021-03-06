import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import('../../styles/css/name.css')

export class Name extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      username: ''
    }
  }

  render() {
    return (
      <div className={this.props.className} style={this.props.style}>
        <h1 className='title'>What is your name?</h1>
        <form name='nameForm' onSubmit={(e) => {
            e.preventDefault()
            if(this.state.username) {
              this.props.setName(this.state.username)
            }
        }}>
          <input type='text' className='nameField'
            onChange={() => {
              this.setState(Object.assign({}, this.state, {
              username: document.querySelector('input').value
              }))
            }} required />
          <button type='submit' className='nextBtn'>
            <FontAwesomeIcon className='nextBtn' icon='play-circle' />
          </button>
        </form>
      </div>
    )

  }
}