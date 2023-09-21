import { BsGithub, BsLinkedin } from 'react-icons/bs'

const Links: React.FC = () => {
  return (
    <main className="mt-[5rem] flex gap-7">
      <a
        className="px-4 border border-white rounded-3xl bg-gray-900 flex items-center justify-center
        hover:scale-110 active:translate-y-1 transition-all"
        download={true}
        href='/CV.pdf'
      >
        Descargar CV
      </a>

      <a
        href='https://github.com/tod1az'
        target='_blank'
        className="p-3 border-4 border-gray-900 rounded-full bg-white text-gray-900 flex items-center justify-center text-3xl
        hover:scale-110 active:translate-y-1 transition-all"
        rel="noreferrer"
      >
        <BsGithub />
      </a>

      <a
        href='https://www.linkedin.com/in/tod1az/'
        target='_blank'
        className="p-3 border-4 border-gray-900 rounded-full bg-white text-gray-900 flex items-center justify-center text-3xl
        hover:scale-110 active:translate-y-1 transition-all"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
    </main>
  )
}

export default Links
