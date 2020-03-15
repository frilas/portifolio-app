import React, {Suspense} from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {mock} from './mock-enable'
import './i18n'

async function run() {
  await mock()

  ReactDOM.render(
    <Suspense fallback="loading...">
      <App />
    </Suspense>,
    document.getElementById('root')
  )
}

run()
