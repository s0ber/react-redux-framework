import './style.sass'
import React, {Component} from 'react'
import classNames from 'classnames'

export default class Content extends Component {
  render() {
    return (
      <div className={classNames('Content', this.props.pageId && `is-${this.props.pageId}`)} >
        Page Content
      </div>
    )
  }
}
