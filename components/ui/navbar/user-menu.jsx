'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
const UserMenu = ({ routes }) => {
  const pathName = usePathname();
  return (
    <div className="hidden md:flex items-center justify-center gap-6 h-full text-sm">
      {routes.map((route) => (
        <Link
          href={route.href}
          key={route.name}
          className={`${
            pathName === route.href
              ? 'text-primary border-b-2 border-primary'
              : 'text-primary/50 hover:text-primary hover:border-b-2 border-primary'
          } h-full flex items-center uppercase`}
        >
          {route.name}
        </Link>
      ))}
    </div>
  );
};

export default UserMenu;
