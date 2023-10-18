'use client';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import Caurasel from './caurasel';

export default function Home() {
  const router = useRouter();
  return (
    <div className="mt-16 w-full h-full flex flex-col gap-4">
      <Caurasel />
      <div className="flex flex-col lg:flex-row space-y-4 mt-24 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-64">
        <div className="flex flex-col space-y-1 w-full">
          <div className="flex flex-col space-y-10 w-full">
            <h2 className="text-3xl font-bold text-primary">
              Welcome to Teresa International
            </h2>
            <h3 className="text-xl font-semibold text-primary">
              We are the best Interior designer since 1975.
            </h3>
          </div>
          <p className="text-base text-muted-foreground">
            Interior brings 41 years of interior designs experience right to
            your home or office. Our design professionals are equipped to help
            you determine the products and design that work best for our
            customers within the colors and lighting of your surroundings more
            than your expectation. Since our meetings take place in your home or
            office, we’ll work with you to help visualize a design solution that
            aligns with your taste, space, and budget, Also our team will guide
            you.
          </p>
          <div className="flex flex-col w-full">
            <Button
              className="w-1/2 rounded-full mt-4"
              variant="outline"
              onClick={() => {
                router.push('/about');
              }}
            >
              More About Us
            </Button>
          </div>
        </div>
        <div className="md:relative flex flex-col space-y-2 w-full h-[600px] md:h-[300px]">
          <div className="md:absolute top-0 left-0 w-full md:w-[298px] h-[268px] bg-yellow-500 z-10"></div>
          <div className="md:absolute bottom-0 right-0 w-full md:w-[298px] h-[268px] bg-blue-800 lg:mr-10"></div>
        </div>
      </div>
    </div>
  );
}
