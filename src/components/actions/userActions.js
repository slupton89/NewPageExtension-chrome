
export const GET_USER_NAME = 'GET_USER_NAME'
export const GetUserName = () => ({
  type: GET_USER_NAME
})

export const SET_USER_NAME = 'SET_USER_NAME'
export const setUserName = () => ({
  type: SET_USER_NAME
})

export const getUser = () => (dispatch) => {
  console.log("getting user")
  dispatch(GetUserName())
}