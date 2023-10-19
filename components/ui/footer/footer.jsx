import { Clock3, Mail, Phone, Store } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="mt-4 h-max w-full bg-muted flex items-center justify-center">
      <div className="w-full h-full flex flex-col items-center justify-center gap-4 px-4 sm:px-8 md:px-16 lg:px-24 py-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          <div className="flex items-center space-x-2 col-span-1 md:col-span-2">
            <Store size={18} />
            <p className="text-sm ">
              Plot no. 350, Behind Gol Kothi, Deputy Ganj, Moradabad 244001
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <Phone size={18} />
            <p className="text-sm">+91 8742961513</p>
          </div>
          <div className="flex items-center space-x-2">
            <Mail size={18} />
            <p className="text-sm">info@teresaintl.com</p>
          </div>
          <div className="flex items-center space-x-2">
            <Clock3 size={18} />
            <p className="text-sm">
              Monday - Saturday: 09.00 to 18.00 Sunday Closed
            </p>
          </div>
        </div>

        <div className="text-primary text-sm">© 2021 Teresa International</div>
      </div>
    </footer>
  );
};

export default Footer;
