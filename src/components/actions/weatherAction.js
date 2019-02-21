import { WEATHER_API_KEY } from '../../config.js'

export const GET_WEATHER_ZIP = 'GET_WEATHER_ZIP'
export const getWeatherZip = () => ({
  type: GET_WEATHER_ZIP
})

export const SET_WEATHER_ZIP = 'SET_WEATHER_ZIP'
export const setWeatherZip = () => ({
  type: SET_WEATHER_ZIP
})

export const FETCH_WEATHER_REQUEST = 'FETCH_WEATHER_REQUEST'
export const fetchWeatherRequest = () => ({
  type: FETCH_WEATHER_REQUEST
})

export const FETCH_WEATHER_SUCCESS = 'FETCH_WEATHER_SUCCESS'
export const fetchWeatherSuccess = (data) => ({
  payload: data,
  type: FETCH_WEATHER_SUCCESS
})

export const FETCH_WEATHER_FAILURE = 'FETCH_WEATHER_FAILURE'
export const fetchWeatherFailure = () => ({
  type: FETCH_WEATHER_FAILURE
})

// TODO get stored zip from user
export const fetchWeather = (zip) => (dispatch) => {
  console.log("Input Zip: ", zip)
  dispatch(fetchWeatherRequest())
  return fetch(`http://api.openweathermap.org/data/2.5/forecast?id=${zip}&APPID={${WEATHER_API_KEY}}`, {
    method: 'GET',
  })
    .then(res => {
      if(!res.ok) {
        return Promise.reject({
          message: res.statusText,
          code: res.status
        })
      }
      return res.json()
    })
    .then(res => dispatch(fetchWeatherSuccess(res)))
    .catch(err => console.log(err.status, err.message))
}