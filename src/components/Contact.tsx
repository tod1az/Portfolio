import Heading from './Heading'
import { motion } from 'framer-motion'
import { useLanguage, useSectionInView } from '../lib/hooks'
import { navTitles, languages } from '../lib/consts'
import { FaPaperPlane } from 'react-icons/fa'

const Contact: React.FC = () => {
  const { ref } = useSectionInView(navTitles.CONTACT.name)
  const { language } = useLanguage()

  return (
    <motion.section
      id="contact"
      ref={ref}
      className='scroll-m-24 mb-20 sm:mb-48 w-[min(100%,38rem)]'
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1
      }}
      transition={{
        duration: 1
      }}
      viewport={{
        once: true
      }}
    >
      <Heading>
        {language === languages.en
          ? 'Contact'
          : 'Contáctame'
        }
      </Heading>
      <p className='text-gray-700 -mt-6 dark:text-white/80' >
        {language === languages.en
          ? 'Please contact me directly at: '
          : 'Por favor contactarme directamente en: '
        }

        <a
          href="mailto:t.diaz.soto@gmail.com"
          className="underline"
        >
          t.diaz.soto@gmail.com
        </a>
        {language === languages.en
          ? ' or through this form'
          : ' o a través del siguiente formulario'
        }
      </p>
      <form className='mt-10 flex flex-col dark:text-black'>
        <input
          placeholder={
            language === languages.en
              ? 'Your Email'
              : 'Tu email'
          }
          name="senderEmail"
          className='h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 dark:outline-none transition-all'
          type="email"
          required
          maxLength={500}
        />
        <textarea
          placeholder={
            language === languages.en
              ? 'Your message here'
              : 'Tu mensaje aquí'
          }
          name="message"
          className='h-52 my-3 rounded-lg borderBlack p-4  dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 dark:outline-none transition-all'
          required
          maxLength={500}
        />
        <button type='submit'
          className='place-self-center group h-[3rem] w-[8rem] bg-gray-900
              text-white rounded-full outline-none transition-all
                flex items-center gap-2 justify-center focus:scalet-110 hover:scale-110
                active:scale-105 hover:bg-gray-950 disabled:scale-100 disabled:bg-opacity-65
               dark:bg-white dark:bg-opacity-10'
        >{language === languages.en ? 'Submit' : 'Enviar'}
          <FaPaperPlane
            className='text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1'
          />
        </button>
      </form>
    </motion.section>
  )
}

export default Contact
