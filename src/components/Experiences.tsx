import { Timeline } from "./Timeline";
import { experiences } from '../constants'


export default function Experiences() {
    return (
        <div className="w-full">
            <Timeline data={experiences} />
        </div>
    )
}
