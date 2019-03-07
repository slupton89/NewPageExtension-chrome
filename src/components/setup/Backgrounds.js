import React from 'react'

import('../../styles/css/name.css')

export function Backgrounds(props) {
  return (
    <div className={props.backgrounds}>
      <h1 className='title'>Backgrounds</h1>
      <h2>What kinds of images would you like to see?</h2>
    </div>
  )
}