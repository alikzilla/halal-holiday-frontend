const HotelSurroundings = ({ surroundings }: { surroundings: string[] }) => {
  return (
    <section id="hotel-surroundings" className="mt-6 p-6 bg-white shadow-sm">
      <h2 className="text-2xl font-bold mb-4">Hotel Surroundings</h2>
      <ul className="list-disc list-inside">
        {surroundings.map((place, index) => (
          <li key={index} className="text-gray-700">
            {place}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default HotelSurroundings;
