import React from 'react'
import renderer from '_lib/testHelpers/renderer'

import Icon from '.'

describe('Icon', () => {
  let component
  const render = renderer(Icon)

  it('renders icon with font awesome class when props.fa is provided', () => {
    component = render({fa: 'chevron-right'})
    expect(component).to.equalJSX(<i className='fa fa-chevron-right' />)
  })
})
