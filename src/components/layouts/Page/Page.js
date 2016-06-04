import './Page.sass'
import React, {Component, PropTypes} from 'react'
import classNames from 'classnames'

export default class Page extends Component {
  static propTypes = {}

  render() {
    return (
      <div className='Page'>
        <div className='Page-inner'>
          {this.props.children}
        </div>
      </div>
    )
  }
}
