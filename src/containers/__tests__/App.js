import React from 'react'
import {Simulate} from 'react-addons-test-utils'
import renderer from 'utils/test_helpers/renderer'
import domRenderer from 'utils/test_helpers/domRenderer'

import App from '../App'
import Link from 'layouts/Link'
import Layout from 'layouts/Layout'
import BackButton from 'layouts/BackButton'
import CurrentPage from 'containers/CurrentPage'
import {paths} from 'routes'

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
            <Layout.Header
              minimizeLogo={false}
              leftButton={false} />
            <Layout.Body>
              <CurrentPage currentPageId={page} />
            </Layout.Body>
          </Layout>
        )
      }
    })
  })

  context('current page is not home', () => {
    it('renders back button and minimizes logo', () => {
      component = render({currentPageId: 'login'})
      expect(component).to.equalJSX(
        <Layout>
          <Layout.Header
            minimizeLogo={true}
            leftButton={
              <Link path={paths.HOME_PATH()}><BackButton title='Home' /></Link>
            } />
          <Layout.Body>
            <CurrentPage currentPageId='login' />
          </Layout.Body>
        </Layout>
      )
    })
  })
})
