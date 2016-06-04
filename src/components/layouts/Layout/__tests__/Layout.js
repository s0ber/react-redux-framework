import React from 'react'
import renderer from 'utils/test_helpers/renderer'

import Layout from '../Layout'

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
