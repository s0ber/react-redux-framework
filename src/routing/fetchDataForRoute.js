import {routes} from 'routes'

export default function(router, dispatch, action) {
  return new Promise((resolve, _reject) => {
    let request
    let data

    switch (router.src) {
      case routes.HOME:
        data = {pageId: 'home'}
        break
      case routes.LOGIN:
        data = {pageId: 'login'}
        break
      case routes.MAP:
        data = {pageId: 'map'}
        break
      case routes.SETTINGS:
        data = {pageId: 'settings'}
        break
      default:
        data = {pageId: null}
    }

    if (request) {
      request.then((data) => { resolve(data) })
    } else {
      // simulate real request for loading new states
      if (action.option !== 'popEvent') {
        setTimeout(() => {
          resolve(data)
        }, 500)
      // simulate loading cached data for popped states
      } else {
        resolve(data)
      }
    }
  })
}
