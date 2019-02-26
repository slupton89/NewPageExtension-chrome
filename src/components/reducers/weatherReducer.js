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
  data: {
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
  },
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