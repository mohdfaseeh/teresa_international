import { formatter } from '@/lib/utils';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const OrderCard = ({ orders, id }) => {
  const router = useRouter();
  return (
    <div
      className="flex flex-col gap-4 w-full border rounded-md hover:shadow-md transition-shadow duration-300 ease-in-out cursor-pointer"
      onClick={() => {
        router.push(`/orders/${id}`);
      }}
    >
      {orders.map((order) => {
        return (
          <div
            key={order._id}
            className="flex flex-col gap-4 p-4 
          "
          >
            <div className="flex gap-4 items-center justify-between">
              <Image
                src={order.product.image && order.product.image[0]}
                alt={order.product.name}
                className="w-16 h-16"
                width={96}
                height={96}
              />

              <p className="text-sm">{order.product.name}</p>
              <p className="text-sm">{formatter.format(order.product.price)}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default OrderCard;
