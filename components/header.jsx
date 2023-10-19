import { cn } from '@/lib/utils';

const Header = ({ title, description, centered }) => {
  return (
    <div className={cn('flex flex-col gap-4 ', centered && 'items-center')}>
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold uppercase">{title}</h1>
        <div className="px-1 relative flex items-center">
          <div className="absolute w-2 h-2 rounded-full bg-green-700"></div>
          <div className="absolute w-24 h-[2px] rounded-full bg-green-700"></div>
        </div>
      </div>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

export default Header;
