import Heading from './Heading'
import { skillsData, navTitles } from '../lib/consts'
import { useSectionInView } from '../lib/hooks'

import { motion } from 'framer-motion'

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index
    }
  })

}

const Skills: React.FC = () => {
  const { ref } = useSectionInView(navTitles.SKILLS.name)

  return (
    <section
      id='skills'
      ref={ref}
      className='mt-28 mb-28 sm:mb-[29rem] max-w-[53rem] scroll-mt-48 text-center '
    >
      <Heading>skills</Heading>
      <ul className='flex flex-wrap justify-center gap-2 text-lg text-gray-800'
      >
        {
          skillsData.map((skill, index) => (
            <motion.li
              key={index}
              className='bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80'
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true
              }}
              custom={index}
            >
              {skill}
            </motion.li>
          ))
        }
      </ul>
    </section>
  )
}

export default Skills
