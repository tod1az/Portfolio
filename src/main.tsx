import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Header from './Components/Header.tsx'
import ActiveSectionContextProvider from './Context/ActiveSection.tsx'
import { LanguageProvider } from './Context/Language.tsx'
import { ThemeProvider } from './Context/Theme.tsx'
import ThemeButton from './Components/Theme.tsx'

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
