import Hero from './components/Hero'
import NavBar from './components/NavBar'

const App: React.FC = () => {
  return (
    <main className='mt-[3rem] flex items-center justify-center'>
      <NavBar />
      <Hero />
    </main>
  )
}
export default App
