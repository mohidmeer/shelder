import Image from "next/image";
import Subtitle from "./common/Subtitle";
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import c3 from '@/public/assets/images/clients-logo-3.png'

export default function Partners(){

    return(
        <div className="max-w-6xl mx-auto my-20">
            <div className="flex justify-center">
                <Subtitle title={'OUR PARTNERS'}/>
            </div>
            <h2 className="text-center mb-4">Companies<br/> <span className="font-normal">We Have Worked With</span> </h2>
            <CompaniesCarousel/>

        </div>
    );
}

function CompaniesCarousel(){
    return(
        <div>
            <Swiper spaceBetween={20} slidesPerView={3} autoplay={{delay: 1500,disableOnInteraction: false,}}modules={[Autoplay]} onSlideChange={() => console.log('slide change')} onSwiper={(swiper) => console.log(swiper)}>

            <SwiperSlide>
                <Slide/>
            </SwiperSlide>
            <SwiperSlide>
                <Slide/>
            </SwiperSlide>
            <SwiperSlide>
                <Slide/>
            </SwiperSlide>
            <SwiperSlide>
                <Slide/>
            </SwiperSlide>
            <SwiperSlide>
                <Slide/>
            </SwiperSlide>
            <SwiperSlide>
                <Slide/>
            </SwiperSlide>
            <SwiperSlide>
                <Slide/>
            </SwiperSlide>
            <SwiperSlide>
                <Slide/>
            </SwiperSlide>
            <SwiperSlide>
                <Slide/>
            </SwiperSlide>
            <SwiperSlide>
                <Slide/>
            </SwiperSlide>
            <SwiperSlide>
                <Slide/>
            </SwiperSlide>


          </Swiper>
        </div>
    );
}

function Slide(){
    return(
     <div className="bg-white rounded relative shadow-xl">
        <Image src={c3} alt="client-logo"  width={200} height={200} />
     </div>
    );
  }