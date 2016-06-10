import {ANONYMOUS} from 'constants'
import actions from 'actions'
const {LOGOUT_USER, SET_CURRENT_USER} = actions

export default function(state = null, action = {}) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return action.payload
    case LOGOUT_USER:
      return ANONYMOUS
    default:
      return state
  }
}
