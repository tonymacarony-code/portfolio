import { ProjectType } from "./enums";
import { Tags } from "./tags";

export interface Technology {
    name: Tags;
    icon: JSX.Element | string;
    category?: Array<ProjectType>;
}

export interface Service {
    name: string;
    image: string;
    description: string;
    technologies?: Array<{ name: Tags, icon: JSX.Element | string }>;
}