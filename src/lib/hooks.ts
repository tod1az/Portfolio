import { useInView } from 'react-intersection-observer'
import { useEffect, useContext } from 'react'
import { ActiveSectionContext } from '../Context/ActiveSection'
import { LanguageContext } from '../Context/Language'
import type { ActiveSectionContextType, SectionName, LanguageContextType, ThemeContextType } from './types'
import { ThemeContext } from '../Context/Theme'

type ref = {
  ref: (node?: Element | null | undefined) => void
}

export const useSectionInView = (section: SectionName, threshold = 0.75): ref => {
  const { ref, inView } = useInView({
    threshold
  })
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext()
  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(section)
    }
  }, [inView, setActiveSection, timeOfLastClick, section])

  return {
    ref
  }
}

export const useActiveSectionContext = (): ActiveSectionContextType => {
  const context = useContext(ActiveSectionContext)
  if (context !== null) {
    return context
  } else throw new Error('UseActiveSectionContext must be used within an ActiveSectionContext Provider')
}

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext)
  if (context !== null) {
    return context
  } else throw new Error('Out of context')
}

export const useTheme = (): ThemeContextType => {
  const values = useContext(ThemeContext)
  if (values !== null) {
    return values
  } else {
    throw new Error('Must be used within the provider scope')
  }
}
