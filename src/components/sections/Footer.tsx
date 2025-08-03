import { mySocials } from "../../constants"

function Footer() {
    return (
        <section className="flex mb-5 flex-wrap items-center justify-between gap-5 pb-3 text-sm text-neutral-400 c-space">
            <div className="my-4 bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full"></div>
            <div className="flex gap-2">
                <p>Terms & Conditions</p>
                <p>|</p>
                <p>Privacy Policy</p>
            </div>

            <div className="flex gap-3 text-neutral-300">
                {mySocials.map((social, index) => (
                    <a href={social.href} key={index}>
                        <img src={social.icon} className="w-5 h-5" alt={social.name}/>
                    </a>
                ))}
            </div>
            <p>&copy; Talkhestani. All rights reserved.</p>
        </section>
    )
}

export default Footer