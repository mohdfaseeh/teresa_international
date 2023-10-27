'use client';
import { Button } from '@/components/ui/button';
import { cn, formatter } from '@/lib/utils';
import { useSession } from 'next-auth/react';
import { useState } from 'react';

const productData = {
  title: 'Product Title',
  price: 100,
  description: (
    <div>
      <p className="mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
        tincidunt tellus lacus, ut vehicula justo aliquet id. Sed pellentesque
        eros ac nunc sodales, et efficitur lorem aliquam. Nullam euismod, elit
        non congue tincidunt, mi tortor laoreet justo, eget ultricies arcu eros
        vel eros. Donec nec eros ultricies, cursus nunc quis, aliquam nisl.
        Donec euismod tincidunt felis, eget aliquam eros. Donec euismod, elit
        non congue tincidunt, mi tortor laoreet justo, eget ultricies arcu eros
        vel eros. Donec nec eros ultricies, cursus nunc quis, aliquam nisl.
        Donec euismod tincidunt felis, eget aliquam eros. Donec euismod, elit
        non congue tincidunt, mi tortor laoreet justo, eget ultricies arcu eros
        vel eros. Donec nec eros ultricies, cursus nunc quis, aliquam nisl.
        Donec euismod tincidunt felis, eget aliquam eros. Donec euismod, elit
        non
      </p>
      <ul className="list-disc list-inside">
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
      </ul>
    </div>
  ),

  image: [
    'https://via.placeholder.com/100',
    'https://via.placeholder.com/200',
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/400',
  ],
  slug: 'product-title',
  category: 'Category',
  stock: 0,
  id: 1,
};
const ProductDetailsPage = () => {
  const { data } = useSession();
  console.log(data);
  const [selectedImage, setSelectedImage] = useState(productData.image[0]);
  return (
    <div
      className="mt-24
    px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-48
  "
    >
      <div className="flex flex-col md:flex-row -mx-4">
        <div className="md:flex-1 px-4">
          <div
            className="h-64 md:h-96 rounded-lg bg-gray-100 mb-4 overflow-hidden
          "
          >
            <img
              src={selectedImage}
              alt="Placeholder"
              className="rounded-lg object-cover w-full h-full
              hover:scale-105 transform transition duration-500 ease-in-out
              "
            />
          </div>
          <div className="flex -mx-2 mb-4 w-max-2xl overflow-auto">
            {productData.image.map((image, index) => {
              console.log(image, selectedImage);
              return (
                <div className="flex-1 px-2" key={index}>
                  <div
                    className={cn(
                      'h-24 rounded-lg bg-gray-100 mb-4 overflow-hidden cursor-pointer',
                      image === selectedImage
                        ? 'border-2 border-indigo-600'
                        : ''
                    )}
                    onClick={() => setSelectedImage(image)}
                  >
                    <img
                      src={image}
                      alt="Placeholder"
                      className="rounded-lg object-cover w-full h-full
                        hover:scale-105 transform transition duration-500 ease-in-out
                        "
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="md:flex-1 px-4">
          <h2 className="mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl">
            {productData.title}
          </h2>
          <p className="text-gray-500 text-sm">By {productData.category}</p>
          <div className="flex items-center space-x-4 my-4">
            <div>
              <div className="rounded-lg bg-gray-100 flex py-2 px-3">
                <span className="font-semibold text-indigo-600 text-xl">
                  {formatter.format(productData.price)}
                </span>
              </div>
            </div>
            <div className="flex-1">
              <p className="text-green-500 text-base font-semibold">
                {productData.stock > 0 ? 'In Stock' : 'Out of Stock'}
              </p>
            </div>
          </div>
          <p className="text-gray-500">{productData.description}</p>
          <div className="py-4 flex flex-col gap-4">
            {/* <div className="flex gap-4 items-center">
              <div className="text-center block text-xs uppercase text-gray-400 tracking-wide font-semibold">
                Qty
              </div>
              <Select>
                <SelectTrigger className="w-[80px]">
                  <SelectValue placeholder="1">1</SelectValue>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1</SelectItem>
                  <SelectItem value="2">2</SelectItem>
                  <SelectItem value="3">3</SelectItem>
                  <SelectItem value="4">4</SelectItem>
                  <SelectItem value="5">5</SelectItem>
                </SelectContent>
              </Select>
            </div> */}
            <Button
              type="button"
              className="h-14 py-2 font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white"
            >
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
