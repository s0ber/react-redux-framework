import request from 'superagent'
import {ENDPOINT, BASIC_AUTH_CREDENTIALS} from 'constants'
import * as accessToken from './accessToken'

export function authorize(path, data) {
  return new Promise((resolve, reject) => {
    const dataWithGrantType = Object.assign({}, data, {grant_type: 'password'})

    request
      .post(ENDPOINT + path)
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .set('Authorization', `Basic ${BASIC_AUTH_CREDENTIALS}`)
      .send(dataWithGrantType)
      .end((err, res) => {
        if (err) {
          reject(err)
        } else {
          resolve(res.body)
        }
      })
  })
}

export default function(path, options = {}) {
  const {method = 'GET', data = {}} = options

  return new Promise((resolve, reject) => {
    const token = accessToken.get()

    if (!token) {
      reject({status: 401})
      return
    }

    let req = request(method, ENDPOINT + path)
      .set('Authorization', `Bearer ${token.access_token}`)

    if (method === 'GET') {
      req = req.query(data)
    } else {
      req = req.send(data)
    }

    req.end((error, response) => {
      if (error) {
        reject(error)
      } else {
        resolve(response.body)
      }
    })
  })
}

