import { FaReact, FaWordpress, FaHubspot, FaShopify, FaHtml5, FaLinkedin, FaGithub } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill, RiGatsbyFill } from "react-icons/ri";

import { SiRedux, SiChakraui, SiMui, SiTypescript, SiPrimereact, SiAstra, SiStorybook } from "react-icons/si";

import { DiJqueryLogo } from "react-icons/di";
import { DiCss3 } from "react-icons/di";
import { FaJs } from "react-icons/fa";
import { SiAlpinedotjs } from "react-icons/si";

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
    jQuery = "jQuery",
    AlpineJs = "Alpine.js",

}

enum ProjectType {
    APPLICATION = "application",
    WEBSITE = "website",
    SERVICE = "service"
}

interface Technology {
    name: Tags;
    icon: JSX.Element | string;
    category?: Array<ProjectType>;
}
export const Technologies: Technology[] = [
    { name: Tags.HTML, icon: <FaHtml5 color="#E35026" className="relative group" />, category: [ProjectType.WEBSITE] },
    { name: Tags.CSS, icon: <DiCss3 color="#1572B6" />, category: [ProjectType.WEBSITE] },
    { name: Tags.JavaScript, icon: <FaJs color="#F0DB4F" />, category: [ProjectType.WEBSITE] },
    { name: Tags.React, icon: <FaReact color="#61DAFB" />, category: [ProjectType.APPLICATION] },
    { name: Tags.NextJS, icon: <RiNextjsFill color="#000000" />, category: [ProjectType.APPLICATION] },
    { name: Tags.Redux, icon: <SiRedux color="#764ABC" />, category: [ProjectType.APPLICATION] },
    { name: Tags.TypeScript, icon: <SiTypescript color="#007ACC" />, category: [ProjectType.APPLICATION] },
    { name: Tags.TailwindCSS, icon: <RiTailwindCssFill color="#38BDF8" />, category: [ProjectType.APPLICATION, ProjectType.WEBSITE] },
    { name: Tags.MUI, icon: <SiMui color="#007FFF" />, category: [ProjectType.APPLICATION] },
    { name: Tags.ChakraUI, icon: <SiChakraui color="#319795" />, category: [ProjectType.APPLICATION] },
    { name: Tags.WordPress, icon: <FaWordpress color="#21759B" />, category: [ProjectType.WEBSITE, ProjectType.SERVICE] },
    { name: Tags.Astra, icon: <SiAstra color="#592EDE" />, category: [ProjectType.WEBSITE] },
    { name: Tags.Shopify, icon: <FaShopify color="#96BF48" />, category: [ProjectType.SERVICE] },
    { name: Tags.PrimeReact, icon: <SiPrimereact color="#06B6D4" />, category: [ProjectType.APPLICATION] },
    { name: Tags.Gatsby, icon: <RiGatsbyFill color="#663399" />, category: [ProjectType.APPLICATION] },
    { name: Tags.Hubspot, icon: <FaHubspot color="#FFC00F" />, category: [ProjectType.SERVICE] },
    { name: Tags.Storybook, icon: <SiStorybook color="#FF4785" />, category: [ProjectType.APPLICATION] },
    { name: Tags.jQuery, icon: <DiJqueryLogo color="#0769AD" />, category: [ProjectType.WEBSITE] },
    { name: Tags.AlpineJs, icon: <SiAlpinedotjs color="#77C1D2" />, category: [ProjectType.WEBSITE] },
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


export const projects = [
    {
        title: "Project 1",
        href: "/",
        link: "https://github.com/abhisheksingh17/portfolio",
        image: "/mock1.webp",
        type: 'primary',
        description: "A starter project for creating a blog with Next.js and Tailwind CSS.",
    },
    {
        title: "Next.js blog starter",
        href: "https://github.com/abhisheksingh17/nextjs-blog-starter",
        description: "A starter project for creating a blog with Next.js and Tailwind CSS.",
        link: "https://github.com/abhisheksingh17/nextjs-blog-starter",
        image: "/mock1.webp",
        type: 'primary',
    },
    {
        title: "Vue 3 blog starter",
        href: "https://github.com/abhisheksingh17/vue3-blog-starter",
        description: "A starter project for creating a blog with Vue 3 and Tailwind CSS.",
        link: "https://github.com/abhisheksingh17/vue3-blog-starter",
        image: "/dash.jpeg",
        type: 'secondary',
    }, {
        title: "Eventmate",
        href: "https://github.com/abhisheksingh17/vue3-blog-starter",
        description: "Ticketing App",
        link: "https://github.com/abhisheksingh17/vue3-blog-starter",
        image: "/eventmate.svg",
        type: 'secondary',
    },
]

export interface Service {
    name: string;
    image: string;
    description: string;
    technologies?: Array<{ name: Tags, icon: JSX.Element | string }>;
}

const filteredTechnologyItems = (category: ProjectType): Array<{ name: Tags; icon: JSX.Element | string }> => {
    return Technologies.filter(tech => tech.category && tech.category.includes(category)).map(tech => ({
        name: tech.name,
        icon: tech.icon,
    }));
};


export const services: Service[] = [

    {
        name: 'Application Development',
        image: '/api.png',
        description: 'Develop scalable and efficient applications, including SPAs and PWAs, using ReactJS, TypeScript, and micro front-end architecture.',
        technologies: filteredTechnologyItems(ProjectType.APPLICATION)
    },
    {
        name: 'Web Development',
        image: '/internet.png',
        description: 'Create responsive and engaging websites using HTML5, CSS3, SASS, and modern front-end frameworks like ReactJS.',
        technologies: filteredTechnologyItems(ProjectType.WEBSITE)
    },
    {
        name: 'CMS & E-Commerce Solutions',
        image: '/online-shopping.png',
        description: 'Build custom WordPress and Shopify solutions tailored to your business, ensuring seamless user experiences.',
        technologies: filteredTechnologyItems(ProjectType.SERVICE)
    },
];
