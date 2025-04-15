import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Body2, Heading3, Heading5, Title2 } from "@/components/common";
import { IHotel } from "@/core/types/hotels";

const TourCard: React.FC<IHotel> = ({
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
  return (
    <Link
      href={`/tour/${id}`}
      className="w-full border border-[#F2F2F2] rounded-xl overflow-hidden shadow-sm flex cursor-pointer transition-all duration-300 hover:shadow-lg"
    >
      {/* Image with rating badge */}
      <div className="relative p-2">
        <div className="absolute z-[1] bottom-2 left-2 right-2 h-1/3 backdrop-blur-md mask-gradient rounded-lg"></div>
        <div className="absolute z-[1] top-5 right-5 bg-[#FFFFFF33]/20 backdrop-blur-lg flex items-center gap-2 text-white rounded-[30px] py-1 px-3">
          <Image
            src={"/assets/icons/star-yellow.svg"}
            alt="src"
            height={18}
            width={18}
          />{" "}
          {score}
        </div>
        <Image
          src={
            "https://s3-alpha-sig.figma.com/img/0521/19a6/f83895396bca3c793d76d39a4341d326?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=FCET7ZSj6Q7vx0ZU7YU~ggOhWe-5a42~R3mSgdG0hyNeLGDS6UK4NzUVlYG4L-gXYNeBtRZMMtdYAHoSCAJuAFeO7zqbUGgT39gBLZFo2j1q3Pgh6Dg77hDWh0mW9se5IXKDCKnV5aVLpgBuBlMFjHZJJHHX8ocT1pErOKZa2RIF6B6enxoGOPxiTMywiedpX-Il0dT~Zd2s~ezuAcSFafAkFpzAbNoGb9KQwveWTkbUv1oHUKisLmufrkeaQzqbfI25PK7OsN4rgleYDg95vGPgRUi3po5PTXTnyZGT8JnB8~eyICAki0PgA~w5G3upPJGdXywJq~lko1ljkz4TAw__"
          }
          alt={title || "Tour title"}
          width={100}
          height={100}
          className="w-[330px] h-[250px] object-cover rounded-xl"
        />
      </div>

      {/* Content */}
      <div className="w-full flex items-start justify-between p-2">
        <div>
          {/* Hotel name and location */}
          <div className="mb-4 pt-2">
            <Heading5 className="text-[#222] mb-2">{title}</Heading5>
            <Body2 className="text-[#ADADAD] flex items-center gap-1">
              <Image
                src="/assets/icons/location-grey.svg"
                alt="location"
                width={14}
                height={14}
              />
              {city_title}, {country_title}
            </Body2>
          </div>

          {/* <div className="mb-4 flex items-center gap-1">
            <Body2 className="text-black py-2 px-3 bg-[#F9F9F9] rounded-[30px]">
              {duration}
            </Body2>
            <Body2 className="text-black py-2 px-3 bg-[#F9F9F9] rounded-[30px]">
              {bedType}
            </Body2>
          </div> */}
        </div>

        <div className="flex flex-col h-full justify-between p-2">
          <div className="flex justify-end items-center mb-4">
            {score_text && (
              <Body2 className="bg-[#F9F9F9] text-[#222] px-2 py-1 rounded-full">
                {score_text}
              </Body2>
            )}
          </div>

          {/* Price section */}
          <div className="text-right">
            <div className="w-full flex items-end justify-end gap-2 mb-1 text-right">
              <Heading3 className="text-[#266462] text-right font-semibold">
                ${price && price.toFixed(2)}
              </Heading3>
            </div>
            <Title2 className="text-[#919191]">
              Include taxes and charges
            </Title2>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default TourCard;
