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