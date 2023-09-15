import { AiOutlineDownload } from "react-icons/ai";
import Subtitle from "./common/Subtitle";
import { MdSend } from "react-icons/md";
import h1 from '@/public/assets/images/house-1.png'
import Image from "next/image";
export default function Brochure(){

    return(
        <div className="bg-secondary-dark text-white py-10">
            <div className="max-w-5xl mx-auto ">
                <div className="flex gap-10">
                    <div className=" w-full flex flex-col justify-center ">
                    <Subtitle title={'Our Brochure'}/>
                    <h3>Economical <br/> <span className="font-normal">Roof Collections</span></h3>
                        <div className="relative">
                            <input placeholder="Email" className="bg-secondary-light my-2 w-full"/>
                            <MdSend size={32} className="absolute text-extralight top-5 right-2 border-l pl-1"/>
                        </div>
                        <p className="flex justify-center gap-1 items-center text-primary hover:text-white cursor-pointer">
                            <AiOutlineDownload size={20} />
                            Direct Download
                        </p>
                    </div>
                    {/* <div className="w-full relative h-[500px] lg:block hidden">
                        <Image src={h1} alt="house" fill className="object-cover" />
                        
                    </div> */}
                    

                </div>


            </div>
        </div>
    );
}