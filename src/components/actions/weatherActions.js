import { DARKSKY_KEY } from '../../config.js'

export const SET_WEATHER_ZIP = 'SET_WEATHER_ZIP'
export const setWeatherZip = (loc) => ({
  loc,
  type: SET_WEATHER_ZIP
})

export const FETCH_WEATHER_REQUEST = 'FETCH_WEATHER_REQUEST'
export const fetchWeatherRequest = () => ({
  type: FETCH_WEATHER_REQUEST
})

export const FETCH_WEATHER_SUCCESS = 'FETCH_WEATHER_SUCCESS'
export const fetchWeatherSuccess = (data) => ({
  data,
  type: FETCH_WEATHER_SUCCESS
})

export const FETCH_WEATHER_FAILURE = 'FETCH_WEATHER_FAILURE'
export const fetchWeatherFailure = () => ({
  type: FETCH_WEATHER_FAILURE
})

export const setZip = (loc) => (dispatch) => {
  dispatch(setWeatherZip([loc.coords.latitude, loc.coords.longitude]))
  localStorage.setItem('weather-loc', `${loc.coords.latitude},${loc.coords.longitude}`)
}

// TODO get stored zip from user
export const fetchWeather = (loc) => (dispatch) => {
  dispatch(fetchWeatherRequest())
  // TODO figure out a way to search by city ID
  // zip only works best for US.
  console.log(DARKSKY_KEY)
  // if(loc) {
  // return fetch(`https://api.darksky.net/forecast/${DARKSKY_KEY}/${loc[0]},${loc[1]}`, {
  //   method: 'GET',
  //   mode: 'no-cors'
  // })
  //   .then(res => {
  //     if(!res.ok) {
  //       return Promise.reject({
  //         message: res.statusText,
  //         code: res.status
  //       })
  //     }
  //     return res.json()
  //   })
  //   .then(res => {
  //     dispatch(fetchWeatherSuccess(res))
  //     localStorage.setItem('weather-data', JSON.stringify(res))
  //   })
  //   .catch(err => console.log('Error', err.code, 'Message:', err.message))
  // }

  dispatch(fetchWeatherRequest({
    "latitude": 42.3601,
    "longitude": -71.0589,
    "timezone": "America/New_York",
    "currently": {
        "time": 1509993277,
        "summary": "Drizzle",
        "icon": "rain",
        "nearestStormDistance": 0,
        "precipIntensity": 0.0089,
        "precipIntensityError": 0.0046,
        "precipProbability": 0.9,
        "precipType": "rain",
        "temperature": 66.1,
        "apparentTemperature": 66.31,
        "dewPoint": 60.77,
        "humidity": 0.83,
        "pressure": 1010.34,
        "windSpeed": 5.59,
        "windGust": 12.03,
        "windBearing": 246,
        "cloudCover": 0.7,
        "uvIndex": 1,
        "visibility": 9.84,
        "ozone": 267.44
    },
    "hourly": {
        "summary": "Rain starting later this afternoon, continuing until this evening.",
    },
  }))
}