import { type projectsData } from './consts'

export type Project = (typeof projectsData)[number]
export type HeadingProps = {
  children: string
}
