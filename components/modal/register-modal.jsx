'use client';
import { Button } from '@/components/ui/button';
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
import useLoginModal from '@/hooks/use-login-modal';
import { useForm } from 'react-hook-form';

import useRegisterModal from '@/hooks/use-register-modal';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import * as z from 'zod';
import { Input } from '../ui/input';

const formSchema = z.object({
  name: z.string().min(3, 'Name must be at least 3 characters'),
  email: z.string().email('Please enter a valid email'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
});

const RegisterModal = ({ currentUser }) => {
  const loginState = useLoginModal();
  const registerState = useRegisterModal();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  const onSubmit = async (data) => {
    await axios
      .post('/api/register', data)
      .then((res) => {
        if (res?.status === 201) {
          registerState.onClose();
          loginState.onOpen();
        } else throw new Error(res?.data?.message);
      })
      .catch((err) => {
        console.log(err?.response?.data?.message);
      });
  };

  const toggleModal = () => {
    registerState.onClose();
    loginState.onOpen();
  };

  if (currentUser) {
    return null;
  }

  return (
    <Dialog open={registerState.isOpen} onOpenChange={registerState.onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Sign Up</DialogTitle>
          {/* <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription> */}
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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
              required
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input placeholder="Password" {...field} type="password" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className=" text-sm flex items-center">
              Already have an account?{' '}
              <Button
                variant="link"
                className="text-muted-foreground"
                onClick={toggleModal}
              >
                Login
              </Button>
            </div>
            <DialogFooter>
              <Button type="submit">Sign up</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default RegisterModal;
