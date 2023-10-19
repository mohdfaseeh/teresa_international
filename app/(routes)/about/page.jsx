import Card from '@/components/card';
import Header from '@/components/header';

import banner from '@/public/download.jpeg';
import image from '@/public/paintssas-kKXG--621x414@LiveMint_1626329037203.jpg';
import Image from 'next/image';

const AboutPage = () => {
  return (
    <div className="pt-16 min-h-screen">
      <div className="relative h-72 w-full">
        <Image src={banner} alt="about" className="w-full h-72" />
        <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl font-semibold text-white uppercase">
          About Us
        </h2>
      </div>
      <div className="pt-10 flex flex-col gap-10 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-64">
        <Header title="ABOUT TERESA INTERNATIONAL" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="flex flex-col space-y-4 w-full">
            <h3 className="text-xl font-semibold text-primary">
              We are the best Interior designer since 1975.
            </h3>
            <p className="text-base text-muted-foreground">
              Interior brings 41 years of interior designs experience right to
              home or office. Our design professionals are equipped to help you
              determine the products and design that work best for our customers
              within the colors and lighting of your we make more than your
              expectation and your dream designs.
            </p>
            {/* <div className="grid grid-cols-2 gap-4">
            <Image src={image} className="w-full h-20"/>
            <div className="flex flex-col space-y-1 justify-center">
              <h2 className="text-xl">Fasseh Mohd,</h2>
              <p className="text-sm text-muted-foreground italic">
                CEO & Founder
              </p>
            </div>
          </div> */}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <Card
              title="Our Mission"
              description="To work in accordance with the clients’ requirement and exceed their expectations in terms of quality, cost control and time management."
              image={image}
            />
            <Card
              title="Our Vision"
              description="To consistently deliver eco-friendly world class finishes in our interior design concepts, execute & complete all projects in such a way."
              image={image}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
