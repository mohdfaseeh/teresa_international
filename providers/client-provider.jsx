'use client';

import { SessionProvider } from 'next-auth/react';
import React from 'react';

export default function Provider({ children, session }) {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  if (!mounted) return null;
  return <SessionProvider session={session}>{children}</SessionProvider>;
}
