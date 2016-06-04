import {paths} from 'routes'

export const ENDPOINT = 'http://api.test.thenewmotion.com'
export const ANONYMOUS = {id: 0, role: 'Anonymous'}
export const BASIC_AUTH_CREDENTIALS = 'dGVzdF9jbGllbnRfaWQ6dGVzdF9jbGllbnRfc2VjcmV0='

export const MENU_ITEMS = [
  {title: 'Home', path: paths.HOME_PATH(), icon: 'home', pageId: 'home'},
  {title: 'Map', path: paths.MAP_PATH(), icon: 'map-marker', pageId: 'map'},
  {title: 'Settings', path: paths.SETTINGS_PATH(), icon: 'gear', pageId: 'settings'}
]
