import ClientProvider from '@/providers/client-provider';
import CustomersFeedback from './customers-feedback';
import HeroCaurasel from './hero-caurasel';
import ServicePage from './service-page';
import WelcomePage from './welcome';

export default function Home() {
  return (
    <div className="mt-16 w-full h-full flex flex-col gap-4">
      <ClientProvider>
        <HeroCaurasel />
        <WelcomePage />
        <ServicePage />
        <CustomersFeedback />
      </ClientProvider>
    </div>
  );
}
