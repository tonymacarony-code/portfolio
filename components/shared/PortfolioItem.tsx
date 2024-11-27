'use client';
import React, { useState, useRef, useEffect } from "react";
import { Card, CardHeader, CardTitle } from "../ui/card";
import gsap from "gsap";
import Image from "next/image";

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

export function PortfolioItem({
    title,
    description,
    dates,
    image,
    className,
}: Props) {
    const imgRef = useRef<HTMLImageElement>(null);
    const [hovered, setHovered] = useState(false);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const img = imgRef.current;
        if (img) {
            const { clientX, clientY } = e;
            gsap.to(img, {
                x: clientX - img.offsetWidth / 2,
                y: clientY - img.offsetHeight / 2,
                duration: 0.1,
            });
        }
    };

    const toggleVisibility = (visible: boolean) => {
        const img = imgRef.current;
        if (img) {
            gsap.to(img, {
                opacity: visible ? 1 : 0,
                duration: 0.3,
            });
        }
    };

    useEffect(() => {
        toggleVisibility(hovered);
    }, [hovered]);

    return (
        <Card
            className={`relative px-5 pb-5c flex flex-col overflow-hidden border-b-4 border-dark text-dark ${className}`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onMouseMove={handleMouseMove}
        >

            <CardHeader>
                <div className="space-y-2">
                    <div className="flex gap-3 items-center justify-between">
                        <CardTitle className="text-[5.42vw] font-medium tracking-[-0.06em]">
                            {title}
                        </CardTitle>
                        <div className="max-w-full text-pretty font-medium text-xl">
                            {dates} • {description}
                        </div>
                    </div>
                </div>
            </CardHeader>

            <Image
                ref={imgRef}
                src={image}
                width={350}
                height={350}
                alt={title}
                className="fixed top-0 left-0 w-[350px] max-w-none aspect-square h-auto z-50 opacity-0 pointer-events-none object-contain"
            />
        </Card>
    );
}
