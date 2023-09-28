import { type projectsData, type navTitles } from './consts'

export type Project = (typeof projectsData)[number]
export type HeadingProps = {
  children: string
}
export type ContactEmailFormProps = {
  message: string
  sender: string
}

export type Language = (typeof languages)[keyof typeof aboutMe]

export type Theme = (typeof themes)[keyof typeof themes]

export type ProjectProps = (typeof projectsData)[number]

export type SectionName = (typeof navTitles)[number]['name'] | (typeof navTitles)[number]['en_name']

export type ContextProps = {
  children: React.ReactNode
}

export type ActiveSectionContextType = {
  activeSection: SectionName
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>
  timeOfLastClick: number
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>
}

export type LanguageContextType = {
  language: Language
  setLanguage: React.Dispatch<React.SetStateAction<Language>>
}

export type ThemeContextType = {
  theme: Theme
  toggleTheme: () => void
}
