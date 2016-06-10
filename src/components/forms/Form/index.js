import React, {Component, PropTypes} from 'react'
import './style.sass'

export default class Form extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  }

  render() {
    return (
      <form className='Form' onSubmit={this.props.onSubmit}>
        {this.props.children}
      </form>
    )
  }
}

Form.Fields = class extends Component {
  render() {
    return (<div className='Form-fields'>{this.props.children}</div>)
  }
}

Form.Actions = class extends Component {
  render() {
    return (
      <div className='Form-actions'>
        <div className='Form-actionsInner'>
          {this.props.children}
        </div>
      </div>
    )
  }
}
