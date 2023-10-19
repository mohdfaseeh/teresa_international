'use client';
import Header from '@/components/header';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

const WelcomePage = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col lg:flex-row space-y-4 mt-24 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-64">
      <div className="flex flex-col space-y-1 w-full">
        <Header
          title="Welcome to Teresa International"
          description={
            <h3 className="text-xl font-semibold text-primary">
              We are the best Interior designer since 1975.
            </h3>
          }
        />
        <p className="text-base text-muted-foreground">
          Interior brings 41 years of interior designs experience right to your
          home or office. Our design professionals are equipped to help you
          determine the products and design that work best for our customers
          within the colors and lighting of your surroundings more than your
          expectation. Since our meetings take place in your home or office,
          we’ll work with you to help visualize a design solution that aligns
          with your taste, space, and budget, Also our team will guide you.
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
      <div className="lg:relative flex flex-col gap-4 w-full lg:w-[900px] h-[600px] lg:h-[300px]">
        <div className="lg:absolute top-0 left-0 w-full lg:w-[298px] h-[268px] bg-yellow-500 z-10"></div>
        <div className="lg:absolute bottom-0 right-0 w-full lg:w-[298px] h-[268px] bg-blue-800"></div>
      </div>
    </div>
  );
};

export default WelcomePage;
