import {
  GET_WEATHER_ZIP,
  SET_WEATHER_ZIP,
  FETCH_WEATHER_REQUEST,
  FETCH_WEATHER_SUCCESS,
  FETCH_WEATHER_FAILURE
} from '../actions/weatherActions.js'

const initialState = {
  zip: 80120,
  data: [],
  loading: false,
  error: false
}

export const weatherReducer = (state = initialState, action) => {
  if(action.type === GET_WEATHER_ZIP) {
    return Object.assign({}, state, {
      loading: true
    })
  } else if(action.type === SET_WEATHER_ZIP) {
    return Object.assign({}, state, {
      zip: action.zip,
      loading: false,
      error: null
    })
  } else if(action.type === FETCH_WEATHER_REQUEST) {
    return Object.assign({}, state, {
      loading: true
    })
  } else if(action.type === FETCH_WEATHER_SUCCESS) {
    console.log('data: ', action.data)
    return Object.assign({}, state, {
      data: action.data,
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