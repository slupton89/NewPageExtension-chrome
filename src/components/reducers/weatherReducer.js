import {
  SET_WEATHER_ZIP,
  FETCH_WEATHER_REQUEST,
  FETCH_WEATHER_SUCCESS,
  FETCH_WEATHER_FAILURE
} from '../actions/weatherActions.js'

const GET_LOC = () => {
  let location = localStorage.getItem('weather-loc')
  if (location) {
    return location.split(',')
  }
}

const initialState = {
  loc: GET_LOC() || null,
  data: null,
  lastReq: 0,
  loading: false,
  error: false
}

const weatherReducer = (state = initialState, action) => {
  if(action.type === SET_WEATHER_ZIP) {
    return Object.assign({}, state, {
      loc: action.loc,
      loading: false,
      error: null
    })
  } else if(action.type === FETCH_WEATHER_REQUEST) {
    return Object.assign({}, state, {
      loading: true
    })
  } else if(action.type === FETCH_WEATHER_SUCCESS) {
    let time = new Date()
    console.log('!!!!!')
    return Object.assign({}, state, {
      data: action.data,
      lastReq: time.getTime(),
      loading: false,
      error: null
    })
  } else if(action.type === FETCH_WEATHER_FAILURE) {
    return Object.assign({}, state, {
      loading: false,
      error: action.error
    })
  } else {
    return initialState
  }
}

export default weatherReducer