import { themes } from '../lib/consts'
import { useTheme } from '../lib/hooks'
import { BsSun, BsMoon } from 'react-icons/bs'

const ThemeButton: React.FC = () => {
  const { theme, toggleTheme } = useTheme()
  return (
    <button
      className='flex items-center justify-center fixed bottom-5 right-5 rounded-full bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950'
      onClick={toggleTheme}
    >
      {theme === themes.Light ? <BsSun /> : <BsMoon />}
    </button>
  )
}

export default ThemeButton
