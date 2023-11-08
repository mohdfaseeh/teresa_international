import { Trash2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Button } from './ui/button';
import { Input } from './ui/input';

const CartItem = ({
  title,
  image,
  price,
  quantity,
  id,
  onIncrement,
  onDecrement,
  onRemove,
  slug,
}) => {
  const router = useRouter();
  return (
    // <div className="flex flex-col md:flex-row gap-4 p-4 w-full">
    //   <div className="flex flex-col md:flex-row gap-4">
    //     <img
    //       src={image}
    //       alt={title}
    //       className="w-24 h-24 object-cover rounded-md"
    //     />
    //     <h2 className="text-lg">{title}</h2>
    //     <div className="flex flex-col gap-2">
    //   <div className="flex gap-2">
    //     <Button
    //       variant="outline"
    //       onClick={() => onIncrement(id)}
    //       className="rounded-full"
    //     >
    //       +
    //     </Button>
    //     <Input
    //       value={quantity}
    //       readOnly
    //       className="
    //     text-center
    //     w-10"
    //     />
    //     <Button
    //       variant="outline"
    //       onClick={() => onDecrement(id)}
    //       className="rounded-full"
    //     >
    //       -
    //     </Button>
    //   </div>
    //     </div>
    //   </div>
    // </div>

    <div className="flex flex-col gap-2 p-4 w-full h-48 border rounded-md">
      <div className="flex flex-row gap-4 h-full">
        <img
          src={image}
          alt={title}
          className="w-24 h-24 object-cover rounded-md"
        />
        <h2
          className="text-lg hover:underline cursor-pointer"
          onClick={() => {
            router.push(`/shop/${slug}`);
          }}
        >
          {title}
        </h2>
      </div>
      <hr />
      <div className="flex items-center justify-between h-10">
        <div className="flex gap-2">
          <Button
            variant="outline"
            onClick={() => onIncrement(id)}
            className="rounded-full"
          >
            +
          </Button>
          <Input
            value={quantity}
            readOnly
            className="
            text-center
            w-12"
          />
          <Button
            variant="outline"
            onClick={() => onDecrement(id)}
            className="rounded-full"
          >
            -
          </Button>
        </div>
        <Button
          variant="destructive"
          onClick={() => onRemove(id)}
          className="rounded-full"
        >
          <Trash2 size={16} className="mr-2" />
          Remove
        </Button>
      </div>
    </div>
  );
};

export default CartItem;
