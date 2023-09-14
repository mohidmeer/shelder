import Link from 'next/link';
import { AiOutlineArrowRight } from 'react-icons/ai';
import {BsFillBuildingsFill, BsMapFill, BsPinMap, BsTelephoneOutboundFill} from 'react-icons/bs'
export default function Header(){
    return (
      <div className="bg-[#f6f6f6] w-full">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-4  ">
        <Logo/>
          <Link href={'tel:+54545'} className='flex items-center gap-4 justify-center'>
            <BsTelephoneOutboundFill size={32} className='text-primary'/>
            <div className='text-left font-semibold'>
              <p>+21-555-44-1234</p>
              <p>Need help? Make a Call</p>
            </div>
          </Link>
          <div  className='flex items-center gap-4 justify-center'>
            <BsPinMap size={32} className='text-primary'/>
            <div className='text-left font-semibold'>
              <p>Florida</p>
              <p>Swinton Ave, Delray Beach</p>
            </div>
          </div>
          <div className='px-8 flex items-center gap-4'>
            <button className='p-4 rounded-md' onClick={()=>{console.log('YES')}}>
              FREE ESTIMATE
              <AiOutlineArrowRight/>
            </button >
          </div>
          

        </div>
      </div>
    )
  }
  
  

  function Logo (){
    return(
      <Link href={'/'} className='p-4 bg-white flex flex-col items-center justify-center'>
        <BsFillBuildingsFill size={50} className='text-primary' />
        <p className='font-bold'>Hostbuilding Group</p>
      </Link>
    );
  }