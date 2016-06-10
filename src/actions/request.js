import request from '_lib/request'
import logout from 'actions/authorization/logout'

const identity = (x) => x

export default function(path, action) {
  const {type: {PENDING, SUCCESS, FAILURE}, onSuccess = identity, onFailure = identity} = action

  return (dispatch) => {
    dispatch({type: PENDING})

    return request(path, action).then(
      (response) => {
        dispatch({type: SUCCESS, response})
        return onSuccess(response, dispatch)
      },
      (error) => {
        if (error.status === 401) {
          dispatch(logout())
        }

        dispatch({type: FAILURE, error})
        return onFailure(error, dispatch)
      }
    )
  }
}
