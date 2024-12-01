import { FaHtml5, FaHubspot, FaJs, FaReact, FaShopify, FaWordpress } from "react-icons/fa";
import { Tags } from "./tags";
import { DiCss3, DiJqueryLogo } from "react-icons/di";
import { RiNextjsFill, RiTailwindCssFill, RiGatsbyFill } from "react-icons/ri";
import { SiRedux, SiTypescript, SiMui, SiChakraui, SiAstra, SiPrimereact, SiStorybook, SiAlpinedotjs } from "react-icons/si";
import { Technology } from "./types";
import { ProjectType } from "./enums";

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