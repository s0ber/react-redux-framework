import * as accessToken from '_lib/accessToken'

export const LOGOUT_USER = 'LOGOUT_USER'

export default function logout() {
  return (dispatch) => {
    accessToken.remove()
    dispatch({type: LOGOUT_USER})
    return Promise.resolve()
  }
}
