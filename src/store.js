import { createStore, combineReducers } from 'redux'
import { userReducer, weatherReducer } from './components/reducers/'

const store = createStore(
  combineReducers({
    user: userReducer
  })
)


export default store;