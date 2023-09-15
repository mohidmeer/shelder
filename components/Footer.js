import { FaFacebookF, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer(){

    return(

        <div className="bg-secondary-dark text-light z-[-50]">
            <div className="max-w-6xl mx-auto">

            <Foot/>
            </div>
        </div>

    );
}


function Foot(){
    return(
        <div className="flex items-center justify-between p-2 ">
                <p>Copyright © 2020 All Rights Reserved by Hostbuilding Group.</p>
                <div className="flex gap-2">
                    <div className="rounded-full p-4  relative group z-0">
                        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center -z-20">
                            <div className="w-0 h-0  bg-[#4064ac] group-hover:h-full group-hover:w-full duration-700 rounded-full ">
                            </div>
                        </div>
                        <FaFacebookF className=""/>
                    </div>
                    <div className="rounded-full p-4  relative group z-0">
                        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center -z-20">
                            <div className="w-0 h-0  bg-[#4064ac] group-hover:h-full group-hover:w-full duration-700 rounded-full ">
                            </div>
                        </div>
                        <FaLinkedin className=""/>
                    </div>
                    <div className="rounded-full p-4  relative group z-0">
                        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center -z-20">
                            <div className="w-0 h-0  bg-[#4064ac] group-hover:h-full group-hover:w-full duration-700 rounded-full ">
                            </div>
                        </div>
                        <FaTwitter className=""/>
                    </div>
                    <div className="rounded-full p-4  relative group z-0">
                        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center -z-20">
                            <div className="w-0 h-0  bg-red-500 group-hover:h-full group-hover:w-full duration-700 rounded-full ">
                            </div>
                        </div>
                        <FaYoutube className=""/>
                    </div>
                    
                </div>

            </div>
    )
}
{/* <Link href={'https://wwww.facebook.com'} className='hover:text-[#4064ac] duration-300  transition-all'>
                <FaFacebookF/>
              </Link>
              <Link href={'https://wwww.facebook.com'} className='hover:text-[#1c9cea] duration-300  transition-all'>
                <FaTwitter/>
              </Link>
              <Link href={'https://wwww.facebook.com'} className='hover:text-[#0072b1] duration-300  transition-all'>
                <FaLinkedin/>
              </Link>
              <Link href={'https://wwww.facebook.com'} className='hover:text-primary duration-300  transition-all'>
                <FaYoutube/>
              </Link> */}