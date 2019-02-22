import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { userReducer } from './components/reducers/userReducer'
import { weatherReducer } from './components/reducers/weatherReducer'

const store = createStore(
  combineReducers({
    user: userReducer,
    weather: weatherReducer
  }),
  applyMiddleware(thunk)
)


export default store;