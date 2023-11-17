'use client';
import { Button } from '@/components/ui/button';
import { addItemsToCart } from '@/hooks/add-to-cart';
import { cn, formatter } from '@/lib/utils';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const ProductDetailsPage = ({ params: { productSlug } }) => {
  const router = useRouter();

  const { data: user } = useSession();

  const [selectedImage, setSelectedImage] = useState();

  const [productData, setProductData] = useState();
  const fetchProduct = async () => {
    await axios
      .get(`/api/products/${productSlug}`)
      .then((res) => {
        if (res) {
          setProductData(res.data);
          setSelectedImage(res.data.image[0]);
          console.log(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  const handleCart = async (product) => {
    if (!user?.user?.id) {
      addItemsToCart(product);
      router.push('/cart');
    } else {
      await axios
        .post(`/api/${user?.user?.id}/cart`, {
          productId: product._id,
          quantity: 1,
        })
        .then((res) => {
          router.push('/cart');
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  if (!productData)
    return (
      <div
        className="mt-24
    px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-48
  "
      >
        No product found
      </div>
    );
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
            {productData?.image?.map((image, index) => {
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
            {productData.name}
          </h2>
          {/* <p className="text-gray-500 text-sm">By {productData.category}</p> */}
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
                {productData.countInStock <= 0 && 'Out of Stock'}
              </p>
            </div>
          </div>
          <p className="text-gray-500">{productData.description}</p>
          <div className="py-4 flex flex-col gap-4">
            <Button
              type="button"
              className="h-14  font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white"
              onClick={() => handleCart(productData)}
              disabled={productData.stock === 0}
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
