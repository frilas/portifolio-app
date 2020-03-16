import React, {Suspense} from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import './i18n'

function run() {
  ReactDOM.render(
    <Suspense fallback="loading...">
      <App />
    </Suspense>,
    document.getElementById('root'),
  )
}

run()
