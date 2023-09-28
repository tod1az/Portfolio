import type { ContextProps, Language, LanguageContextType } from '../lib/types'
import { languages } from '../lib/consts'
import { useState, createContext } from 'react'

export const LanguageContext = createContext<LanguageContextType | null>(null)

export const LanguageProvider: React.FC<ContextProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(languages.es)
  return (
    <LanguageContext.Provider value={{
      language,
      setLanguage
    }}>
      {children}
    </LanguageContext.Provider>
  )
}
