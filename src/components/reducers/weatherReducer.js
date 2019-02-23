import {
  GET_WEATHER_ZIP,
  SET_WEATHER_ZIP,
  FETCH_WEATHER_REQUEST,
  FETCH_WEATHER_SUCCESS,
  FETCH_WEATHER_FAILURE
} from '../actions/weatherActions.js'

const initialState = {
  zip: 80120,
  data: {"coord":{"lon":undefined,"lat":undefined},"weather":[{"id":undefined,"main":undefined,"description":undefined,"icon":undefined}],"base":undefined,"main":{"temp":undefined,"pressure":undefined,"humidity":undefined,"temp_min":undefined,"temp_max":undefined},"visibility":undefined,"wind":{"speed":undefined,"deg":undefined},"clouds":{"all":undefined},"dt":undefined,"name":undefined},
  lastReq: 0,
  loading: false,
  error: false
}

const weatherReducer = (state = initialState, action) => {
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
    let time = new Date()
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