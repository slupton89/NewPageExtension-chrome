import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import userReducer from './components/reducers/userReducer'
import weatherReducer from './components/reducers/weatherReducer'
import backgroundReducer from './components/reducers/backgroundsReducer'

const store = createStore(
  combineReducers({
    user: userReducer,
    weather: weatherReducer,
    bgs: backgroundReducer
  }),
  applyMiddleware(thunk)
)


export default store;