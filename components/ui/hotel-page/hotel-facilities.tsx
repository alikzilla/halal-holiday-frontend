const HotelFacilities = ({ facilities }: { facilities: string[] }) => {
  return (
    <section id="general-facilities" className="mt-6 p-6 bg-white shadow-sm">
      <h2 className="text-2xl font-bold mb-4">General Facilities</h2>
      <ul className="list-disc list-inside">
        {facilities.map((facility, index) => (
          <li key={index} className="text-gray-700">
            {facility}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default HotelFacilities;
