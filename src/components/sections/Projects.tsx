import { useState } from 'react';
import { myProjects } from '../../constants'
import Project from '../Project'
import { motion, useMotionValue, useSpring } from 'motion/react'

function Projects() {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const SpringX = useSpring(x, {damping: 10, stiffness: 50})
    const SpringY = useSpring(y, {damping: 10, stiffness: 50})

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        x.set(e.clientX + 20)
        y.set(e.clientY + 20)
    }

    const [preview, setPreview] = useState('');

    return (
        <div onMouseMove={handleMouseMove} className='relative c-space section-spacing'>
            <h2 className='text-heading'>
                My Selected Projects
            </h2>

            <div className='bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-[1px] w-full' />

            {myProjects.map(project => <Project {...project} setPreview={(image => setPreview(image))}/>)}

            {preview &&
                <motion.img className='fixed top-0 left-0 z-50 object-cover h-56 rounded-lg shadow-lg pointer-events-none w-80' style={{ x:SpringX, y: SpringY }} src={preview} />
            }
        </div>
    )
}

export default Projects
