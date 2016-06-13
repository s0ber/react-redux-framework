// Action types

const CHANGE_PAGE_ID = 'CHANGE_PAGE_ID'

// Actions

export function changePageId(pageId) {
  return {
    type: CHANGE_PAGE_ID,
    payload: pageId
  }
}

// Reducer

export default function reducer(state = null, action = {}) {
  switch (action.type) {
    case CHANGE_PAGE_ID:
      return action.payload
    default:
      return state
  }
}
