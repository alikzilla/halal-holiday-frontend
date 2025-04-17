import React from "react";
import { Button, Link } from "@/components/ui";
import { Heading4, Title1 } from "@/components/common";
import Image from "next/image";

const HotelHeader = ({
  title,
  address,
  rating,
}: {
  title: string;
  address: string;
  rating: string;
}) => {
  const numericRating = parseFloat(rating);
  const fullStars = Math.floor(numericRating);
  const hasHalfStar = numericRating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
      <div className="flex flex-col items-start justify-start gap-2">
        <Heading4 className="text-[#222]">{title}</Heading4>
        <span className="w-full flex items-center justify-start gap-[0.5px]">
          <Image
            src={"/assets/icons/location-grey.svg"}
            alt="location"
            width={16}
            height={16}
          />
          <Link href={"#"} type={2} className="text-[#919191] p-0">
            {address}
          </Link>
        </span>
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-end gap-2 w-full md:w-auto">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-[5.5px]">
            {[...Array(rating)].map((_, i) => (
              <Image
                key={`full-${i}`}
                src={"/assets/icons/star-yellow.svg"}
                alt="star"
                width={16}
                height={16}
              />
            ))}
            {hasHalfStar && (
              <Image
                src={"/assets/icons/star-half.svg"}
                alt="star"
                width={16}
                height={16}
              />
            )}
            {[...Array(rating)].map((_, i) => (
              <Image
                key={`empty-${i}`}
                src={"/assets/icons/star-gray.svg"}
                alt="star"
                width={16}
                height={16}
              />
            ))}
          </div>
          <Button type="black" className="text-sm">
            {Number(rating).toFixed(1)}
          </Button>
        </div>
        <Button type="secondary" className="text-sm">
          Share
        </Button>
      </div>
    </div>
  );
};

export default HotelHeader;
