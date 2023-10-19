import Header from '@/components/header';

import image from '@/public/paintssas-kKXG--621x414@LiveMint_1626329037203.jpg';
import Image from 'next/image';

const data = [
  {
    id: 1,
    title: 'Teresa Home Decor',
    image: image,
  },
];
const BrandPage = () => {
  return (
    <div className="flex flex-col gap-10 mt-24 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-64">
      <Header title="OUR BRANDS" centered={true} />
      <div className="flex items-center justify-center gap-10">
        {data.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center justify-center space-y-4"
          >
            <Image src={item.image} alt={item.title} className="w-48 h-24" />
            <h3 className="text-xl font-semibold text-center">{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandPage;
