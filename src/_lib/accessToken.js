export function get() {
  let token = localStorage.getItem('toptal_access_token')

  if (!token) {
    return null
  }

  token = JSON.parse(token)

  if (token.expireTime > Date.now()) {
    return token
  } else {
    return null
  }
}

export function remove() {
  localStorage.removeItem('toptal_access_token')
}

export function set(token) {
  const expireDate = new Date()
  expireDate.setSeconds(expireDate.getSeconds() + token.expires_in)

  token.expireTime = expireDate.getTime()
  token = JSON.stringify(token)
  localStorage.setItem('toptal_access_token', token)
}
