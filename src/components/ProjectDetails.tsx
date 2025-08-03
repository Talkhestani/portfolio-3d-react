import { motion } from "motion/react";

interface ProjectTag {
    id: number;
    name: string;
    path: string;
}

interface Props {
    title: string,
    description: string,
    subDescription: string[],
    image: string,
    tags: ProjectTag[],
    href: string,
    closeModal: () => void
}


function ProjectDetails(props: Props) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center w-full overflow-hidden backdrop-blur-sm">
            <motion.div initial={{opacity: 0, scale: 0.5}} animate={{ opacity: 1, scale: 1 }} className="relative max-w-2xl border shadow-sm rounded-2xl bg-gradient-to-l from-midnight to-navy border-white/10">
                <button onClick={() => props.closeModal()} className="absolute p-2 rounded-sm top-5 right-5 bg-midnight hover:bg-gray-500 cursor-pointer">
                    <img src="assets/close.svg" className="w-6 h-6" />
                </button>
                <img src={props.image} alt={props.title} className="w-full rounded-t-2xl" />
                <div className="p-5">
                    <h5 className="mb-2 text-2xl font-bold text-white">{props.title}</h5>
                    <p className="mb-3 font-normal text-neutral-400">{props.description}</p>
                    {props.subDescription.map((subDesc, index) => (
                        <p key={index} className="mb-3 font-normal text-neutral-400">{subDesc}</p>
                    ))}

                    <div className="flex items-center justify-between mt-4">
                        <div className="flex gap-3">
                            {props.tags.map(tag => (
                                <img key={tag.id} src={tag.path} alt={tag.name} className="rounded-lg size-10 hover-animation" />
                            ))}
                        </div>
                        <a href={props.href} className="inline-flex items-center gap-1 font-medium cursor-pointer hover-animation">
                            View Project
                            <img src="assets/arrow-up.svg" className="size-4" />
                        </a>
                    </div>
                </div>

            </motion.div>
        </div>
    )
}

export default ProjectDetails