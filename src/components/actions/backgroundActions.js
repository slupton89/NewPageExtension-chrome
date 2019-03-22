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
    const bgs = res.map(index => `https://farm${index.farm}.staticflickr.com/${index.server}/${index.id}_${index.secret}.jpg`)
    dispatch(GetBackgrounds(bgs))
  })
  .catch(err => {
    console.error('SERVER ERROR: ', err)
  })
}

