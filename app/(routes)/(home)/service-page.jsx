import Card from '@/components/card';
import Header from '@/components/header';
import image from '@/public/paintssas-kKXG--621x414@LiveMint_1626329037203.jpg';
const data = [
  {
    id: 1,
    title: 'Import',
    image: image,
    description:
      'We are the best Interior designer since 1975. Interior brings 41 years of interior designs experience right to home or office. Our design professionals are equipped to help you determine the products and design that work best for our customers within the colors and lighting of your we make more than your expectation and your dream designs.',
  },
  {
    id: 2,
    title: 'Export',
    image: image,
    description:
      'We are the best Interior designer since 1975. Interior brings 41 years of interior designs experience right to home or office. Our design professionals are equipped to help you determine the products and design that work best for our customers within the colors and lighting of your we make more than your expectation and your dream designs.',
  },
  {
    id: 3,
    title: 'Manufacturing',
    image: image,
    description:
      'We are the best Interior designer since 1975. Interior brings 41 years of interior designs experience right to home or office. Our design professionals are equipped to help you determine the products and design that work best for our customers within the colors and lighting of your we make more than your expectation and your dream designs.',
  },
];
const ServicePage = () => {
  return (
    <div className="flex flex-col gap-10 mt-24 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-64">
      <Header title="SERVICES WE DO" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {data.map((item) => (
          <Card
            key={item.id}
            className="flex flex-col space-y-4"
            title={item.title}
            image={item.image}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default ServicePage;
