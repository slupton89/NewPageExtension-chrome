import {
  GET_USER_NAME,
  SET_USER_NAME
} from '../actions/userActions.js'

const initialState = {
  userName: 'Hank Hill',
  loading: false,
  error: false
}

const userReducer = (state = initialState, action) => {
  if(action.type === GET_USER_NAME) {
    return Object.assign({}, state, {
      loading: true
    })
  } else if(action.type === SET_USER_NAME) {
    return Object.assign({}, state, {
      loading: false,
      error: null,
    })
  } else {
    return initialState
  }
}

export default userReducer