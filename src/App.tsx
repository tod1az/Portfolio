import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Intro from './components/Intro'
import Experience from './components/Experience'

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
