import Image from "next/image";
import Subtitle from "./common/Subtitle";
import { BsRulers } from "react-icons/bs";
import heroImage from '@/public/assets/images/hero.jpg'


export default function WhyWe(){

    return (

        <div className="bg-[#e8e6e5] text-secondary-dark  ">
            <div className="max-w-6xl mx-auto py-20">
               <div className="flex gap-8">
                <div className="w-full  ">
                    <Subtitle title={'WHY CHOOSE WE'}/>
                    <h2 className="mt-2" >Six Reasons</h2>
                    <h3 className="font-normal">For People Choosing Shelder</h3>
                    <div className="grid md:grid-cols-3 gap-4 mt-14">
                            <Item/>
                            <Item/>
                            <Item/>
                            <Item/>
                            <Item/>
                            <Item/>
                        
                    </div>
                </div>
                <div className="w-full relative">
                    <Image src={heroImage}  alt="hero" fill className="object-cover"/>

                    
                </div>

               </div>
            </div>
        </div>
    )
}

function Item(){
    return(
        <div className="bg-white p-6 flex justify-center flex-col items-center cursor-pointer group">
            <BsRulers size={30} className="group-hover:text-primary"/>
            <p className="mt-2 font-bold  ">Quality Material</p>
        </div>
    );
}