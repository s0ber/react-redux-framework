import * as accessToken from '_lib/accessToken'
import actions from 'actions'
const {LOGOUT_USER} = actions

export default function logout() {
  return (dispatch) => {
    accessToken.remove()
    dispatch({type: LOGOUT_USER})
    return Promise.resolve()
  }
}
