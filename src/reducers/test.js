import * as rootReducers from '.'

import currentPageId from 'reducers/currentPageId'
import currentUser from 'reducers/currentUser'

describe('root reducers', () => {
  it('returns an object with top level reducers as values, and their names as keys', () => {
    expect(rootReducers).to.eql({
      currentPageId,
      currentUser
    })
  })
})