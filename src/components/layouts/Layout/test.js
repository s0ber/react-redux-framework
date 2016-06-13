import React from 'react'
import renderer from '_lib/testHelpers/renderer'

import Layout from '.'

describe('Layout', () => {
  let component
  const render = renderer(Layout)

  it('renders app layout', () => {
    component = render({children: <span />})
    expect(component).to.equalJSX(
      <div className='Layout'>
        <span />
      </div>
    )
  })
})
