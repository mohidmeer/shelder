import Subtitle from "./common/Subtitle";
import team1 from '@/public/assets/images/team-1.jpg'
import team2 from '@/public/assets/images/team-2.jpg'
import team3 from '@/public/assets/images/team-3.jpg'
import repair from '@/public/assets/images/repair-1.jpg'
import repair2 from '@/public/assets/images/repair-2.jpg'
import Image from "next/image";
import { MdComment, MdConstruction, MdHouse } from "react-icons/md";
import Link from "next/link";

export default function Teams(){

    return (
        <div className=" bg-[#f4f4f4] p-4 -z-10">
        
            <div className="max-w-6xl mx-auto mt-20  ">
                <Subtitle title={'eXPERT tEAM'}/>
                <h3 className="mt-2">Trained <span className="font-normal ">Roofers Team</span></h3>
                <div className="grid grid-cols-3 gap-8 mt-4">
                    <Item avatar={team1} position={'Founder'} name={'Stuart Steinberg'}/>
                    <Item avatar={team2} position={'Manager'} name={'Mohid Meer'}/>
                    <Item avatar={team3} position={'Executive'} name={'Joe Swanson'}/>
                </div>
                <div className="flex md:flex-row gap-8 flex-col mt-20 text-white ">
                    <div className="flex w-full group ">
                        <div className="bg-secondary-light p-8 w-full">
                            <MdConstruction size={72} className="text-primary"/>
                            <h5>Emergency Repair & Service</h5>
                            <Link href={'tel:0444444334'} className="hover:text-primary duration-300 ">
                                <h5 className="mt-2 ">+044444334</h5>
                            </Link>
                        </div>
                        <div className="relative h-60 w-full">
                            <Image src={repair} alt="name" fill className="object-cover z-[5] " />
                            <div className="h-full w-0 group-hover:w-full transition-all duration-300 bg-gray-700/50 z-10 absolute"></div>

                        </div>

                    </div>
                    <div className="flex w-full group ">
                        <div className="bg-secondary-light p-8 w-full">
                            <MdComment size={72} className="text-primary"/>
                            <h5>Reviews</h5>
                            <Link href={'tel:0444444334'} className="hover:text-primary duration-300">
                                <h5 >4.8 <br/>144 REVIEWS</h5>
                            </Link>
                        </div>
                        <div className="relative h-60 w-full">
                            <Image src={repair2} alt="name" fill className="object-cover z-[5] " />
                            <div className="h-full w-0 group-hover:w-full transition-all duration-300 bg-gray-700/50 z-10 absolute"></div>

                        </div>

                    </div>
                  

                </div>
            </div>
        </div>
    );
}

function Item({avatar,position,name}){
    return(
        <div className="group cursor-pointer">
            <div className="w-full relative h-80 ">
                <Image src={avatar} alt="team-member" fill className="object-cover group-hover:brightness-75 duration-300 transition-all   "/>
               
            </div>
            <div className="px-4  py-2 border-l-4 border-primary">
                <p className="text-extralight font-bold">{position}</p>
                <p className=" font-bold">{name}</p>
            </div>

        </div>
    );
}