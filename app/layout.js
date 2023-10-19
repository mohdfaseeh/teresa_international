import Footer from '@/components/footer/footer';
import Navbar from '@/components/navbar/navbar';
import ClientProvider from '@/providers/client-provider';
import { Nunito } from 'next/font/google';
import './globals.css';

const nunitio = Nunito({
  subsets: ['latin'],
});

export const metadata = {
  title: 'Teresa International',
  description: "India's best interior design company",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className="min-h-screen">
      <ClientProvider>
        <Navbar />
      </ClientProvider>
      <body className={nunitio.className}>{children}</body>
      <ClientProvider>
        <Footer />
      </ClientProvider>
    </html>
  );
}
