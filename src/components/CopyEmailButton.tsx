import { useState } from "react"
import { AnimatePresence, motion } from "motion/react"


function CopyEmailButton() {
    const [copied, setCopied] = useState(false);
    const email = "talkhestani@outlook.com";

    const copyToClipboard = () => {
        navigator.clipboard.writeText(email);
        setCopied(true)

        setTimeout(() => {
            setCopied(false);
        }, 2000)
    }

    return (
        <motion.button whileHover={{ y: -5 }} whileTap={{ scale: 1.05 }} className="relative px-1 py-4 text-sm text-center rounded-full font-extralight bg-primary w-[12rem] cursor-pointer overflow-hidden">
            <AnimatePresence mode="wait">
                {copied ?
                    <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.1, ease: "easeInOut" }}
                        key="copied"
                        className="flex items-center justify-center gap-2"
                    >
                        <img src="assets/copy-done.svg" className="w-5" alt="copied-icon" />
                        Email has Copied
                    </motion.p>
                    :
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.1 }}
                        key="copy"
                        className="flex items-center justify-center gap-2"
                        onClick={() => copyToClipboard()}
                    >
                        <img src="assets/copy.svg" className="w-5" alt="copy-icon" />
                        Copy Email Address
                    </motion.p>
                }
            </AnimatePresence>
        </motion.button>
    )
}

export default CopyEmailButton