import request from 'actions/request'
import actions from 'actions'
import {ANONYMOUS} from 'constants'

const {FETCH_CURRENT_USER, SET_CURRENT_USER} = actions

export function fetch() {
  return request('/v1/me', {
    type: FETCH_CURRENT_USER,
    method: 'GET',
    onFailure: (error) => {
      if (error.status === 401) {
        return ANONYMOUS
      } else {
        throw error
      }
    }
  })
}

export function set(currentUser) {
  return {
    type: SET_CURRENT_USER,
    payload: currentUser
  }
}
