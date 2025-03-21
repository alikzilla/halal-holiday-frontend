const HotelRooms = ({
  rooms,
}: {
  rooms: { type: string; features: string[]; price: number }[];
}) => {
  return (
    <section id="rooms" className="mt-6 p-6 bg-white shadow-sm">
      <h2 className="text-2xl font-bold mb-4">Rooms</h2>
      <div className="space-y-4">
        {rooms.map((room, index) => (
          <div key={index} className="border p-4 rounded-lg">
            <h3 className="text-xl font-semibold">{room.type}</h3>
            <ul className="list-disc list-inside mt-2">
              {room.features.map((feature, idx) => (
                <li key={idx} className="text-gray-700">
                  {feature}
                </li>
              ))}
            </ul>
            <p className="text-lg font-semibold mt-2">
              ${room.price.toFixed(2)} per night
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HotelRooms;
