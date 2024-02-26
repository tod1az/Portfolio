import food from "../assets/food.png";
import artify from "../assets/artify.png";
import gzecuestre from "../assets/gzecuestre.jpg";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import { GiHorseHead } from "react-icons/gi";
import React from "react";

export const languages = {
  es: "Español",
  en: "English",
} as const;

export const navTitles = {
  HOME: {
    name: "Inicio",
    hash: "#home",
    en_name: "Home",
  },
  SKILLS: {
    name: "Skills",
    hash: "#skills",
    en_name: "Skills",
  },
  PROJECTS: {
    name: "Proyectos",
    hash: "#projects",
    en_name: "Projects",
  },
  EXPERIENCES: {
    name: "Experiencia",
    hash: "#experience",
    en_name: "Experience",
  },
  CONTACT: {
    name: "Contáctame",
    hash: "#contact",
    en_name: "Contact",
  },
} as const;

export const introText = {
  en: "Hi! My name is Tomás, Full Stack Web Developer. Let us turn your ideas into digital products that make a difference.",
  es: "¡Hola! Soy Tomás Díaz, Full Stack Web Developer. Convirtamos tus ideas en productos digitales que marcan la diferencia.",
} as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "Redux",
  "Express",
  "PostgreSQL",
  "Framer Motion",
  "SupaBase",
  "Shadcn",
] as const;

export const projectsData = [
  {
    title: "Henry Food ",
    description:
      "Single Page Application (SPA) that showcases various recipes from the Sponacular API and allows users to add their own recipes.",
    descriptionEs:
      "Single Page Application que muestra recetas pertenecientes a la Api Sponacular y permite también al usuario agregar sus propias recetas ",
    tags: ["React", "Redux", "Express", "Sequelize", "NodeJs"],
    imageUrl: food,
    repoUrl: "https://github.com/tod1az/PI-Food-main",
  },
  {
    title: "Artify ",
    description:
      "E-commerce platform for handicrafts articles, that enables users to sell or buy products, includes some features such as reviews and article rating",
    descriptionEs:
      "Plataforma E-commerce para la compra y venta de artículos artesanales, con funcionalidades como reseñas y puntuación de productos",
    tags: ["React", "Redux-Toolkit", "Next.js", "Tailwind", "Prisma"],
    imageUrl: artify,
    repoUrl: "https://github.com/ignaciocenni/artify",
  },
  {
    title: "GZ Ecuestre",
    description:
      "Catalog page for the purchase and sale of equestrian horses, featuring a landing page, a page with the horse catalog, and finally a page with the details of each horse.",
    descriptionEs:
      "Catálogo para la compra y venta de caballos ecuestres, cuenta con una landing page, una página con el catálogo de caballos y finalmente una página con el detalle de cada caballo.",
    tags: ["React", "Next.js", "Tailwind", "Prisma", "SupaBase", "Shadcn"],
    imageUrl: gzecuestre,
    repoUrl: "https://www.gzecuestre.com/",
  },
] as const;

export const experiencesData = [
  {
    title: "Henry Food",
    titleEs: "Henry Food",
    location: "Henry Bootcamp",
    description:
      "Individual project in which I put into practice the knowledge I acquired in the Soy Henry bootcamp.",
    descriptionEs:
      "Proyecto individual en el que puse en practica los conocimientos que adquirí en el bootcamp Soy Henry",
    icon: React.createElement(CgWorkAlt),
    date: "2023",
  },
  {
    title: "Artify",
    titleEs: "Artify",
    location: "Henry Bootcamp",
    description: `Group project in which I put into practice the knowledge acquired in the Soy henry bootcamp, 
    I also learned to use gitflow and other technologies such as NextJs and Tailwind.`,
    descriptionEs: `Proyecto grupal en el que puse en practica los conocimientos adquiridos en el bootcamp Soy henry,
    además aprendí a utilizar gitflow y otras tecnologías como NextJs y Tailwind.`,
    icon: React.createElement(CgWorkAlt),
    date: "2023",
  },
  {
    title: "Graduated Bootcamp",
    titleEs: "Graduado de Bootcamp",
    location: "Henry Bootcamp",
    description: "I graduated after 4 months of studying",
    descriptionEs: "Me gradué después de 4 meses de estudio",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "GZ Ecuestre",
    titleEs: "GZ Ecuestre",
    location: "Freelancer",
    description: `Creation from scratch of a page for the sale of equestrian horses,
    I used NextJs 14, for the design I used Shadcn, with a PostgreSql database hosted on supabase`,
    descriptionEs: `Creación desde cero de una página para la venta de caballos ecuestres,
     utilicé NextJs 14, para el diseño utilicé Shadcn, con una base de datos PostgreSql alojada en Supabase.
     `,
    icon: React.createElement(GiHorseHead),
    date: "2023 - 2024",
  },
] as const;

export const themes = {
  Light: "light",
  Dark: "dark",
} as const;
