import React from 'react'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fetchWeather, setZip } from './actions/weatherActions';

function Weather(props) {
  let weatherData = props.data;

  const successCallback = (loc) => {
    props.dispatch(setZip(loc))
  }

  const errorCallback = (err) => {
    console.error('ERROR: ', err)
  }

  navigator.geolocation.getCurrentPosition(
    successCallback,
    errorCallback,
    {maximumAge:600000}
  );

  const getWeather = () => {
    console.log(props.loc)
    props.dispatch(fetchWeather(props.loc))
    setTimeout(() => getWeather(), 600000)
    console.log('WeatherData', weatherData)

  }

  if(weatherData) {
    console.log(weatherData)
      return (
      <div className="weatherSection widget">
        <FontAwesomeIcon onClick={() => getWeather()} icon="cloud-sun" className="icon" />
        <h2>{weatherData.currently.temperature}°f</h2>
        <h3>{weatherData.currently.summary}</h3>
        <h3>{weatherData.currently.windSpeed} mph</h3>
        <h3>{weatherData.hourly.summary}</h3>
      </div>
      )
  } else {
    console.log('fetching')
    getWeather()
  }


  return (
    <div className="weatherSection widget">
      <h1 style={{color: 'Red'}}>Weather Error</h1>
    </div>
  )
}

const mapStateToProps = state => ({
  loc: state.weather.loc,
  data: state.weather.data,
  lastReq: state.weather.lastReq
})

export default connect(mapStateToProps)(Weather)