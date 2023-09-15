import { MdStar } from "react-icons/md";
import Subtitle from "./common/Subtitle";
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from "next/image";
import t2 from '@/public/assets/images/testimonial-2.png'


export default function Testimonials(){
    return(
        <div className="bg-[#f6f6f6] p-1">
            <div className="max-w-6xl mx-auto mt-20 ">
                <div className="flex justify-center">
                    <Subtitle title={'Testimonials'}/>
                </div>
                <div className="mb-10">
                    <h2 className="text-center">Impressive</h2>
                    <h2 className="text-center font-normal">Words from Customers</h2>
                </div>
                <TestimonyCarousel/>
         </div>
    </div>
    );
}

function TestimonyCarousel(){

    return(
        <div className="mb-20">
             <Swiper
      spaceBetween={20}
      slidesPerView={3}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      
      <SwiperSlide >
        <Slide/>
      </SwiperSlide>
      <SwiperSlide >
        <Slide/>
      </SwiperSlide>
      <SwiperSlide >
        <Slide/>
      </SwiperSlide>
      <SwiperSlide >
        <Slide/>
      </SwiperSlide>
      <SwiperSlide >
        <Slide/>
      </SwiperSlide>
      <SwiperSlide >
        <Slide/>
      </SwiperSlide>
      <SwiperSlide >
        <Slide/>
      </SwiperSlide>
      <SwiperSlide >
        <Slide/>
      </SwiperSlide>
      <SwiperSlide >
        <Slide/>
      </SwiperSlide>
      <SwiperSlide >
        <Slide/>
      </SwiperSlide>
      <SwiperSlide >
        <Slide/>
      </SwiperSlide>
      <SwiperSlide >
        <Slide/>
      </SwiperSlide>
      <SwiperSlide >
        <Slide/>
      </SwiperSlide>
      <SwiperSlide >
        <Slide/>
      </SwiperSlide>

 </Swiper>
        </div>
    )
}




function Slide(){
    return(
     <div className="bg-white rounded relative shadow-xl   ">
        <div className="p-8">
            <div className="flex items-center gap-2">
                <Image src={t2} width={50} alt="testimony" /> 
                <h5 className="text-secondary mt-auto">Max Benjamin</h5>
            </div> 
            <p className="text-extralight mt-2 ">Im very Happy. Mike did a super job. I will be having for some more work later this summer on my sky lights. we recommend shelder.</p>
            <StarSet/>
        </div>
     </div>
    );
  }

function StarSet(){
    return(
        <div className="flex gap-1  text-primary justify-end mt-4 ">
        <MdStar/>
        <MdStar/>
        <MdStar/>
        <MdStar/>
        <MdStar/>

    </div>
    )
}