const HotelThingsToKnow = ({ thingsToKnow }: { thingsToKnow: string[] }) => {
  return (
    <section id="things-to-know" className="mt-6 p-6 bg-white shadow-sm">
      <h2 className="text-2xl font-bold mb-4">Things to Know</h2>
      <ul className="list-disc list-inside">
        {thingsToKnow.map((item, index) => (
          <li key={index} className="text-gray-700">
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default HotelThingsToKnow;
