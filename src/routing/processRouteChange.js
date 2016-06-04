import {routes, paths} from 'routes'
import {tinyActions} from 'redux-tiny-router'

import loadCurrentUser from './loadCurrentUser'
import fetchDataForRoute from './fetchDataForRoute'
import processCurrentRoute from './processCurrentRoute'

export function processRouteChange(next, action, getState, dispatch) {
  const {router} = action
  const currentRoute = router.src

  // Don't do anything, if trying to load current route
  if (router.path == getState().router.path) {
    return
  }

  loadCurrentUser(getState(), dispatch).then(() => {
    const {currentUser} = getState()
    const isLoggedIn = currentUser && currentUser.role !== 'Anonymous'

    if (isLoggedIn) {
      if (currentRoute == routes.LOGIN) {
        // redirect to home page, if trying to open login page, when already logged in
        return dispatch(tinyActions.navigateTo(paths.HOME_PATH()))
      }
    // allow only home and login page for anonymous users
    } else if (currentRoute !== routes.HOME && currentRoute !== routes.LOGIN) {
      return dispatch(tinyActions.navigateTo(paths.LOGIN_PATH()))
    }

    // Fetch data for current route.
    // This should return cached data, when handling a popped state,
    // so we would be able to immediately reproduce previous scroll position.
    // But when rendering a new route, we should always fetch fresh data.
    fetchDataForRoute(router, dispatch).then((data) => {
      // When pushing new state, this will remember current scroll position,
      // and then scroll to the top.
      // We should call this before rendering the page,
      // because in either way we won't be able to reproduce previous scroll, when
      // navigating back or forward.
      if (action.option !== 'popEvent') {
        next(action)
      }

      processCurrentRoute(router, data, dispatch, getState())

      // When we are handling popped states, we at first should render the content for current page
      // and then calling "next(action)" will scroll page to the saved scroll position.
      if (action.option == 'popEvent') {
        next(action)
      }
    })
  })
}
