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
        <form>
          <input type='text' className='nameField'
            onChange={() => {
              this.setState(Object.assign({}, this.state, {
              username: document.querySelector('input').value
              }))
              console.log(document.querySelector('input').value)
            }} />
          <button type='submit' className='nextBtn'><FontAwesomeIcon className='nextBtn' icon='play-circle'
            onClick={(e) => {
              e.preventDefault()
              console.log(this.state.username)
              this.props.setName(this.state.username)
            }}/>
          </button>
        </form>
      </div>
    )

  }
}