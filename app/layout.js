import Footer from '@/components/ui/footer/footer';
import Navbar from '@/components/ui/navbar/navbar';
import ClientProvider from '@/providers/client-provider';
import { Inter as FontSans } from 'next/font/google';
import './globals.css';

export const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata = {
  title: 'Teresa International',
  description: "India's best interior design company",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ClientProvider>
        <Navbar />
      </ClientProvider>
      <body className={fontSans.variable}>{children}</body>
      <ClientProvider>
        <Footer />
      </ClientProvider>
    </html>
  );
}
