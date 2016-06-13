import {utils} from 'redux-tiny-router'
import createPathFn from '_lib/createPathFn'

const routes = {
  HOME: '/',
  LOGIN: '/login',
  MAP: '/map',
  SETTINGS: '/settings'
}

const routesList = Object.keys(routes).map((k) => routes[k])
utils.setRoutes(routesList)

const paths = {}

Object.keys(routes).forEach((key) =>
  paths[key + '_PATH'] = createPathFn(routes[key])
)

export {routes, paths}
