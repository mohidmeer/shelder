import Image from "next/image";
import Subtitle from "./common/Subtitle";
import heroImage from '@/public/assets/images/hero.jpg'
import { Fade, Slide } from "react-awesome-reveal";
export default function Project() {
    return (

        <div className="">
            <div className="max-w-6xl mx-auto text-secondary-dark mt-10">
                <div className="flex justify-center">
                    <Subtitle title={'latest Projects'} />
                </div>
                <h2 className="text-center my-4">Inspriration </h2>
                <h2 className="font-normal text-center">on Your Next Project</h2>
                <div className="mt-4 grid grid-cols-3  gap-4">
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />


                </div>


            </div>

        </div>

    );
}

function Item() {
    return (
        <div className="relative w-full group overflow-hidden h-[250px] text-white  ">
            <Image src={heroImage} alt="her" fill className="object-cover group-hover:scale-110 duration-300 -z-10" />
            <div className="w-full h-full bg-gray-700/70 opacity-0  group-hover:opacity-100 duration-300 transition-all">
                <div className="h-full group-hover:flex flex-col justify-center items-center hidden ">
                    <Slide  direction="up">
                        <h5 className="">Roof Installation</h5>
                        <p className=" text-primary font-bold">Commercial</p>  
                    </Slide>

                </div>
            </div>
        </div>

    );
}