import { Fragment } from 'react'
import { useTheme, useSectionInView, useLanguage } from '../lib/hooks'
import { navTitles, themes, languages, experiencesData } from '../lib/consts'
import Heading from './Heading'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

const Experience: React.FC = () => {
  const { ref } = useSectionInView(navTitles.EXPERIENCES.name)
  const { theme } = useTheme()
  const { language } = useLanguage()

  return (
    <section
      id='experience'
      ref={ref}
      className='mb-28 scroll-mt-28 sm:mb-40'>
      <Heading>
        {language === languages.en
          ? 'Experiences'
          : 'Experiencia'
        }
      </Heading>
      <VerticalTimeline lineColor=''>
        {
          experiencesData.map((experience, index) => (
            <Fragment key={index}>
              <VerticalTimelineElement
                contentStyle={{
                  boxShadow: theme === themes.Dark ? 'none' : '',
                  background: theme === themes.Light
                    ? 'rgba(243,244,246)'
                    : 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(0,0,0,0/05)',
                  textAlign: 'left',
                  padding: '1.3rem 2rem'
                }}
                contentArrowStyle={{
                  borderRight: theme === themes.Light
                    ? '0.4rem solid #9ca3af'
                    : '0.4rem solid rgba(255,255,255,0.5)'
                }}
                date={experience.date}
                icon={experience.icon}
                iconStyle={{
                  background: theme === themes.Light
                    ? 'white'
                    : 'rgb(3,7,18, 0.8)',
                  fontSize: '1.5rem'
                }}
              >
                <h3 className='font-semibold capitalize'>
                  {language === languages.en
                    ? experience.title
                    : experience.titleEs
                  }
                </h3>
                <p className='font-normal !mt-0'>
                  {experience.location}
                </p>
                <p className='!mt-1 !font-normal text-gray-700 dark:text-white/75'>
                  {language === languages.en
                    ? experience.description
                    : experience.descriptionEs
                  }
                </p>
              </VerticalTimelineElement>
            </Fragment>
          ))
        }
      </VerticalTimeline>

    </section>
  )
}

export default Experience
