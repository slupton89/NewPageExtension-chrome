import {
  GET_BACKGROUNDS
} from '../actions/backgroundActions'

const initialState = {
  gallery: {},
  error: false
}

const backgroundsReducer = (state = initialState, action) => {
  if(action.type === GET_BACKGROUNDS) {
    return Object.assign({}, state, {
      gallery: action.gallery,
      error: false
    })
  } else {
    return initialState
  }
}

export default backgroundsReducer