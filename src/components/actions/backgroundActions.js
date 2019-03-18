import { API_URI } from '../../config'

export const GET_BACKGROUNDS = 'GET_BACKGROUNDS'
export const GetBackgrounds = (gallery) => ({
  gallery,
  type: GET_BACKGROUNDS
})


export const getBGs = (imgSetId) => (dispatch) => {
  return fetch(`${API_URI}/bg/?id=${imgSetId}`, {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    }
  })
  .then((res) => {
    if(!res.ok) {
      throw new Error('HTTP error, status = ' + res.status)
    }
    return res.json()
  })
  .then((res) => {
    // TODO add function to create an objects of img URLs
    // and credits from res response.
    dispatch(GetBackgrounds(res))
  })
  .catch(err => {
    console.error('SERVER ERROR: ', err)
  })
}