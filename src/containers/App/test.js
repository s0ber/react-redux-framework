import React from 'react'
import renderer from '_lib/testHelpers/renderer'

import App from '.'
import Layout from 'layouts/Layout'
import CurrentPage from 'containers/CurrentPage'

describe('App', () => {
  let component
  let render

  before(() => {
    render = renderer(App.WrappedComponent)
  })

  context('current page is specified', () => {
    it('renders default layout when current page is loading or when current page is home', () => {
      for (const page of [null, 'home']) {
        component = render({currentPageId: page})
        expect(component).to.equalJSX(
          <Layout>
            <CurrentPage currentPageId={page} />
          </Layout>
        )
      }
    })
  })
})
