import { ProjectType } from "./enums";
import { Service } from "./types";
import { filteredTechnologyItems } from "./utils";

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
        description: 'Create responsive and engaging websites using HTML5, CSS3, SASS, and modern front-end frameworks.',
        technologies: filteredTechnologyItems(ProjectType.WEBSITE)
    },
    {
        name: 'CMS & E-Commerce Solutions',
        image: '/online-shopping.png',
        description: 'Build custom WordPress and Shopify solutions tailored to your business, ensuring seamless user experiences.',
        technologies: filteredTechnologyItems(ProjectType.SERVICE)
    },
];