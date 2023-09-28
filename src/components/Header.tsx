import { navTitles, languages } from '../lib/consts'
import { motion } from 'framer-motion'
import clsx from 'clsx'
import { useActiveSectionContext, useLanguage } from '../lib/hooks'
import { type SectionName } from '../lib/types'
import LanguageSelect from './LanguageSelect'

const Header: React.FC = () => {
  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext()
  const { language } = useLanguage()
  const clickSectionHandler = (section: SectionName): void => {
    setActiveSection(section)
    setTimeOfLastClick(Date.now())
  }

  return (
    <header className='z-[999] relative'>
      <motion.div className={clsx(`fixed top-0 left-1/2 h-[4.5rem] w-full
        rounded-none border border-white border-opacity-40 bg-white bg-opacity-80
          shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem]
          md:top-6 md:h-[3.25rem] md:w-[36rem] md:rounded-full
          dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75 transition-all`, { 'md:w-[39rem]': language === languages.es })}
        initial={{ y: -100, x: '-50%', opacity: 0 }}
        animate={{ y: 0, x: '-50%', opacity: 1 }}
      ></motion.div>
      <nav className='flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 md:top-[1.7rem] md:h-[initial] md:py-0' >
        <ul className='flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 md:w-[initial] md:flex-nowrap md:gap-5'>
          {
            Object.values(navTitles).map((link) => (
              <motion.li
                key={link.hash}
                className=' relative h-3/4 flex items-center justify-center'
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
              >
                <a
                  href={link.hash}
                  onClick={() => { clickSectionHandler(link.name) }}
                  className={
                    clsx('flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300 whitespace-nowrap',
                      { 'text-gray dark:text-white': activeSection === link.name })}
                >

                  {language === languages.en ? link.en_name : link.name}
                  {activeSection === link.name && (
                    <motion.span
                      className='absolute bg-gray-100 rounded-full inset-0 -z-10 dark:bg-gray-800'
                      layoutId='activeSection'
                      transition={{
                        type: 'spring',
                        stiffness: 380,
                        damping: 30
                      }}
                    >
                    </motion.span>)}
                </a>
              </motion.li>
            ))
          }
          <LanguageSelect />
        </ul>
      </nav>
    </header>
  )
}

export default Header
