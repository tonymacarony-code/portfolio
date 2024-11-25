import { FaReact, FaWordpress, FaHubspot, FaShopify, FaCss3, FaHtml5, FaLinkedin, FaGithub } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill, RiGatsbyFill } from "react-icons/ri";
import { } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { SiRedux, SiChakraui, SiMui, SiTypescript, SiPrimereact, SiAstra, SiStorybook, SiReacthookform, SiPrisma } from "react-icons/si";



export enum Tags {
    NextJS = "Next.js",
    TailwindCSS = "Tailwind CSS",
    React = "React",
    JavaScript = "JavaScript",
    TypeScript = "TypeScript",
    Redux = "Redux Toolkit",
    Zustand = "Zustand",
    MUI = "Material UI",
    ChakraUI = "Chakra UI",
    PrimeReact = "PrimeReact",
    ApexCharts = "ApexCharts",
    Highcharts = "Highcharts.js",
    WordPress = "WordPress",
    Astra = "Astra",
    Gatsby = "Gatsby",
    Contenful = "Contenful",
    Hubspot = "Hubspot",
    Shopify = "Shopify",
    Storybook = "Storybook",
    ReactHookForm = "React Hook Form",
    Prisma = "Prisma",
    NextAuth = "NextAuth",
    Vercel = "Vercel",
    CSS = "CSS",
    HTML = "HTML",
    LinkedIn = "LinkedIn",
    Github = "Github",
}
interface Technology {
    name: Tags;
    icon: JSX.Element | string;
}
export const Technologies: Technology[] = [
    { name: Tags.NextJS, icon: <RiNextjsFill /> },
    { name: Tags.TailwindCSS, icon: <RiTailwindCssFill /> },
    { name: Tags.React, icon: <FaReact /> },
    { name: Tags.TypeScript, icon: <SiTypescript /> },
    { name: Tags.JavaScript, icon: <IoLogoJavascript /> },
    { name: Tags.Redux, icon: <SiRedux /> },
    { name: Tags.MUI, icon: <SiMui /> },
    { name: Tags.ChakraUI, icon: <SiChakraui /> },
    { name: Tags.PrimeReact, icon: <SiPrimereact /> },
    { name: Tags.ApexCharts, icon: 'apex' },
    { name: Tags.Highcharts, icon: 'highcharts' },
    { name: Tags.WordPress, icon: <FaWordpress /> },
    { name: Tags.Astra, icon: <SiAstra /> },
    { name: Tags.Gatsby, icon: <RiGatsbyFill /> },
    { name: Tags.Hubspot, icon: <FaHubspot /> },
    { name: Tags.Shopify, icon: <FaShopify /> },
    { name: Tags.Storybook, icon: <SiStorybook /> },
    { name: Tags.ReactHookForm, icon: <SiReacthookform /> },
    { name: Tags.Prisma, icon: <SiPrisma /> },
    { name: Tags.NextAuth, icon: 'nextauth' },
    { name: Tags.CSS, icon: <FaCss3 /> },
    { name: Tags.HTML, icon: <FaHtml5 /> },
]

export const socials = [
    {
        name: "LinkedIn",
        icon: <FaLinkedin />,
        href: "https://www.linkedin.com/in/abhisheksingh17/",
    },
    {
        name: "GitHub",
        icon: <FaGithub />,
        href: "https://github.com/abhisheksingh17",
    },
]


export const categories = [
    { name: "All", id: 0 },
    { name: "Applications", id: 1 },
    { name: "Websites", id: 2 },
    { name: "Services", id: 3 },
]

export const projects = [
    {
        title: "Eventmate",
        categoryId: 1,
        href: "/",
        description: "Ticketing App",
        dates: "2022",
        tags: [Tags.HTML, Tags.CSS, Tags.JavaScript, Tags.TailwindCSS],
        link: "https://github.com/abhisheksingh17/portfolio",
        image: "./Logomark.svg",

    },
    {
        title: "Next.js blog starter",
        categoryId: 2,
        href: "https://github.com/abhisheksingh17/nextjs-blog-starter",
        description: "A starter project for creating a blog with Next.js and Tailwind CSS.",
        dates: "2022",
        tags: ["Next.js", "Tailwind CSS", "Blog"],
        link: "https://github.com/abhisheksingh17/nextjs-blog-starter",
        image: "./logo.svg",
    },
    {
        title: "Vue 3 blog starter",
        categoryId: 3,
        href: "https://github.com/abhisheksingh17/vue3-blog-starter",
        description: "A starter project for creating a blog with Vue 3 and Tailwind CSS.",
        dates: "2022",
        tags: ["Vue 3", "Tailwind CSS", "Blog"],
        link: "https://github.com/abhisheksingh17/vue3-blog-starter",
        image: "./logo.svg",
    },
]