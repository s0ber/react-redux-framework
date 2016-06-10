import React, {Component, PropTypes} from 'react'
import './style.sass'

export default class InlineError extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired
  }

  render() {
    return (<span className='InlineError'> — {this.props.text}</span>)
  }
}
