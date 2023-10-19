import { cn } from '@/lib/utils';
import Image from 'next/image';

const Card = ({ title, image, description, className, onClick }) => {
  return (
    <div className={cn('flex flex-col space-y-4', className)} onClick={onClick}>
      <Image src={image} className="w-full h-full" />
      <h3 className="text-xl font-semibold text-primary">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
};

export default Card;
