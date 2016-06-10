import './style.sass'
import React, {Component} from 'react'

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
