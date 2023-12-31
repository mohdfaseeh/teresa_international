import Footer from '@/components/footer/footer';
import AddressModal from '@/components/modal/address-modal';
import LoginModal from '@/components/modal/login-modal';
import RegisterModal from '@/components/modal/register-modal';
import Navbar from '@/components/navbar/navbar';
import getCurrentUser from '@/getCurrentUser';
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

export default async function RootLayout({ children }) {
  const user = await getCurrentUser();
  return (
    <html lang="en" suppressHydrationWarning className="min-h-screen">
      <body className={nunitio.className}>
        <ClientProvider session={user}>
          <Navbar currentUser={user} />
          <LoginModal currentUser={user} />
          <RegisterModal currentUser={user} />
          <AddressModal />
          {children}
          <Footer />
        </ClientProvider>
      </body>
    </html>
  );
}
