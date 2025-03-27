import React from "react";
import Button from "../button/button";
import { Heading4, Title1 } from "@/components/common";
import Link from "../link/link";
import Image from "next/image";

const HotelHeader = ({
  name,
  address,
  rating,
}: {
  name: string;
  address: string;
  rating: string;
}) => {
  const numericRating = parseFloat(rating);
  const fullStars = Math.floor(numericRating);
  const hasHalfStar = numericRating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="w-full flex items-center justify-between">
      <div className="flex flex-col items-center justify-start gap-2">
        <Heading4 className="text-[#222]">{name}</Heading4>
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

      <div className="flex items-center justify-end gap-2">
        <div className="flex flex-col items-end justify-end mr-2">
          <div className="flex items-center gap-[5.5px]">
            {[...Array(fullStars)].map((_, i) => (
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

            {[...Array(emptyStars)].map((_, i) => (
              <Image
                key={`empty-${i}`}
                src={"/assets/icons/star-gray.svg"}
                alt="star"
                width={16}
                height={16}
              />
            ))}
          </div>
          <Title1 className="text-[#222] underline">34 reviews</Title1>
        </div>
        <Button type="black">{Number(rating).toFixed(1)}</Button>
        <Button type="secondary">Share</Button>
      </div>
    </div>
  );
};

export default HotelHeader;
