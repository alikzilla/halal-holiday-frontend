import { IHotel } from "@/types/hotels";
import React from "react";
import Image from "next/image";
import { Body2, Heading4, Title2 } from "@/components/common";
import Link from "next/link";

interface HotelCard extends IHotel {
  guests?: string;
}

const HotelCardType1: React.FC<HotelCard> = ({
  id,
  name,
  location,
  duration,
  bedType,
  price,
  taxesIncluded,
  guests = "2 adults",
}) => {
  return (
    <Link href={`/hotel/hotels/${id}`} className="flex flex-col items-start gap-[8px] overflow-hidden border border-[1px] border-[#F2F2F2] p-2 rounded-xl shadow-sm">
      <div className="relative">
        <div className="absolute z-[1] bottom-0 left-0 w-full h-1/3 backdrop-blur-md mask-gradient rounded-lg"></div>
        <div className="absolute z-[1] top-3 right-3 bg-[#FFFFFF33]/20 backdrop-blur-lg flex items-center gap-2 text-white rounded-[30px] py-1 px-3">
          <Image
            src={"/assets/icons/star-yellow.svg"}
            alt="src"
            height={18}
            width={18}
          />{" "}
          4.5
        </div>
        <Image
          src={
            "https://s3-alpha-sig.figma.com/img/0521/19a6/f83895396bca3c793d76d39a4341d326?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=FCET7ZSj6Q7vx0ZU7YU~ggOhWe-5a42~R3mSgdG0hyNeLGDS6UK4NzUVlYG4L-gXYNeBtRZMMtdYAHoSCAJuAFeO7zqbUGgT39gBLZFo2j1q3Pgh6Dg77hDWh0mW9se5IXKDCKnV5aVLpgBuBlMFjHZJJHHX8ocT1pErOKZa2RIF6B6enxoGOPxiTMywiedpX-Il0dT~Zd2s~ezuAcSFafAkFpzAbNoGb9KQwveWTkbUv1oHUKisLmufrkeaQzqbfI25PK7OsN4rgleYDg95vGPgRUi3po5PTXTnyZGT8JnB8~eyICAki0PgA~w5G3upPJGdXywJq~lko1ljkz4TAw__"
          }
          alt={name}
          width={100}
          height={100}
          className="w-full h-48 object-cover rounded-xl"
        />
      </div>

      <div className="flex flex-col items-start gap-6 p-2">
        <Heading4 className="text-[#222222]">{name}</Heading4>
        <Body2 className="inline-flex items-center text-[#ADADAD]">
          <Image
            src={"/assets/icons/location-grey.svg"}
            alt="location"
            width={20}
            height={20}
          />{" "}
          {location}
        </Body2>
        <Body2 className="text-black py-2 px-3 bg-[#F9F9F9] rounded-[30px]">
          {bedType}
        </Body2>
        <div className="flex flex-col items-start gap-1">
          <Title2>
            {duration}, {guests}
          </Title2>
          <Heading4 className="text-[#266462]">${price.toFixed(2)}</Heading4>
          {taxesIncluded && <Title2>Include taxes and chagers</Title2>}
        </div>
      </div>
    </Link>
  );
};

export default HotelCardType1;
