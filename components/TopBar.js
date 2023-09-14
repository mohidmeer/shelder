import Link from 'next/link'
import {AiOutlineClockCircle, AiOutlineMail} from 'react-icons/ai'
import {FaFacebookF, FaLinkedin, FaTwitter, FaYoutube} from 'react-icons/fa'

export default function TopBar(){
  return (
    <div className="bg-secondary-light  w-full text-light">
        <div className='flex flex-col lg:flex-row p-2 max-w-6xl mx-auto justify-center lg:justify-between  ' >
          <div className='flex items-center gap-x-4 gap-y-2 cursor-pointer justify-center flex-col md:flex-row '>
            <p className='flex items-center gap-1'>
              <AiOutlineClockCircle size={24} className='text-primary'/>
              Mon-Sat: 09am to 07.30pm
            </p>
            <p className='flex items-center gap-1'>
              <AiOutlineMail size={24} className='text-primary'/>
                hostbuildinggroup@gmail.com
            </p>
          </div>
          <div className='flex items-center justify-center mt-4 md:mt-0'>
            <Link className='border-r px-4 border-gray-500  ' href={'/'}>Faqs</Link>
            <Link className='border-r  px-4 border-gray-500' href={'/'}>Pricing</Link>
            <div className='flex gap-2 px-4 '>
              <Link href={'https://wwww.facebook.com'} className='hover:text-[#4064ac] duration-300  transition-all'>
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
              </Link>

            </div>

          </div>
        </div>
    </div>
  )
}


