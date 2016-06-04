import './Menu.sass'

import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import Link from 'layouts/Link'
import Icon from 'icons/Icon'

@connect((state) => {
  return {
    currentPageId: state.currentPageId
  }
})
export default class Menu extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
      path: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
    })).isRequired
  }

  render() {
    return (
      <div className='Menu'>
        {this.props.items.map((item, i) => {
          if (item.pageId == this.props.currentPageId) {
            return null
          } else {
            return (
              <Link className='Menu-item textShadow' key={i} path={item.path}>
                <span><Icon className='Menu-itemIcon' fa={item.icon} /> <span>{item.title}</span></span>
                <Icon fa='chevron-right' />
              </Link>
            )
          }
        })}
      </div>
    )
  }
}
