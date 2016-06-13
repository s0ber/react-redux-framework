import React from 'react'
import renderer from '_lib/testHelpers/renderer'

import InlineError from '.'

describe('InlineError', () => {
  const render = renderer(InlineError)

  it('renders error message', () => {
    const component = render({text: 'test error message'})

    expect(component).to.equalJSX(
      <span className='InlineError'> — test error message</span>
    )
  })
})
