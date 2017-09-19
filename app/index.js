import React from 'react'
import { render } from 'react-dom'
const ReactRouter = require('react-router')
import { useStrict } from 'mobx'
import { Provider } from 'mobx-react'
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router'
import { enableLogging } from 'mobx-logger'

import routes from './routes'

import './app.global.css'

enableLogging({
  action: true,
  reaction: false,
  transaction: true,
  compute: true,
})
useStrict(true)

console.log('🍕', ReactRouter)

const routingStore = new RouterStore()
const history = syncHistoryWithStore(ReactRouter.hashHistory, routingStore)

render(
  <h1>FUCK YOU</h1>,
  document.getElementById('root'),
)
