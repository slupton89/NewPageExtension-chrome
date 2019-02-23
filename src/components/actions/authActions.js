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
  console.log("getting user")
  dispatch(GetUserToken())
}

export const setToken = (token) => (dispatch) => {
  console.log('Setting token', token)
  dispatch(setUserToken(token))
}