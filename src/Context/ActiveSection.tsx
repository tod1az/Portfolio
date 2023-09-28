import { useState, createContext } from 'react'
import { navTitles } from '../lib/consts'
import type { SectionName, ContextProps, ActiveSectionContextType } from '../lib/types'

export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null)

const ActiveSectionContextProvider: React.FC<ContextProps> = ({ children }) => {
  const [activeSection, setActiveSection] = useState<SectionName>(navTitles.HOME.name)
  const [timeOfLastClick, setTimeOfLastClick] = useState(0)

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  )
}

export default ActiveSectionContextProvider
