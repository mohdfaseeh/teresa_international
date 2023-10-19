import Header from '@/components/header';
import ClientProvider from '@/providers/client-provider';

import image from '@/public/paintssas-kKXG--621x414@LiveMint_1626329037203.jpg';
import { Clock3, Mail, Phone, Store } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import banner from '@/public/download.jpeg';
import Image from 'next/image';

const ContactPage = () => {
  return (
    <ClientProvider>
      <div className="pt-16 min-h-screen">
        <div className="relative h-72 w-full">
          <Image src={banner} alt="about" className="w-full h-72" />
          <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl font-semibold text-white uppercase">
            Contact Us
          </h2>
        </div>
        <div className="pt-10 flex flex-col gap-10 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-64">
          <Header
            title="GET TOUCH WITH US"
            description={
              <p className="text-base text-muted-foreground">
                If you would like to get in contact with the Interior, you have
                a number of options you can call or mail to below option, our
                team will support you as soon as possible.
              </p>
            }
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="flex flex-col space-y-4 w-full">
              <Image src={image} className="w-full h-72" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex space-x-4">
                  <Store />
                  <div className="flex flex-col space-y-1">
                    <h4 className="text-base font-semibold">Address</h4>
                    <p className="text-sm text-muted-foreground">
                      Plot no. 350, Behind Gol Kothi, Deputy Ganj, Moradabad
                      244001
                    </p>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <Phone />
                  <div className="flex flex-col space-y-1">
                    <h4 className="text-base font-semibold">Phone</h4>
                    <p className="text-sm text-muted-foreground">
                      +91 8742961513
                    </p>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <Mail />
                  <div className="flex flex-col space-y-1">
                    <h4 className="text-base font-semibold">Email Address</h4>
                    <p className="text-sm text-muted-foreground">
                      info@teresaintl.com
                    </p>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <Clock3 />
                  <div className="flex flex-col space-y-1">
                    <h4 className="text-base font-semibold">Working Hours</h4>
                    <p className="text-sm text-muted-foreground">
                      Monday - Saturday: 09.00 to 18.00 Sunday Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col space-y-4 w-full">
              <Input placeholder="Your Name" />
              <Input placeholder="Your Email" />
              <Input placeholder="Your Phone" />
              <Textarea rows={5} placeholder="Your Message..." />
              <Button className="w-1/2">Send Message</Button>
            </div>
          </div>
        </div>
      </div>
    </ClientProvider>
  );
};

export default ContactPage;
