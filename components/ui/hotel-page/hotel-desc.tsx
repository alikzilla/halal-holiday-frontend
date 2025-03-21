const HotelDescription = ({ description }: { description: string }) => {
  return (
    <section id="overview" className="mt-6 p-6 bg-white shadow-sm">
      <h2 className="text-2xl font-bold mb-4">Description</h2>
      <p className="text-gray-700">{description}</p>
    </section>
  );
};

export default HotelDescription;
