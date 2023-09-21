import Heading from './Heading'
import { projectsData } from '../lib/consts'
import Project from './ProjectCard'
import { Fragment } from 'react'

const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      className='scroll-mt-28 mb-28 '
    >
      <Heading>proyectos</Heading>
      <div>
        {
          projectsData.map((proyect, index) => (
            <Fragment key={index}>
              <Project {...proyect} />
            </Fragment>
          ))
        }
      </div>
    </section>
  )
}

export default Projects
