import { useState } from "react";
import ProjectDetails from "./ProjectDetails";

interface ProjectTag {
    id: number;
    name: string;
    path: string;
}

interface Props {
    id: number;
    title: string;
    description: string;
    subDescription: string[];
    href: string;
    logo: string;
    image: string;
    tags: ProjectTag[];
    setPreview: (image: string) => void
}

function Project(props: Props) {
    const [isHidden, setIsHidden] = useState(true);
    return (
        <>
            <div onMouseEnter={() => props.setPreview(props.image)} onMouseLeave={() => props.setPreview('')} className="flex-wrap items-center justify-between py-10 space-y-14 sm:flex sm:space-y-0">
                <p className="text-2xl">{props.title}</p>
                <div className="flex gap-5 mt-2 text-sand">
                    {props.tags.map(tag => <span key={tag.id}>{tag.name}</span>)}
                </div>

                <button onClick={() => setIsHidden(false)} className="flex items-center gap-1 cursor-pointer hover-animation">
                    Read More
                    <img src="assets/arrow-right.svg" className="w-5" />
                </button>
            </div>

            <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full"></div>

            {!isHidden && 
                <ProjectDetails
                    title={props.title}
                    description={props.description}
                    subDescription={props.subDescription}
                    tags={props.tags}
                    image={props.image}
                    href={props.href}
                    closeModal={() => setIsHidden(true)}
                />
            }
        </>
    )
}

export default Project