import React from 'react'
import {Simulate} from 'react-addons-test-utils'
import renderer from '_lib/testHelpers/renderer'
import domRenderer from '_lib/testHelpers/domRenderer'
import configureStore from 'redux-mock-store'

import Link from '.'
import {TestableLink} from '.'
import {tinyActions} from 'redux-tiny-router'

describe('Link', () => {
  let component
  let render

  describe('rendering', () => {
    before(() => {
      render = renderer(Link)
    })

    it('renders a link to provided path', () => {
      component = render({path: '/map', children: 'Link text'})
      expect(component).to.equalJSX(
        <a className='Link' href='/map' onClick={sinon.spy()}>
          Link text
        </a>
      )
    })
  })

  describe('events handling', () => {
    before(() => {
      render = domRenderer(TestableLink)
    })

    it('triggers navigation action on a context store', () => {
      const expectedAction = tinyActions.navigateTo('/map', null)
      const store = configureStore()({}, expectedAction)
      const testableLink = render({store, path: '/map', children: 'Link text'})

      sinon.spy(store, 'dispatch')
      Simulate.click(testableLink.node)
      expect(store.dispatch).to.be.calledOnce
    })
  })
})
