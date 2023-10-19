import Header from '@/components/header';
import CustomerFeedbackCaurasel from './customer-feedback-caurasel';

const CustomersFeedback = () => {
  return (
    <div className="flex flex-col gap-10 mt-24 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-64">
      <Header title="CUSTOMERS FEEDBACK" centered={true} />
      <CustomerFeedbackCaurasel />
    </div>
  );
};

export default CustomersFeedback;
