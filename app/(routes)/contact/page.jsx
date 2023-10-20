'use client';
import Header from '@/components/header';
import ClientProvider from '@/providers/client-provider';

import image from '@/public/paintssas-kKXG--621x414@LiveMint_1626329037203.jpg';
import { Clock3, Mail, Phone, Store } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import banner from '@/public/download.jpeg';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

const formSchema = z.object({
  email: z.string().email('Please enter a valid email'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  name: z.string().min(2, 'Please enter a valid name'),
  message: z.string().min(10, 'Please enter a valid message'),
});

const ContactPage = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      phone: '',
      name: '',
      message: '',
    },
  });

  const onSubmit = async (data) => {
    await axios
      .post('/api/contact', data)
      .then((res) => {
        if (res?.status === 200) {
          alert('Your message has been sent successfully');
          form.reset();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
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
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-2"
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone</FormLabel>
                      <FormControl>
                        <Input placeholder="Phone" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Message" {...field} rows={5} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="text-sm flex justify-end">
                  <Button type="submit">Send</Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </ClientProvider>
  );
};

export default ContactPage;
