import React from 'react'
import renderer from '_lib/testHelpers/renderer'

import Menu from '.'
import Link from 'layouts/Link'
import Icon from 'icons/Icon'

describe('Menu', () => {
  let component
  const render = renderer(Menu.WrappedComponent)

  it('renders menu based on provided menu items array (without current page menu item)', () => {
    const menuItems = [
      {title: 'Home', path: '/', icon: 'home', pageId: 'home'},
      {title: 'Map', path: '/map', icon: 'map-marker', pageId: 'map'},
      {title: 'Settings', path: '/settings', icon: 'gear', pageId: 'settings'}
    ]

    component = render({items: menuItems, currentPageId: 'home'})
    expect(component).to.equalJSX(
      <div className='Menu'>
        <Link className='Menu-item textShadow' key='0' path='/map'>
          <span><Icon className='Menu-itemIcon' fa='map-marker' /> <span>Map</span></span>
          <Icon fa='chevron-right' />
        </Link>
        <Link className='Menu-item textShadow' key='1' path='/settings'>
          <span><Icon className='Menu-itemIcon' fa='gear' /> <span>Settings</span></span>
          <Icon fa='chevron-right' />
        </Link>
      </div>
    )
  })
})
