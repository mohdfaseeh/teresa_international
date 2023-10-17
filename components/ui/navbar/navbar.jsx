'use client';
import { ShoppingBag, User } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import DrawerMenu from './drawer-menu';
import UserMenu from './user-menu';

const routes = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'About us',
    href: '/about',
  },
  {
    name: 'Shop',
    href: '/shop',
  },
  {
    name: 'Contact Us',
    href: '/contact',
  },
];

const Navbar = () => {
  const pathName = usePathname();
  return (
    <nav className="fixed inset-0 h-16 w-full bg-white flex items-center justify-center border-b">
      <div className="flex items-center justify-between w-full max-w-6xl px-4 h-full">
        <div className="flex items-center justify-start">
          <Link href="/" className="text-xl md:text-2xl font-bold text-primary">
            Teresa International
          </Link>
        </div>
        <div className="flex items-center justify-end h-full space-x-4">
          <UserMenu routes={routes} />
          <User
            className={`h-full flex items-center uppercase cursor-pointer`}
          />
          <Link href="/cart" key="Cart">
            <ShoppingBag className={`h-full flex items-center uppercase`} />
          </Link>
          <DrawerMenu routes={routes} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
