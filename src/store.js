import { createStore, combineReducers } from 'redux'
import { userReducer } from './reducers'

const store = createStore(
  combineReducers({
    user: userReducer
  })
)


export default store;