import { motion } from 'motion/react';

interface CardProps {
    text?: string;
    style?: React.CSSProperties;
    image?: string;
    containerRef: React.RefObject<HTMLDivElement | null>;
}

const Card: React.FC<CardProps> = ({ text, style, image, containerRef }) => {
    return image && !text ? (
        <motion.img
            style={style}
            className="absolute w-15 cursor-grab"
            src={image}
            whileHover={{ scale: 1.05 }}
            drag
            dragConstraints={containerRef}
            dragElastic={1}
        />
    ) : (
        <motion.div
            drag
            style={style}
            className="absolute px-1 py-4 text-xl text-center rounded-full ring ring-gray-700 font-extralight bg-storm w-[12rem] cursor-grab"
            dragConstraints={containerRef}
            dragElastic={1}
        >
            {text}
        </motion.div>
    );
};

export default Card;
