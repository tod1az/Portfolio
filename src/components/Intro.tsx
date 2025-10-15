import foto from '../assets/foto.jpg'
import { motion } from 'framer-motion'
import { BsArrowRight, BsGithub, BsLinkedin } from 'react-icons/bs'
import { HiDownload } from 'react-icons/hi'
import { navTitles, languages, introText } from '../lib/consts'
import { useSectionInView, useActiveSectionContext, useLanguage } from '../lib/hooks'

const Intro: React.FC = () => {
  const { ref } = useSectionInView(navTitles.HOME.name, 0.5)
  const { setTimeOfLastClick, setActiveSection } = useActiveSectionContext()
  const { language } = useLanguage()

  const contactButtonHandler = (): void => {
    setActiveSection(navTitles.HOME.name)
    setTimeOfLastClick(Date.now())
  }

  return (
    <section
      ref={ref}
      id='home'
      className="scroll-mt-[100rem] mb-28 max-w-[50rem] sm:mt-14 text-center sm:mb-48"
    >
      <div className="flex items-center justify-center" >
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'tween',
              duration: 0.2
            }}
          >
            <img
              src={foto}
              alt='Profile Picture'
              className='rounded-full h-24 w-24 border-[0.35rem] border-white shadow-xl dark:border-gray-950'
            />
          </motion.div>
          <motion.span
            className='text-3xl absolute bottom-0 right-0'
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 125,
              delay: 0.2,
              duration: 0.7
            }}
          >
            👋
          </motion.span>
        </div>
      </div>
      <motion.h1 className='mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {language === languages.en
          ? introText.en
          : introText.es
        }
      </motion.h1>
      <motion.div className='flex flex-col sm:flex-row items-center justify-center text-lg font-medium gap-2'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <a
          href='#contact'
          className='group flex items-center gap-2 bg-gray-900 text-white px-7 py-3 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition dark:bg-gray-50 dark:text-gray-950'
          onClick={contactButtonHandler}
        >
          {language === languages.en
            ? 'Contact me here'
            : 'Contáctame aquí'
          } <BsArrowRight
            className='opacity-70 group-hover:translate-x-1 transition' />
        </a>

        <a className='group bg-white  flex items-center gap-2 px-7 py-3 rounded-full outline-none focus:scale-110 hover:scale-110  active:scale-105 transition hover:cursor-pointer borderBlack dark:bg-white/10'
          href={"https://t6lun8rso7.ufs.sh/f/c9j148Rt2n3CICJ3bjaOz1ZwyYcL452CpQEJkRUxImXsaP9l"}
          target='_blank'
          download={true}
        >
          {
            language === languages.en
              ? 'Download CV'
              : 'Descargar CV'
          }
          <HiDownload
            className='group-hover:translate-y-1 opacity-60 transition' />
        </a>

        <a className='bg-white  flex items-center gap-2 text-gray-700 p-4 rounded-full outline-none focus:scale-[1.2] hover:scale-[1.2] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60'
          href="https://www.linkedin.com/in/tod1az/"
          target="_blank" rel="noreferrer"
        >
          <BsLinkedin />
        </a>

        <a className='bg-white  flex items-center gap-2 text-gray-700 p-4 rounded-full outline-none focus:scale-[1.2] hover:scale-[1.2] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60'
          href="https://github.com/tod1az"
          target="_blank" rel="noreferrer"
        >
          <BsGithub />
        </a>
      </motion.div>
    </section>
  )
}

export default Intro
