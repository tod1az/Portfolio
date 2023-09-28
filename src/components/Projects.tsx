'use client'

import Heading from './Heading'
import { projectsData, languages, navTitles } from '../lib/consts'
import React from 'react'
import ProjectCard from './ProjectCard'

import { useLanguage, useSectionInView } from '../lib/hooks'

const Projects: React.FC = () => {
  const { ref } = useSectionInView(navTitles.PROJECTS.name)
  const { language } = useLanguage()
  return (
    <section
      id="projects"
      className='scroll-mt-28 mb-28'
      ref={ref}
    >
      <Heading>
        {
          language === languages.en
            ? 'projects'
            : 'proyectos'
        }
      </Heading>
      <div>
        {
          projectsData.map((proyect, index) => (
            <React.Fragment key={index}>
              <ProjectCard {...proyect} />
            </React.Fragment>
          ))
        }
      </div>
    </section>
  )
}

export default Projects
