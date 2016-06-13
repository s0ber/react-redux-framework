export function requestAction(actionName) {
  return {
    PENDING: `${actionName}.PENDING`,
    SUCCESS: `${actionName}.SUCCESS`,
    FAILURE: `${actionName}.FAILURE`
  }
}
