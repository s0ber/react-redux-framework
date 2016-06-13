import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'

import Layout from 'layouts/Layout'
import CurrentPage from 'containers/CurrentPage'

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
