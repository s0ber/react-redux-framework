import React, {Component} from 'react'
import Page from 'layouts/Page'
import Menu from 'layouts/Menu'
import Content from 'layouts/Content'
import {MENU_ITEMS} from 'constants'

export default class extends Component {
  render() {
    return (
      <Page>
        <h1>Settings</h1>
        <Content pageId='settings' />
        <Menu items={MENU_ITEMS} />
        <p>Will be available soon...</p>
      </Page>
    )
  }
}
