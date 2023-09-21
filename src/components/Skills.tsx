import { skillsData } from '../lib/consts'
import Heading from './Heading'

const Skills: React.FC = () => {
  return (
    <section
      id='skills'
      className='mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40'
    >
      <Heading>skills</Heading>
      <ul className='flex flex-wrap justify-center gap-2 text-lg text-gray-800'
      >
        {
          skillsData.map((skill, index) => (
            <li
              key={index}
              className='bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80'
            >
              {skill}
            </li>
          ))
        }
      </ul>
    </section>
  )
}

export default Skills
