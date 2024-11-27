import { FaReact, FaWordpress, FaHubspot, FaShopify, FaCss3, FaHtml5, FaLinkedin, FaGithub, FaSearchengin } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill, RiGatsbyFill } from "react-icons/ri";
import { } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { SiRedux, SiChakraui, SiMui, SiTypescript, SiPrimereact, SiAstra, SiStorybook, SiReacthookform, SiPrisma } from "react-icons/si";
import { MdWeb } from "react-icons/md";



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
    { name: Tags.HTML, icon: <FaHtml5 /> },
    { name: Tags.CSS, icon: <FaCss3 /> },
    { name: Tags.JavaScript, icon: <IoLogoJavascript /> },
    { name: Tags.React, icon: <FaReact /> },
    { name: Tags.NextJS, icon: <RiNextjsFill /> },
    { name: Tags.TypeScript, icon: <SiTypescript /> },
    { name: Tags.TailwindCSS, icon: <RiTailwindCssFill /> },
    { name: Tags.MUI, icon: <SiMui /> },
    { name: Tags.ChakraUI, icon: <SiChakraui /> },
    { name: Tags.WordPress, icon: <FaWordpress /> },
    { name: Tags.Astra, icon: <SiAstra /> },
    { name: Tags.Shopify, icon: <FaShopify /> },
    { name: Tags.Redux, icon: <SiRedux /> },
    { name: Tags.PrimeReact, icon: <SiPrimereact /> },
    { name: Tags.ApexCharts, icon: 'apex' },
    { name: Tags.Highcharts, icon: 'highcharts' },
    { name: Tags.Gatsby, icon: <RiGatsbyFill /> },
    { name: Tags.Hubspot, icon: <FaHubspot /> },
    { name: Tags.Storybook, icon: <SiStorybook /> },
    { name: Tags.ReactHookForm, icon: <SiReacthookform /> },
    { name: Tags.Prisma, icon: <SiPrisma /> },
    { name: Tags.NextAuth, icon: 'nextauth' },
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

export interface Service {
    name: string;
    image: React.ReactNode;
    description: string;
}



export const services: Service[] = [
    {
        name: 'ReactJS Development',
        image: <FaReact />,
        description: 'I specialize in building powerful, scalable applications using ReactJS. I create high-performance Single Page Applications (SPA) and Progressive Web Apps (PWA) that provide an excellent user experience across all devices. I leverage advanced React features such as React Hooks, TypeScript, and modern state management solutions to ensure your apps run fast, secure, and efficiently.',
    },
    {
        name: 'Custom Front-End Web Development Services',
        image: <MdWeb />,
        description: 'I build custom front-end solutions that offer fast loading times and interactivity. My approach to development involves using the latest technologies to create unique user interfaces that help your business effectively engage with your target audience. My goal is to create fast, responsive websites and apps that are adaptable across all devices and platforms.',
    },
    {
        name: "HTML5/CSS3/SASS Development",
        image: <FaHtml5 />,
        description: 'With extensive experience in building dynamic web designs and mobile apps, I use a combination of HTML5, CSS3, and SASS to create visually appealing and functional user interfaces. I focus on writing clean, maintainable code that ensures optimal performance across all devices and screen sizes, providing flexibility and responsiveness for your site.',
    },
    {
        name: 'WordPress Development',
        image: <FaWordpress />,
        description: 'As an expert in WordPress development, I create custom themes and plugins tailored to your business needs. I help you build a website that is not only visually unique but also highly functional. My aim is to make your WordPress site user-friendly, fast, and scalable, ensuring it meets your exact requirements.',
    },
    {
        name: 'Shopify Development',
        image: <FaShopify />,
        description: 'I specialize in Shopify development, creating custom themes and plugins for building professional e-commerce websites. My goal is to help you optimize your online store for better user engagement, increased sales, and a seamless shopping experience. I ensure your Shopify store is fast, scalable, and customer-friendly.',
    },
    {
        name: 'Micro Front-End Development',
        image: <FaSearchengin />,
        description: 'I use the micro front-end approach to create scalable and easily maintainable applications. This approach allows breaking down large applications into smaller, independently deployable units, speeding up development and updates. With this technology, I build flexible and adaptable web apps that integrate seamlessly with other systems and components.',
    },
];