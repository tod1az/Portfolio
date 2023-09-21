import Hero from './components/Hero'
import NavBar from './components/NavBar'
import Projects from './components/Projects'
import SectionDivider from './components/SectionDivider'
import Skills from './components/Skills'

const App: React.FC = () => {
  return (
    <main className='mt-[3rem]  flex flex-col  items-center justify-center'>
      <NavBar />
      <Hero />
      <SectionDivider />
      <Projects />
      <Skills />
    </main>
  )
}
export default App
