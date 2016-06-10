import keyMirror from 'keymirror'

function api(actionName) {
  return {
    PENDING: `${actionName}.PENDING`,
    SUCCESS: `${actionName}.SUCCESS`,
    FAILURE: `${actionName}.FAILURE`
  }
}

export default Object.assign(
  keyMirror({
    LOGOUT_USER: null,
    SET_CURRENT_USER: null,
    CHANGE_PAGE_ID: null
  }), {
    FETCH_CURRENT_USER: api('FETCH_CURRENT_USER')
  })
