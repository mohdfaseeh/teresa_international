'use client';
import Card from '@/components/card';
import { Button } from '@/components/ui/button';
import useCartItems from '@/hooks/use-cart-items';
import { formatter } from '@/lib/utils';
import { ShoppingBag } from 'lucide-react';
import { useRouter } from 'next/navigation';

import banner1 from 'public/banner-1.jpg';
export const products = [
  {
    id: 1,
    image: banner1,
    title: 'Teresa International',
    subtitle: 'Accrosins religions and cultures',
    slug: 'teresa-international',
    description:
      'To create sustainability and productivity for unemployment in the neglected yet much sorted after handicraft section.',
    price: '1000',
  },
  {
    id: 2,
    image: banner1,
    title: 'Teresa International',
    subtitle: 'Lorem ipsum dolor sit amet.',
    slug: 'teresa-international',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    price: '1000',
  },
  {
    id: 3,
    image: banner1,
    title: 'Teresa International',
    subtitle: 'Lorem ipsum dolor sit amet.',
    slug: 'teresa-international',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    price: '1000',
  },
  {
    id: 4,
    image: banner1,
    title: 'Teresa International',
    subtitle: 'Lorem ipsum dolor sit amet.',
    slug: 'teresa-international',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    price: '1000',
  },
  {
    id: 5,
    image: banner1,
    title: 'Teresa International',
    subtitle: 'Lorem ipsum dolor sit amet.',
    slug: 'teresa-international',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    price: '1000',
  },
  {
    id: 6,
    image: banner1,
    title: 'Teresa International',
    subtitle: 'Lorem ipsum dolor sit amet.',
    slug: 'teresa-international',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    price: '1000',
  },
  {
    id: 7,
    image: banner1,
    title: 'Teresa International',
    subtitle: 'Lorem ipsum dolor sit amet.',
    slug: 'teresa-international',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    price: '1000',
  },
  {
    id: 8,
    image: banner1,
    title: 'Teresa International',
    subtitle: 'Lorem ipsum dolor sit amet.',
    slug: 'teresa-international',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    price: '1000',
  },
  {
    id: 9,
    image: banner1,
    title: 'Teresa International',
    subtitle: 'Lorem ipsum dolor sit amet.',
    slug: 'teresa-international',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    price: '1000',
  },
  {
    id: 10,
    image: banner1,
    title: 'Teresa International',
    subtitle: 'Lorem ipsum dolor sit amet.',
    slug: 'teresa-international',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    price: '1000',
  },
  {
    id: 11,
    image: banner1,
    title: 'Teresa International',
    subtitle: 'Lorem ipsum dolor sit amet.',
    slug: 'teresa-international',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    price: '1000',
  },
  {
    id: 12,
    image: banner1,
    title: 'Teresa International',
    subtitle: 'Lorem ipsum dolor sit amet.',
    slug: 'teresa-international',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    price: '1000',
  },
  {
    id: 13,
    image: banner1,
    title: 'Teresa International',
    subtitle: 'Lorem ipsum dolor sit amet.',
    slug: 'teresa-international',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    price: '1000',
  },
  {
    id: 14,
    image: banner1,
    title: 'Teresa International',
    subtitle: 'Lorem ipsum dolor sit amet.',
    slug: 'teresa-international',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    price: '1000',
  },
];
const ShopPage = () => {
  const router = useRouter();
  const useCartItem = useCartItems();
  return (
    <div className="mt-20 h-full w-full flex items-center justify-center px-2 sm:px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-48">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-10">
        {products.map((product) => (
          <Card
            key={product.id}
            title={product.title}
            imageClassName={
              'h-60 w-full group-hover:scale-105 transition-all duration-500 bg-product'
            }
            image={product.image}
            onClick={() => router.push(`/shop/${product.slug}`)}
            className={'space-y-1 group overflow-hidden'}
            size={'sm'}
            footer={
              <div className="flex items-center justify-between">
                <p className="text-sm text-muted-foreground">
                  {formatter.format(product.price)}
                </p>
                <Button
                  variant="icon"
                  onClick={() => {
                    useCartItem.addItem(product);
                    router.push(`/cart`);
                  }}
                  className="bg-transparent border border-primary hover:bg-primary hover:text-white"
                >
                  <ShoppingBag size={20} />
                </Button>
              </div>
            }
          />
        ))}
      </div>
    </div>
  );
};

export default ShopPage;
