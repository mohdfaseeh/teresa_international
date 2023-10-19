import Card from '@/components/card';
import Header from '@/components/header';
import image from '@/public/paintssas-kKXG--621x414@LiveMint_1626329037203.jpg';
const data = [
  {
    id: 1,
    title: 'Residential Design',
    image: image,
  },
  {
    id: 2,
    title: 'Commercial Design',
    image: image,
  },
  {
    id: 3,
    title: 'Hospitality Design',
    image: image,
  },
  {
    id: 4,
    title: 'Corporate Design',
    image: image,
  },
  {
    id: 5,
    title: 'Restaurant Design',
    image: image,
  },
  {
    id: 6,
    title: 'Insdustrial Design',
    image: image,
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
