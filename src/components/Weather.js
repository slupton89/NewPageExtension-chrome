import React from 'react'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fetchWeather, setZip } from './actions/weatherActions';

function Weather(props) {
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
    props.dispatch(fetchWeather(props.zip))
  }

  const weather = () => {
    let weatherData = props.data;
    let time = new Date()
    if((time.getTime() - props.lastReq) > 60000) {
      getWeather()
    }
    setTimeout(()=> getWeather(), 60000)
    return (
      <div>
        <h2>{weatherData.name}</h2>
        <h3>{weatherData.main.temp}</h3>
        <h3>{weatherData.wind.speed}mph</h3>
        <h3>{weatherData.weather[0].description}</h3>
      </div>
    )
  }

  return (
    <div className="weatherSection widget">
      <FontAwesomeIcon onClick={() => weather()} icon="cloud-sun" className="icon" />
      {weather()}
    </div>
  )
}

const mapStateToProps = state => ({
  zip: state.weather.zip,
  data: state.weather.data,
  lastReq: state.weather.lastReq
})

export default connect(mapStateToProps)(Weather)