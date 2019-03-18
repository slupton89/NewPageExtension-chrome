import { API_URI } from '../../config'

export const GET_BACKGROUNDS = 'GET_BACKGROUNDS'
export const GetBackgrounds = (imgSet) => ({
  imgSet,
  type: GET_BACKGROUNDS
})


export const getBGs = (imgSetId) => (dispatch) => {
  return fetch(`${API_URI}/bg`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    id: imgSetId,
  })
  .then((res) => {
    if(!res.ok) {
      throw new Error('HTTP error, status = ' + res.status)
    }
    console.log('response: ', res)
    return res
  })
  .then((res) => dispatch(GetBackgrounds(res)))
  .catch(err => {
    console.error('SERVER ERROR: ', err)
  })
}