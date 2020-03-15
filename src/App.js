import React from 'react'
import {useTranslation, Trans} from 'react-i18next'
import logo from './logo.svg'
import './App.css'

function App() {
  const {t} = useTranslation(['common'])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <Trans>{t('welcome')}</Trans>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('link')}
        </a>
      </header>
    </div>
  )
}

export default App
