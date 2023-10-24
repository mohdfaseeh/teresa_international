'use client';

import banner1 from 'public/banner-1.jpg';
import banner2 from 'public/banner-2.jpg';
import banner3 from 'public/banner-3.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Autoplay, Keyboard, Navigation, Pagination } from 'swiper/modules';

const data = [
  {
    id: 1,
    image: banner1,
    title: 'Teresa International',
    subtitle: 'Accrosins religions and cultures',
    description:
      'To create sustainability and productivity for unemployment in the neglected yet much sorted after handicraft section.',
    href: '/',
  },
  {
    id: 2,
    image: banner2,
    title: 'Teresa International',
    subtitle: 'Lorem ipsum dolor sit amet.',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    href: '/',
  },
  {
    id: 3,
    image: banner3,
    title: 'Teresa International',
    subtitle: 'Lorem ipsum dolor sit amet.',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    href: '/',
  },
];

const HeroCaurasel = ({ className = '' }) => {
  const router = useRouter();
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
      {data.map((item) => (
        <SwiperSlide className="relative" key={item.id}>
          <Image
            src={item.image}
            alt="Picture of the author"
            className="w-full h-full"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50">
            <div className="absolute flex items-center flex-col top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
              {item.title && (
                <h1 className="text-4xl font-bold">{item.title}</h1>
              )}
              {item.subtitle && (
                <h2 className="text-2xl mt-1">{item.subtitle}</h2>
              )}
              {item.description && (
                <p className="text-base mt-4">{item.description}</p>
              )}
              {item.href && (
                <Button
                  onClick={() => item.href && router.push(item.href)}
                  className="mt-4 bg-transparent border border-white hover:bg-white hover:text-black"
                  variant="outline"
                >
                  Learn More
                </Button>
              )}
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
export default HeroCaurasel;
