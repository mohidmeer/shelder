import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import heroImage from '@/public/assets/images/hero.jpg'
import 'swiper/css';
import { Fade } from "react-awesome-reveal";

export default function Hero(){
    return (
      <div className='relative'>
         <BookingForm/>
         <Swiper
      spaceBetween={0}
      slidesPerView={1}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      // modules={[Autoplay]}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      
      <SwiperSlide >
        <Slide1/>
      </SwiperSlide>
      <SwiperSlide >
        <Slide2/>
      </SwiperSlide>
      <SwiperSlide >
        <Slide3/>
      </SwiperSlide>
    </Swiper>
       </div>
    )
  }
  
  function Slide1(){
    return(
      <div className='w-full relative h-[100vh] text-white'>
          <Image src={heroImage} fill  alt='hero-img' className='object-cover -z-10 brightness  '/>
          <div className='w-full h-full bg-gradient-to-r from-red-500/20  to-black/50'>
            <div className='max-w-6xl h-full mx-auto flex flex-col justify-center p-4 '>
               <div className='flex justify-end'>
                 <div className='flex flex-col gap-4'>
                 <Fade cascade damping={0.3}>
                      <h1>Reliable Roofing <br/> And Retro Fit</h1>
                      <p className='text-xl'>With more than Four Decades of Roofing Services</p>
                      <button className='sm:w-1/2 py-4'>
                          About Our Company
                      </button>  
                 </Fade>
                 </div>
               </div>
            </div>
          </div>
      </div>
    );
  }
  function Slide2(){
    return(
      <div className='w-full relative h-[100vh] text-white'>
          <Image src={heroImage} fill  alt='hero-img' className='object-cover -z-10 brightness-50'/>
          <div className='w-full h-full bg-gradient-to-r from-black/40 to-red-500/20 '>
            <div className='max-w-6xl h-full mx-auto flex flex-col justify-center p-4 '>
               <div className='flex justify-start'>
                    <div className='flex flex-col gap-4'>
                      <Fade cascade damping={0.3}>
                        <h1>We are Commercial  <br/> Roofing expert In <br/> USA</h1>
                        <p className='text-xl'>With more than Four Decades of Roofing Services</p>
                        <button className='sm:w-1/2 py-4'>
                            About Our Company
                        </button>  
                      </Fade>
                    </div>
               </div>
            </div>
          </div>
      </div>
    );
  }
  function Slide3(){
    return(
      <div className='w-full relative h-[100vh] text-white'>
          <Image src={heroImage} fill  alt='hero-img' className='object-cover -z-10 brightness-50'/>
          <div className='w-full h-full bg-gradient-to-r from-black/40 to-red-500/20 '>
            <div className='max-w-6xl h-full mx-auto flex flex-col justify-center p-4 '>
               <div className='flex justify-start'>
                 <div className='flex flex-col gap-4'>
                 <Fade cascade damping={0.3}>
                    <h1>Cost Effective <br/> Commercial Services</h1>
                    <p className='text-xl'>With more than Four Decades of Roofing Services</p>
                    <button className='sm:w-1/2 py-4'>
                        About Our Company
                    </button>  
                 </Fade>
                 </div>
               </div>
            </div>
          </div>
      </div>
    );
  }


  function BookingForm(){

    return(
      <div className=' absolute  -bottom-[230px]   z-10 w-full text '>
        <div className='bg-white max-w-6xl mx-auto p-10 shadow-xl  '>
          <h3>Book Roofing Inspection</h3>
          <p className='text-extralight mt-2'>Your roof will require some professional attention for long live.</p>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-10'>
            <input placeholder='Your Name' type='text' />
            <input placeholder='Phone' />
            <input placeholder='Address'  />
            <input placeholder='Inspection Date' type='date' />
            <input placeholder='Comfortable Time' type='time' />
            <button>Book For Inspection</button>

          </div>

        </div>

      </div>

    );

  }