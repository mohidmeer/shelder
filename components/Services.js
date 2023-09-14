import Image from "next/image";
import Subtitle from "./common/Subtitle";
import heroImage from '@/public/assets/images/hero.jpg'

export default function Services(){
    return (
      <div className="bg-secondary-dark mt-28 text-white ">
        <div className="max-w-6xl mx-auto py-20 ">
          <div className="flex justify-center mb-10">
            <Subtitle  title={'Our services'}/>
          </div>
          <h2 className="text-center ">We Provide</h2>
          <h3 className="text-center font-light mb-12 ">Superior Roofing Services</h3>
           <div className="grid grid-cols-3 gap-8 ">
            <Item/>
            <Item/>
            <Item/>


           </div>

        </div>

      </div>
    )
  }
  
  function Item(){
    return(
      <div className="group cursor-pointer">
        <div className="w-full relative h-[200px] overflow-hidden ">
          <Image src={heroImage} fill alt="construction" className="object-cover hover:scale-110 duration-300"/>
        </div>
        <div className="p-4 bg-secondary-light border-b border-gray-500 ">
          <h5>Single Ply Roofing</h5>
          <p className="text-light my-4">Except too obtain some advantages which of us ever undertakes.</p>
        </div>
        <button className="!py-6 btn-inverted group-hover:bg-red-900 ">
          Read More
        </button>

      </div>
    );
  }