const HotelReviews = ({
  reviews,
}: {
  reviews: { user: string; rating: number; comment: string }[];
}) => {
  return (
    <section id="reviews" className="mt-6 p-6 bg-white shadow-sm">
      <h2 className="text-2xl font-bold mb-4">Reviews</h2>
      <div className="space-y-4">
        {reviews.map((review, index) => (
          <div key={index} className="border p-4 rounded-lg">
            <h3 className="text-lg font-semibold">{review.user}</h3>
            <p className="text-yellow-500">★ {review.rating.toFixed(1)}</p>
            <p className="text-gray-700">{review.comment}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HotelReviews;
