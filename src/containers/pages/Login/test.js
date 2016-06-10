import React from 'react'
import domRenderer from '_lib/testHelpers/domRenderer'

import Login from '.'
import Page from 'layouts/Page'
import Form from 'forms/Form'

describe('Login', () => {
  let component
  let render
  const TextBox = (_) => { return <div></div> }
  const Button = (_) => { return <div></div> }

  before(() => {
    render = domRenderer(Login.WrappedComponent)
    Login.__Rewire__('TextBox', TextBox)
    Login.__Rewire__('Button', Button)
  })

  after(() => {
    Login.__ResetDependency__('TextBox')
    Login.__ResetDependency__('Button')
  })

  it('renders a login form with submit handler', () => {
    const submit = sinon.spy
    component = render({fields: {username: {}, password: {}}, submitting: false, submit})

    expect(component.render()).to.eql(
      <Page>
        <Form onSubmit={submit}>
          <Form.Fields>
            <TextBox autoFocus label='Email' />
            <TextBox password label='Password' />
          </Form.Fields>
          <Form.Actions centered>
            <Button submit isLoading={false}>Log In</Button>
          </Form.Actions>
        </Form>
      </Page>
    )
  })
})
