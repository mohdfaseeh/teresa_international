'use client';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
const ProfilePage = () => {
  const router = useRouter();
  const { data } = useSession();
  const [name, setName] = useState('');
  const [password, setPassword] = useState({
    current: '',
    new: '',
  });

  useEffect(() => {
    if (data?.user?.name) setName(data?.user?.name);
  }, [data]);

  const handleAccountUpdate = async () => {
    await axios
      .post(`/api/${data?.user?.id}/account`, {
        name,
      })
      .then((res) => {
        console.log(res);
        router.refresh();
      })
      .catch((err) => console.log(err));
  };

  const handlePasswordUpdate = async () => {
    await axios
      .post(`/api/${data?.user?.id}/password`, {
        ...password,
      })
      .then((res) => {
        // console.log(res);
        router.refresh();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="mt-16 w-full h-[77vh] flex items-center justify-center">
      <Tabs defaultValue="account" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <Card>
            <CardHeader>
              <CardTitle>Account</CardTitle>
              <CardDescription>
                {
                  "Make changes to your account here. Click save when you're done."
                }
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={handleAccountUpdate}>Save changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="password">
          <Card>
            <CardHeader>
              <CardTitle>Password</CardTitle>
              <CardDescription>
                {
                  "Change your password here. After saving, you'll be logged out."
                }
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="current">Current password</Label>
                <Input
                  id="current"
                  type="password"
                  value={password.current}
                  onChange={(e) => {
                    setPassword({ ...password, current: e.target.value });
                  }}
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="new">New password</Label>
                <Input
                  id="new"
                  type="password"
                  value={password.new}
                  onChange={(e) =>
                    setPassword({ ...password, new: e.target.value })
                  }
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={handlePasswordUpdate}>Save password</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ProfilePage;
