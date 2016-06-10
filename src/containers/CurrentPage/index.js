import toComponentName from '_lib/toComponentName'

import React, {Component, PropTypes} from 'react'
import * as Pages from 'containers/pages'
import PageLoader from 'layouts/PageLoader'

export default class CurrentPage extends Component {
  static propTypes = {
    currentPageId: PropTypes.string,
  }

  render() {
    if (this.props.currentPageId) {
      const Page = Pages[toComponentName(this.props.currentPageId)]
      return (<Page />)
    } else {
      return (<PageLoader />)
    }
  }
}
