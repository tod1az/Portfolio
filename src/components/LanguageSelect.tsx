import type { Language } from '../lib/types'
import { useLanguage } from '../lib/hooks'
import { languages } from '../lib/consts'
import { motion } from 'framer-motion'

const LanguageSelect: React.FC = () => {
  const { language, setLanguage } = useLanguage()

  const changeHandler = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    setLanguage(event.target.value as Language)
  }

  return (
    <motion.div className='group top-[4.6rem]  left-2'
      initial={{ y: -100, x: '-50%', opacity: 0 }}
      animate={{ y: 0, x: 0, opacity: 1 }}
    >
      <>
        <select
          onChange={changeHandler}
          className='rounded-lg px-2  py-1 outline-none bg-white/0 group-hover:cursor-pointer group-hover:text-gray-950 dark:hover:text-white'
          defaultValue={language}
        >
          {
            Object.entries(languages).map(([key, value]) => (
              <option
                key={key}
                value={value}
                className='text-[0.9rem] font-medium text-gray-500 hover:bg-gray-800 hover:text-gray-200'
              >
                {value}
              </option>
            ))
          }
        </select>
      </>
    </motion.div>
  )
}

export default LanguageSelect
