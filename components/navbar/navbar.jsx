'use client';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import useLoginModal from '@/hooks/use-login-modal';
import logo from '@/public/logo.jpeg';
import { ShoppingBag, User } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
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

import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
const Navbar = () => {
  const loginModal = useLoginModal();
  const { data } = useSession();
  const router = useRouter();
  return (
    <nav className="fixed inset-0 h-16 w-full bg-white flex items-center justify-center border-b z-50">
      <div className="flex items-center justify-between w-full h-full px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-64">
        <div className="flex items-center justify-start">
          <Link href="/" className="text-xl md:text-2xl font-bold text-primary">
            <Image src={logo} width={50} height={50} />
          </Link>
        </div>
        <div className="flex items-center justify-end h-full space-x-4">
          <UserMenu routes={routes} />
          {data?.user ? (
            <DropdownMenu>
              <DropdownMenuTrigger>
                <User className={`h-full flex items-center uppercase`} />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>{data?.user?.name}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Orders</DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => {
                    router.push('/address');
                  }}
                >
                  Addresses
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onClick={() => {
                    signOut();
                  }}
                >
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <User
              onClick={loginModal.onOpen}
              className={`h-full flex items-center uppercase cursor-pointer`}
            />
          )}
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
