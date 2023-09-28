import Projects from './Components/Projects'
import Skills from './Components/Skills'
import Contact from './Components/Contact'

import Intro from './Components/Intro'
import Experience from './Components/Experience'

const App: React.FC = () => {
  return (
    <main className='mt-[3rem]  flex flex-col  items-center justify-center'>
      <Intro />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </main>
  )
}
export default App
