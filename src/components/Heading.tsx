import { type HeadingProps } from '../lib/types'

const Heading: React.FC<HeadingProps> = ({ children }) => {
  return (
    <h2 className="text-center capitalize p-14 md:text-6xl text-4xl">{children}</h2>
  )
}

export default Heading
