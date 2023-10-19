'use client';

import image from '@/public/paintssas-kKXG--621x414@LiveMint_1626329037203.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

import { Quote } from 'lucide-react';
import Image from 'next/image';
import { Autoplay, Keyboard } from 'swiper/modules';

export default function CustomerFeedbackCaurasel() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        keyboard={{
          enabled: true,
        }}
        modules={[Keyboard, Autoplay, Pagination]}
        className="h-[48rem] lg:h-96 w-full"
      >
        <SwiperSlide>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 h-full w-full">
            <Image src={image} className="w-full h-full rounded-lg" />
            <div className="flex flex-col gap-4">
              <Quote className="text-green-600" size={40} fill="currentColor" />
              <h2 className="text-lg font-semibold text-muted-foreground">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                voluptates, nesciunt, quibusdam, nemo voluptas quia dolorum
                molestiae quod enim quae tempora. Quisquam, quod. Quo
                voluptatibus, quibusdam voluptate quas quod voluptatem.
              </h2>
              <h3 className="text-xl font-semibold text-primary">- John Doe</h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 h-full w-full">
            <Image src={image} className="w-full h-full rounded-lg" />
            <div className="flex flex-col gap-4">
              <Quote className="text-green-600" size={40} fill="currentColor" />
              <h2 className="text-lg font-semibold text-muted-foreground">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                voluptates, nesciunt, quibusdam, nemo voluptas quia dolorum
                molestiae quod enim quae tempora. Quisquam, quod. Quo
                voluptatibus, quibusdam voluptate quas quod voluptatem.
              </h2>
              <h3 className="text-xl font-semibold text-primary">- John Doe</h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 h-full w-full">
            <Image src={image} className="w-full h-full rounded-lg" />
            <div className="flex flex-col gap-4">
              <Quote className="text-green-600" size={40} fill="currentColor" />
              <h2 className="text-lg font-semibold text-muted-foreground">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                voluptates, nesciunt, quibusdam, nemo voluptas quia dolorum
                molestiae quod enim quae tempora. Quisquam, quod. Quo
                voluptatibus, quibusdam voluptate quas quod voluptatem.
              </h2>
              <h3 className="text-xl font-semibold text-primary">- John Doe</h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 h-full w-full">
            <Image src={image} className="w-full h-full rounded-lg" />
            <div className="flex flex-col gap-4">
              <Quote className="text-green-600" size={40} fill="currentColor" />
              <h2 className="text-lg font-semibold text-muted-foreground">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                voluptates, nesciunt, quibusdam, nemo voluptas quia dolorum
                molestiae quod enim quae tempora. Quisquam, quod. Quo
                voluptatibus, quibusdam voluptate quas quod voluptatem.
              </h2>
              <h3 className="text-xl font-semibold text-primary">- John Doe</h3>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
