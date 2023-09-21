import foto from '../assets/foto.png'
import Links from './Links'

const Hero: React.FC = () => {
  return (
    <main
      id='#home'
      className='md:mt-[8rem] mt-14 flex flex-col items-center justify-center'>
      <div className='xl:flex xl:flex-row-reverse  flex flex-col items-center gap-5 xl:gap-36'>
        <img className='rounded-full  w-[10rem] md:w-[20rem]' src={foto} />
        <p className='flex flex-col'>
          <span className='md:text-3xl text-xl whitespace-nowrap '>¡Hola!</span>
          <span className='md:text-3xl text-xl whitespace-nowrap'>Mi nombre es Tomás Díaz y soy</span>
          <h1
            className='md:text-6xl text-4xl text-purple-900 font-medium'
          >Full Stack Developer
          </h1>
        </p>
      </div>
      <Links />
    </main>
  )
}

export default Hero
