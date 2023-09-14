import { BsRulers } from "react-icons/bs";

export default function Subtitle({title,className}){

    return(
        <div className="flex items-center gap-2 text-primary ">
            <BsRulers/>
            <p className="font-bold uppercase">{title}</p>

        </div>

    )
}