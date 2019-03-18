import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import userReducer from './components/reducers/userReducer'
import weatherReducer from './components/reducers/weatherReducer'
import authReducer from './components/reducers/authReducer'
import backgroundReducer from './components/reducers/backgroundsReducer'

const store = createStore(
  combineReducers({
    user: userReducer,
    weather: weatherReducer,
    auth: authReducer,
    bgs: backgroundReducer
  }),
  applyMiddleware(thunk)
)


export default store;