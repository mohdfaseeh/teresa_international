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
import { signIn } from 'next-auth/react';
import * as z from 'zod';
import { Input } from '../ui/input';

const formSchema = z.object({
  email: z.string().email('Please enter a valid email'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
});

const LoginModal = ({ currentUser }) => {
  const loginState = useLoginModal();
  const registerState = useRegisterModal();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (data) => {
    signIn('credentials', {
      ...data,
      redirect: false,
    })
      .then((res) => {
        if (res?.ok) {
          loginState.onClose();
          alert('Login Successfull');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const toggleModal = () => {
    loginState.onClose();
    registerState.onOpen();
  };

  if (currentUser) {
    return null;
  }
  return (
    <Dialog open={loginState.isOpen} onOpenChange={loginState.onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Welcome Back</DialogTitle>
          {/* <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription> */}
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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
              New to Teresa International
              <Button
                variant="link"
                className="text-muted-foreground"
                onClick={toggleModal}
              >
                Sign Up
              </Button>
            </div>
            <DialogFooter>
              <Button type="submit">Login</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;
