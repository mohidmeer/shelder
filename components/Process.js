import Subtitle from "./common/Subtitle";
import {MdConstruction} from 'react-icons/md'

export default function Process(){
    return(
        <div className="p-12 mt-20 bg-[#272731] text-white">
            <div className="max-w-8xl mx-auto">
                <div className="flex justify-center">
                    <Subtitle title={'HOW it works'}/>
                </div>
                <h2 className="text-center mt-2">Standard <span className="font-normal">Working Process </span> </h2>
                <div className="relative">
                    <div className="mt-8 grid grid-cols-4 gap-4">
                        <Item/>
                        <Item/>
                        <Item/>
                        <Item/>
                    </div>
                </div>
            </div>
        </div>

    );
}


function Item(){
    return(
        <div className="p-20 text-black bg-white mt-4 hover:-translate-y-4 duration-300">
            <div className="flex justify-center items-center">
                <div className="flex-col flex justify-center items-center">
                    <MdConstruction size={56} className="text-primary"/>
                    <p className="font-bold text-center  ">Consultation</p>
                </div>
            </div>
            <p className="text-center text-extralight text-sm"> All the Lorem Ipsum generators on the Internet to repeat predefined chunks as necessary, making this true generator on the Internet.</p>

        </div>
    );
}