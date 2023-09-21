import { type Project } from '../lib/types'

export type ProjectCardProps = Project

const ProjectCard: React.FC<Project> = ({ title, descriptionEs, tags, imageUrl, repo }) => {
  return (
    <div
      className='group mb-3 sm:mb-8'
    >

      <section
        className='bg-gray-100 max-w-[42rem] border rounded-lg border-black/5 overflow-hidden sm:pr-8 relative sm:h-[20rem] mb-3 sm:mb-8 last:mb-0 hover:bg-gray-200 transition sm:group-even:pl-8 dark:bg-white/10 dark:hover:bg-white/20 dark:text-white'
      >
        <div
          className='pt-4 pb-7 px-5 h-full sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col sm:group-even:ml-[18rem]'>
          <h3 className="text-2xl font-semibold">
            {title}
          </h3>
          <p className='mt-2 leading-relaxed text-gray-700 dark:text-white/70'>
            {descriptionEs}
          </p>
          <ul
            className='flex flex-wrap mt-4 gap-2 sm:mt-auto'
          >
            {
              tags.map((tag, index) => (
                <li
                  className='bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full  dark:text-white/70'
                  key={index}
                >
                  {tag}
                </li>
              ))
            }
          </ul>
        </div>
        <a href={repo} target='_blank' rel="noreferrer">
          <img
            src={imageUrl}
            alt='Project Image'
            className='absolute top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl hidden sm:block group-even:-right-[initial] group-even:-left-40 group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2 group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-hover:scale-[1.04] transition'
          />
        </a>
      </section>
    </div>
  )
}

export default ProjectCard
