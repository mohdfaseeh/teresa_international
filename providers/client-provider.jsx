'use client';
import { useEffect, useState } from 'react';

const ClientProvider = ({ children }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return <div>{children}</div>;
};

export default ClientProvider;
