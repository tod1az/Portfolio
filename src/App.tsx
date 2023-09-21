import SectionDivider from './components/SectionDivider'
import Projects from './components/Projects'
import NavBar from './components/NavBar'
import Skills from './components/Skills'
import Hero from './components/Hero'

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
