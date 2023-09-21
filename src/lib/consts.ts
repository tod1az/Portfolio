import food from '../assets/food.png'
import artify from '../assets/artify.png'

export const navTitles = [
  {
    name: 'Inicio',
    href: '#home'
  },
  {
    name: 'Proyectos',
    href: '#projects'
  },
  {
    name: 'Skills',
    href: '#skills'
  }
] as const

export const skillsData = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Git',
  'Tailwind',
  'Prisma',
  'Redux',
  'Express',
  'PostgreSQL',
  'Framer Motion'
] as const

export const projectsData = [
  {
    title: 'Henry Food ',
    description:
      'Single Page Application (SPA) that showcases various recipes from the Sponacular API and allows users to add their own recipes.',
    descriptionEs:
      'Single Page Application que muestra recetas pertenecientes a la Api Sponacular y permite también al usuario agregar sus propias recetas ',
    tags: ['React', 'Redux', 'Express', 'Sequelize', 'NodeJs'],
    imageUrl: food,
    repo: 'https://github.com/tod1az/PI-Food-main'
  },
  {
    title: 'Artify ',
    description:
      'E-commerce platform for handicrafts articles, that enables users to sell or buy products,includes some features suchas reviews and article rating',
    descriptionEs:
      'Plataforma E-commerce para la compra y venta de artículos artesanales, con funcionalidades como reseñas y puntuación de productos',
    tags: ['React', 'Redux-Toolkit', 'Next.js', 'Tailwind', 'Prisma'],
    imageUrl: artify,
    repo: 'https://github.com/ignaciocenni/artify'
  }
] as const
