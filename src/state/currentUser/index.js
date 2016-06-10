import request from 'state/request'
import {ANONYMOUS} from 'constants'
import {requestAction} from '_lib/actionNames'

// Action types

import {LOGOUT_USER} from 'state/authorization/logout'
const FETCH_CURRENT_USER = requestAction('FETCH_CURRENT_USER')
const SET_CURRENT_USER = 'SET_CURRENT_USER'

// Actions

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

// Reducer

export default function reducer(state = null, action = {}) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return action.payload
    case LOGOUT_USER:
      return ANONYMOUS
    default:
      return state
  }
}
