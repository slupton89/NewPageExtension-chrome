import React from 'react'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fetchWeather } from './actions/weatherActions';

function Weather(props) {
  const getWeather = () => {
    props.dispatch(fetchWeather(props.zip))
  }

  return (
    <div className="weatherSection widget">
      <FontAwesomeIcon onClick={() => getWeather()} icon="cloud-sun" className="icon" />
      <h2>Weather info</h2>
      <h3>{props.zip}</h3>
      <h3>{props.data}</h3>
    </div>
  )
}

const mapStateToProps = state => ({
  zip: state.weather.zip,
  data: state.weather.lastData
})

export default connect(mapStateToProps)(Weather)