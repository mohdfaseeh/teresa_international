import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import Link from 'next/link';

const DrawerMenu = ({ routes }) => {
  return (
    <Sheet>
      <SheetTrigger className="block md:hidden">
        <Menu />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="flex items-center justify-center">
            <h2 className="text-2xl font-bold">Teresa International</h2>
          </SheetTitle>
          <hr />
          <div className="flex flex-col p-4 space-y-4">
            {routes.map((route) => (
              <Link
                href={route.href}
                className="flex flex-col"
                key={route.name}
              >
                <SheetDescription key={route.name} className="flex uppercase">
                  {route.name}
                </SheetDescription>
                <hr />
              </Link>
            ))}
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};
export default DrawerMenu;
