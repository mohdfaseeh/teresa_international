import { cn } from '@/lib/utils';
import Image from 'next/image';

const Card = ({
  title,
  image,
  description,
  className,
  onClick,
  size = 'lg',
  imageClassName,
  footer: Footer = null,
}) => {
  return (
    <div className={cn('flex flex-col space-y-4', className)}>
      <div
        className={cn(
          'w-full h-full overflow-hidden',
          onClick && 'cursor-pointer'
        )}
        onClick={onClick}
      >
        <Image
          src={image}
          className={cn('w-full h-full', imageClassName)}
          objectFit="cover"
        />
      </div>
      <h3
        className={cn(
          `text-xl font-semibold text-primary`,
          size === 'sm' && 'text-base',
          size === 'lg' && 'text-2xl'
        )}
      >
        {title}
      </h3>
      <p
        className={cn(
          `text-sm text-muted-foreground`,
          size === 'sm' && 'text-xs',
          size === 'lg' && 'text-base'
        )}
      >
        {description}
      </p>
      {Footer && <div>{Footer}</div>}
    </div>
  );
};

export default Card;
