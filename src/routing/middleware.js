// The main purpose of this middleware — processing of 'ROUTER_NAVIGATION'
// action. We may prevent route change, we may load resources from API, required for
// current route.
//
// In most cases, we fetch required resources from API, then populate store with those resources,
// and then trigger action, which will render this new data.
//
// Also, here we deal with loding information about current user.

import {processRouteChange} from './processRouteChange'

export default function routing({dispatch, getState}) {
  return (next) => {
    return (action) => {
      if (action.type === 'ROUTER_NAVIGATION') {
        processRouteChange(next, action, getState, dispatch)
        return
      }

      return (next(action))
    }
  }
}
