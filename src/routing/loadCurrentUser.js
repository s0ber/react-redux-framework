import * as currentUser from 'actions/currentUser'

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

