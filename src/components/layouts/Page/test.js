import React from 'react'
import renderer from '_lib/testHelpers/renderer'
import Page from '.'

describe('Page', () => {
  let component
  const render = renderer(Page)

  it('renders page layout', () => {
    component = render({pageId: 'home', children: <span>Page Content</span>})
    expect(component).to.equalJSX(
      <div className='Page'>
        <div className='Page-inner'>
          <span>Page Content</span>
        </div>
      </div>
    )
  })
})
