import React from "react";
import Image from "next/image";
import { Body2, Heading5, Title1, Title2 } from "@/components/common";
import { Button, Progress } from "@/components/ui";

interface Review {
  rating: number;
  date?: string;
  reviewCount?: number;
  categories?: {
    name: string;
    score: number;
  }[];
  comment: string;
  user: string;
  travelType: string;
}

const HotelReviews = () => {
  const categories: { name: string; score: number }[] = [
    { name: "Cleanliness", score: 4.9 },
    { name: "Service", score: 4.8 },
    { name: "Comfort", score: 4.8 },
    { name: "Communication", score: 4.8 },
    { name: "Accuracy", score: 4.8 },
    { name: "Value", score: 4.7 },
    { name: "Location", score: 4.7 },
    { name: "Amenities", score: 4.7 },
  ];

  const reviews: Review[] = [
    {
      rating: 5.0,
      date: "24 Sept, 2023",
      reviewCount: 34,
      comment:
        "An Anglican church designed by Sir Christopher Wren, known for its rich history and architectural significance. An Anglican church designed by Sir Christopher Wren, known for its rich history and architectural significance.",
      user: "John Doe",
      travelType: "Traveled with partner",
    },
    {
      rating: 4.5,
      date: "24 Sept, 2023",
      comment:
        "An Anglican church designed by Sir Christopher Wren, known for its rich history and architectural significance. An Anglican church designed by Sir Christopher Wren, known for its rich history and architectural significance.",
      user: "John Doe",
      travelType: "Traveled with partner",
    },
    {
      rating: 4.6,
      date: "24 Sept, 2023",
      comment:
        "An Anglican church designed by Sir Christopher Wren, known for its rich history and architectural significance. An Anglican church designed by Sir Christopher Wren, known for its rich history and architectural significance.",
      user: "John Doe",
      travelType: "Traveled with partner",
    },
  ];

  // const renderStars = (rating: number) => {
  //   const stars = [];
  //   const fullStars = Math.floor(rating);
  //   const hasHalfStar = rating % 1 >= 0.5;

  //   for (let i = 0; i < fullStars; i++) {
  //     stars.push(
  //       <span key={`full-${i}`}>
  //         <Image
  //           src={"/assets/icons/star-yellow.svg"}
  //           alt="star"
  //           width={20}
  //           height={20}
  //         />
  //       </span>
  //     );
  //   }

  //   if (hasHalfStar) {
  //     stars.push(
  //       <span key="half">
  //         <Image
  //           src={"/assets/icons/star-gray.svg"}
  //           alt="star"
  //           width={20}
  //           height={20}
  //         />
  //       </span>
  //     );
  //   }

  //   const emptyStars = 5 - stars.length;
  //   for (let i = 0; i < emptyStars; i++) {
  //     stars.push(
  //       <span key={`empty-${i}`} className="text-gray-300">
  //         <Image
  //           src={"/assets/icons/star-gray.svg"}
  //           alt="star"
  //           width={20}
  //           height={20}
  //         />
  //       </span>
  //     );
  //   }

  //   return stars;
  // };

  return (
    <section id="reviews" className="mt-12 p-6 bg-white">
      <div className="flex flex-col items-start gap-8">
        <div className="w-full">
          <Heading5>Reviews</Heading5>
          <div className="w-full h-[1px] bg-[#F2F2F2] mt-2"></div>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-start gap-4 mr-2">
          <Button type="black">5.0</Button>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex items-center gap-[5.5px]">
              {[...Array(5)].map((_, i) => (
                <Image
                  key={`full-${i}`}
                  src={"/assets/icons/star-yellow.svg"}
                  alt="star"
                  width={16}
                  height={16}
                />
              ))}
            </div>
            <Title1 className="text-[#222] underline">34 reviews</Title1>
          </div>
        </div>

        <div>
          {categories && (
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
              {categories.map((category, i) => (
                <div
                  key={i}
                  className="w-full flex flex-col items-start justify-start"
                >
                  {/* ... (keep existing category content) */}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="flex flex-col items-start gap-4 border border-[#F9F9F9] p-4 rounded-xl"
            >
              {/* ... (keep existing review content) */}
            </div>
          ))}
        </div>

        <div className="w-full flex justify-center">
          <Button type="secondary">Load more</Button>
        </div>
      </div>
    </section>
  );
};

export default HotelReviews;
