'use client';

import image from '@/public/paintssas-kKXG--621x414@LiveMint_1626329037203.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import Image from 'next/image';
import { Autoplay, Keyboard, Navigation, Pagination } from 'swiper/modules';

const HeroCaurasel = ({ className = '' }) => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      keyboard={{
        enabled: true,
      }}
      navigation={true}
      loop={true}
      modules={[Keyboard, Autoplay, Pagination, Navigation]}
      className="w-full 
      h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] xl:h-screen"
    >
      <SwiperSlide>
        <Image
          src={image}
          alt="Picture of the author"
          className="w-full h-full"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={image}
          alt="Picture of the author"
          className="w-full h-full"
        />
      </SwiperSlide>{' '}
      <SwiperSlide>
        <Image
          src={image}
          alt="Picture of the author"
          className="w-full h-full"
        />
      </SwiperSlide>{' '}
      <SwiperSlide>
        <Image
          src={image}
          alt="Picture of the author"
          className="w-full h-full"
        />
      </SwiperSlide>{' '}
      <SwiperSlide>
        <Image
          src={image}
          alt="Picture of the author"
          className="w-full h-full"
        />
      </SwiperSlide>{' '}
      <SwiperSlide>
        <Image
          src={image}
          alt="Picture of the author"
          className="w-full h-full"
        />
      </SwiperSlide>
    </Swiper>
  );
};
export default HeroCaurasel;
