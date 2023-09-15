import Image from "next/image";
import Subtitle from "./common/Subtitle";
import news from '@/public/assets/images/news-1.jpg'
import { MdCalendarMonth } from "react-icons/md";
import { FiUser } from "react-icons/fi";

export default function News(){

    return(
        <div className="">
            <div className="max-w-6xl mx-auto my-32">
                <Subtitle title={'NEWs and updates'}/>
                <h2 className="my-6 text-secondary-dark">Latest <span className="font-normal"> News & Updates </span></h2>
                <div className="mt-10 grid md:grid-cols-3 gap-8 mb-4">
                <Item/>
                <Item/>
                <Item/>
            </div>
            </div>
        </div>
    );
}

function Item(){
    return(
        <div className=" shadow-2xl group text-extralight  ">
            <div className="w-full relative h-60">
                <Image src={news} alt='news' fill className="object-cover -z-10" />
                <div className="flex absolute top-0 w-full h-full overflow-hidden">
                    <div className="w-1/2 h-full transition-all duration-500   bg-gray-800/70 mt-[100%] group-hover:mt-0"></div>
                    <div className="w-1/2 h-full transition-all duration-500   bg-gray-800/70 -mt-[100%] group-hover:mt-0"></div>
                </div>
                <div className="right-0 bottom-0  absolute ">
                    <div className="py-1 px-3 bg-primary rounded-tl-2xl  ">
                        <p className="text-white ">News</p>
                    </div>
                </div>
            </div>
            <div className="p-6">
                <h5 className="font-semibold text-secondary-dark hover:text-primary duration-300 transition">Damage Your Roof From Strom Damage</h5>
                <div className="flex my-2 gap-2">
                    <p className="flex gap-1 items-center">
                        <MdCalendarMonth className="text-primary" size={20}/>
                        <span>Mar 23, 2020</span>
                    </p>
                    <p className="flex gap-1 items-center">
                        <FiUser className="text-primary" size={20}/>
                        <span>Name</span>
                    </p>
                </div>
                <p>Foresee the pain & trouble that are bound too ensue equalidea off deno...</p>

            </div>
        </div>
    );
}