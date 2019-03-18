export const GET_USER_TOKEN = 'GET_USER_TOKEN'
export const GetUserToken = () => ({
  type: GET_USER_TOKEN
})

export const SET_USER_TOKEN = 'SET_USER_TOKEN'
export const setUserToken = (token) => ({
  token,
  type: SET_USER_TOKEN
})

export const getUser = () => (dispatch) => {
  dispatch(GetUserToken())
}

export const setToken = (token) => (dispatch) => {
  dispatch(setUserToken(token))
}