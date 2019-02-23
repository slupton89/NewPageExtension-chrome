import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import userReducer from './components/reducers/userReducer'
import weatherReducer from './components/reducers/weatherReducer'
import authReducer from './components/reducers/authReducer'

const store = createStore(
  combineReducers({
    user: userReducer,
    weather: weatherReducer,
    auth: authReducer
  }),
  applyMiddleware(thunk)
)


export default store;