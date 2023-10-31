'use client';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useForm } from 'react-hook-form';

import useAddressModal from '@/hooks/use-address-modal';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import * as z from 'zod';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import { Textarea } from '../ui/textarea';

const formSchema = z.object({
  name: z.string({ message: 'Name is required' }),
  phone: z
    .string({ message: 'Phone is required' })
    .min(10, { message: 'Phone number must be 10 digits' })
    .max(10, { message: 'Phone number must be 10 digits' }),
  address: z.string({ message: 'Address is required' }),
  city: z.string({ message: 'City is required' }),
  state: z.string({ message: 'State is required' }),
  pincode: z
    .string({ message: 'Pincode is required' })
    .min(6, { message: 'Pincode must be 6 digits' })
    .max(6, { message: 'Pincode must be 6 digits' }),
  locality: z.string({ message: 'Locality is required' }),
  type: z.enum(['Home', 'Work'], { required_error: 'Type is required' }),
});

const AddressModal = () => {
  const router = useRouter();
  const addressState = useAddressModal();
  const { data: user } = useSession();
  const { initialData } = addressState;

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: initialData?.name || '',
      phone: initialData?.phone || '',
      address: initialData?.address || '',
      city: initialData?.city || '',
      state: initialData?.stateOrProvince || '',
      pincode: initialData?.postalCode || '',
      locality: initialData?.locality || '',
      type: initialData?.type || 'Home',
    },
    values: {
      name: initialData?.name || '',
      phone: initialData?.phone || '',
      address: initialData?.address || '',
      city: initialData?.city || '',
      state: initialData?.stateOrProvince || '',
      pincode: initialData?.postalCode || '',
      locality: initialData?.locality || '',
      type: initialData?.type || 'Home',
    },
  });

  const onSubmit = async (data) => {
    await axios
      .post(`/api/address/${user?.user?.id}`, data)
      .then((res) => {
        router.refresh();
        addressState.onClose();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onEdit = async (data) => {
    await axios
      .put(`/api/address/${user?.user?.id}`, {
        ...data,
        _id: initialData?._id,
      })
      .then((res) => {
        router.refresh();
        addressState.onClose();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Dialog open={addressState.isOpen} onOpenChange={addressState.onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{initialData?._id ? 'Edit' : 'Add'} Address</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={
              initialData?._id
                ? form.handleSubmit(onEdit)
                : form.handleSubmit(onSubmit)
            }
            className="space-y-2"
          >
            <FormField
              control={form.control}
              required
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
              required
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
              required
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Address</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Address" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              required
              name="city"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>City</FormLabel>
                  <FormControl>
                    <Input placeholder="City" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              required
              name="state"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>State</FormLabel>
                  <FormControl>
                    <Input placeholder="State" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              required
              name="pincode"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Pincode</FormLabel>
                  <FormControl>
                    <Input placeholder="Pincode" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              required
              name="locality"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Locality</FormLabel>
                  <FormControl>
                    <Input placeholder="Locality" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="type"
              required
              render={({ field }) => (
                <FormItem className="space-y-1">
                  <FormLabel>Home type</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex  space-y-1"
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="Home" />
                        </FormControl>
                        <FormLabel className="font-normal">Home</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="Work" />
                        </FormControl>
                        <FormLabel className="font-normal">
                          Work/Office
                        </FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              <Button
                type="submit"
                className="w-full bg-primary text-white py-2 rounded"
              >
                {initialData?._id ? 'Update' : 'Add'} Address
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default AddressModal;
