import React from 'react'
import {Simulate} from 'react-addons-test-utils'
import renderer from '_lib/testHelpers/renderer'
import domRenderer from '_lib/testHelpers/domRenderer'

import Form from '.'

describe('Form', () => {
  let render

  describe('rendering', () => {
    beforeEach(() => {
      render = renderer(Form)
    })

    it('renders a form', () => {
      const handleSubmit = sinon.spy()
      const component = render({onSubmit: handleSubmit})

      expect(component).to.includeJSX(
        <form className='Form' onSubmit={handleSubmit}></form>
      )
    })
  })

  describe('events handling', () => {
    beforeEach(() => {
      render = domRenderer(Form)
    })

    it('handles clicks with props.onSubmit', () => {
      const handleSubmit = sinon.spy()
      const component = render({onSubmit: handleSubmit})

      Simulate.submit(component.node)
      expect(handleSubmit).to.be.calledOnce
    })
  })
})
