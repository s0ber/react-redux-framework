import './Layout.sass'
import React, {Component, PropTypes} from 'react'
import classNames from 'classnames'

export default class Layout extends Component {
  render() {
    return (
      <div className='Layout'>
        {this.props.children}
      </div>
    )
  }
}
