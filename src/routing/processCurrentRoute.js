import {routes} from 'routes'
import changePageId from 'actions/changePageId'

export default function(router, data, dispatch, _state) {
  switch (router.src) {
    case routes.HOME:
      break
    case routes.LOGIN:
      break
    case routes.MAP:
      break
  }

  dispatch(changePageId(data.pageId))
}
