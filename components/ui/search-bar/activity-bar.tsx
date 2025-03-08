const ActivitySearchBar = () => {
  return (
    <div className="w-full p-4 bg-gray-100 rounded-lg">
      <h2 className="text-lg font-semibold mb-4">ActivitySearchBar for Flights</h2>
      <div className="flex gap-4">
        <input type="text" placeholder="From" className="p-2 border rounded" />
        <input type="text" placeholder="To" className="p-2 border rounded" />
        <input type="date" className="p-2 border rounded" />
        <button className="bg-blue-500 text-white p-2 rounded">Search</button>
      </div>
    </div>
  );
};

export default ActivitySearchBar;
