"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Body2, Heading4, Heading5, Title2 } from "@/components/common";
import { IHotel } from "@/core/types/hotels";
import { useSearchParams } from "next/navigation";

const HotelCard1: React.FC<IHotel> = ({
  id,
  title,
  source,
  photo,
  url,
  stars,
  score,
  body,
  is_top,
  city_title,
  country_title,
  score_text,
  reviews,
  price,
}) => {
  const searchParams = useSearchParams();

  const buildHotelUrl = () => {
    const params = new URLSearchParams();

    params.set("id", id.toString());

    if (searchParams.has("checkIn"))
      params.set("checkIn", searchParams.get("checkIn")!);
    if (searchParams.has("checkOut"))
      params.set("checkOut", searchParams.get("checkOut")!);
    if (searchParams.has("adults"))
      params.set("adults", searchParams.get("adults")!);
    if (searchParams.has("children"))
      params.set("children", searchParams.get("children")!);
    if (searchParams.has("chage"))
      params.set("chage", searchParams.get("chage")!);

    return `/hotel/${url}?${params.toString()}`;
  };

  return (
    <Link
      href={buildHotelUrl()}
      className="flex flex-col items-start gap-[8px] overflow-hidden border border-[1px] border-[#F2F2F2] p-2 rounded-xl shadow-sm transition-all duration-300 hover:shadow-lg"
    >
      <div className="relative w-full aspect-[4/3]">
        <div className="absolute z-[1] bottom-0 left-0 w-full h-1/3 backdrop-blur-md mask-gradient rounded-lg"></div>
        <div className="absolute z-[1] top-3 right-3 bg-[#FFFFFF33]/20 backdrop-blur-lg flex items-center gap-2 text-white rounded-[30px] py-1 px-3">
          <Image
            src={"/assets/icons/star-yellow.svg"}
            alt="src"
            height={18}
            width={18}
          />{" "}
          {stars}
        </div>
        <Image
          src={`https://halalholidaycheck.com/images/properties/${photo}`}
          alt={title || "Hotel image"}
          fill
          className="object-cover rounded-xl"
        />
      </div>

      <div className="flex flex-col items-start gap-2 p-2 w-full">
        <Heading5 className="text-[#222222] line-clamp-2">{title}</Heading5>
        <Body2 className="inline-flex items-center gap-1 text-[#ADADAD]">
          <Image
            src={"/assets/icons/location-grey.svg"}
            alt="location"
            width={14}
            height={14}
          />{" "}
          {city_title}, {country_title}
        </Body2>
        <div className="flex flex-col items-start gap-1 w-full mt-2">
          <Heading4 className="text-[#266462]">
            ${price && price.toFixed(2)}
          </Heading4>
          <Title2 className="text-[#919191] text-sm">
            Include taxes and charges
          </Title2>
        </div>
      </div>
    </Link>
  );
};

export default HotelCard1;
