import {tinyActions} from 'redux-tiny-router'

import {authorize} from '_lib/request'
import * as accessToken from '_lib/accessToken'
import * as currentUser from 'actions/currentUser'
import {paths} from 'routes'

export default function login(loginData) {
  return (dispatch) => {
    return authorize('/oauth2/access_token', loginData)
      .then((response) => {
        accessToken.set(response)

        dispatch(currentUser.fetch()).then((user) => {
          dispatch(currentUser.set(user))
          dispatch(tinyActions.navigateTo(paths.HOME_PATH()))
        })
      }).catch((error) => {
        if (error.status === 400) {
          throw {username: 'no credentials provided'}
        } else if (error.status === 401) {
          throw {username: 'wrong credentials provided'}
        }
      })
  }
}
