import { Clock3, Mail, Phone, Store } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="h-max w-full bg-muted flex items-center justify-center">
      <div className="w-full h-full flex flex-col items-center justify-center gap-4 px-4 sm:px-8 md:px-16 lg:px-24 py-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div className="flex items-center space-x-2">
            <Store size={18} />
            <p className="text-sm">256 Interrio the good, New York City</p>
          </div>
          <div className="flex items-center space-x-2">
            <Phone size={18} />
            <p className="text-sm">(+321) 567 89 0123</p>
          </div>
          <div className="flex items-center space-x-2">
            <Mail size={18} />
            <p className="text-sm">support@teresainternational.com</p>
          </div>
          <div className="flex items-center space-x-2">
            <Clock3 size={18} />
            <p className="text-sm">
              Monday - Sat Day: 09.00 to 18.00 Sunday Closed
            </p>
          </div>
        </div>

        <div className="text-primary text-sm">© 2021 Teresa International</div>
      </div>
    </footer>
  );
};

export default Footer;
