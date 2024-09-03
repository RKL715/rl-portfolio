import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import "./i18n";
import LanguageSwitcher from './components/Buttons/lngSwitcher.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LanguageSwitcher >
    <App />
    </LanguageSwitcher>
  </React.StrictMode>,
)
