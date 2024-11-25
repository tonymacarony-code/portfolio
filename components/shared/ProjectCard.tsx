
import Image from "next/image";

import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";

import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";


interface Props {
    title: string;
    href?: string;
    description: string;
    dates: string;
    tags: readonly string[];
    link?: string;
    image: string;
    video?: string;
    links?: readonly {
        icon: string;
        type: string;
        href: string;
    }[];
    className?: string;
}

export function ProjectCard({
    title,

    description,

    tags,

    image,

}: Props) {
    return (
        <Card
            className={
                "h-[600px] p-5 flex flex-col overflow-hidden border hover:shadow-lg text-dark transition-all duration-300 ease-out bg-gray-100 relative"
            }
        >
            <Image src={image} alt="hero" width={50} height={50} className="absolute bottom-0 right-0 w-96 h-96 object-contain z-0 opacity-10" />
            <CardHeader>
                <div className="space-y-2">
                    <div className="flex gap-3 items-start justify-between">
                        <div className="">
                            <div className="flex gap-3">
                                <div className="h-20 w-20 flex justify-center items-center bg-white rounded-lg">
                                    <Image src={image} alt="hero" width={40} height={40} className="object-contain" />
                                </div>
                                <CardTitle className="text-7xl font-medium tracking-[-0.06em]">{title}</CardTitle>
                            </div>
                            <div className="max-w-full text-pretty font-medium text-base">
                                {description}
                            </div>
                            <CardContent className="mb-3 flex flex-col z-10">
                                {tags && tags.length > 0 && (
                                    <div className="mt-2 flex flex-wrap gap-4">
                                        {tags?.map((tag) => (
                                            <Badge key={tag} name={tag} type="chips" />
                                        ))}

                                    </div>
                                )}
                            </CardContent>
                        </div>
                        <div className="flex flex-col gap-3">
                            <Badge type='link' name={"Website"} image={<FiExternalLink />} />
                            {/* github */}
                            <Badge type='link' name={"Github"} image={<FaGithub />} />
                        </div>
                    </div>

                </div>
            </CardHeader>


        </Card>
    );
}
