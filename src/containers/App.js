import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'

import Layout from 'layouts/Layout'
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
    return (
      <Layout>
        <CurrentPage currentPageId={this.props.currentPageId} />
      </Layout>
    )
  }
}
