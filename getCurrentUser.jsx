import { getServerSession } from 'next-auth/next';

import { authOptions } from './lib/auth-options';
import User from './models/user';
export async function getSession() {
  return await getServerSession(authOptions);
}

export default async function getCurrentUser() {
  try {
    const session = await getSession();

    if (!session || !session?.user?.email) {
      return null;
    }

    const currentUser = await User.findOne({ email: session.user.email });

    if (!currentUser) {
      return null;
    }
    const user = {
      _id: currentUser._id,
      email: currentUser.email,
      name: currentUser.name,
      avatar: currentUser.avatar,
    };

    return JSON.stringify(user);
  } catch (err) {
    return null;
  }
}
