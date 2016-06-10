import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'

import Page from 'layouts/Page'
import Button from 'layouts/Button'
import Link from 'layouts/Link'
import Menu from 'layouts/Menu'
import {MENU_ITEMS} from 'constants'

import {ANONYMOUS} from 'constants'
import {paths} from 'routes'
import {logout as logoutUser} from 'state/authorization'

@connect((state) => {
  return {
    currentUser: state.currentUser
  }
}, (dispatch) => {
  return {
    logoutUser: () => {
      dispatch(logoutUser())
    }
  }
})
export default class Home extends Component {
  static propTypes = {
    currentUser: PropTypes.object.isRequired,
    logoutUser: PropTypes.func
  }

  render() {
    const currentUser = this.props.currentUser

    if (currentUser == ANONYMOUS) {
      return (
        <Page>
          <h1>React + Redux = &lt;3</h1>
          <p>
            Please login to start using an app.
          </p>
          <Link path={paths.LOGIN_PATH()}>
            <Button>Log In</Button>
          </Link>
        </Page>
      )
    } else {
      return (
        <Page>
          <h1>Welcome, {currentUser.firstName}&nbsp;{currentUser.lastName}</h1>
          <Menu items={MENU_ITEMS} />
          <Button color='red' onClick={this.props.logoutUser}>Log Out</Button>
        </Page>
      )
    }
  }
}
