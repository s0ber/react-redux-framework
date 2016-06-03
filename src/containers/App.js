import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'

import Layout from 'layouts/Layout'
import BackButton from 'layouts/BackButton'
import Link from 'layouts/Link'

import {paths} from 'routes'
import CurrentPage from './CurrentPage'

@connect((state) => {
  return {
    currentPageId: state.currentPageId
  }
})
export default class App extends Component {
  static propTypes = {
    currentPageId: PropTypes.string,
  }

  render() {
    const isLoading = this.props.currentPageId == null
    const isHomePage = this.props.currentPageId == 'home'

    return (
      <Layout>
        <Layout.Header
          minimizeLogo={!isLoading && !isHomePage}
          leftButton={
            !isLoading && !isHomePage &&
              <Link path={paths.HOME_PATH()}>
                <BackButton title='Home' />
              </Link>
          } />
        <Layout.Body>
          <CurrentPage currentPageId={this.props.currentPageId} />
        </Layout.Body>
      </Layout>
    )
  }
}
