import * as currentUser from 'state/currentUser'

export default function(state, dispatch) {
  return new Promise((resolve, _reject) => {
    if (state.currentUser) {
      resolve()
    } else {
      dispatch(currentUser.fetch()).then((user) => {
        dispatch(currentUser.set(user))
        resolve()
      })
    }
  })
}

