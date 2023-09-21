import { navTitles } from '../lib/consts'

const NavBar: React.FC = () => {
  return (
    <nav className='bg-slate-300/10 fixed top-0 w-screen h-[3rem] flex items-center justify-center'>
      <ul className='flex gap-8 whitespace-nowrap'>
        {
          navTitles.map((title, index) => (
            <li key={index} ><a href={title.href}>{title.name}</a></li>
          ))
        }
      </ul>
    </nav>
  )
}

export default NavBar
