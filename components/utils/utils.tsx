import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { Technologies } from "./techologies";
import { Tags } from "./tags";
import { ProjectType } from "./enums";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}


export const filteredTechnologyItems = (category: ProjectType): Array<{ name: Tags; icon: JSX.Element | string }> => {
    return Technologies.filter(tech => tech.category && tech.category.includes(category)).map(tech => ({
        name: tech.name,
        icon: tech.icon,
    }));
};