import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Header from './components/Header.tsx'
import ActiveSectionContextProvider from './Context/ActiveSection.tsx'
import ThemeButton from './components/Theme.tsx'
import { LanguageProvider } from './Context/Language.tsx'
import { ThemeProvider } from './Context/Theme.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LanguageProvider>
      <ThemeProvider>
        <ActiveSectionContextProvider>
          <Header />
          <App />
          <ThemeButton />
        </ActiveSectionContextProvider>
      </ThemeProvider>
    </LanguageProvider>
  </React.StrictMode>
)
