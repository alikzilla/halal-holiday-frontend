import React from "react";
import HotelSingle from "@/components/pages/hotel/hotels/hotel-single";
import { Hotel } from "@/types/hotels";

const hotels: Hotel[] = [
  {
    slug: "the-ritz-london",
    name: "The Ritz London",
    address:
      "150 Piccadilly, Westminster Borough, London, W1J 9BR, United Kingdom",
    rating: 5.0,
    images: [
      "https://s3-alpha-sig.figma.com/img/3c83/c7a0/ad68ec4dc893e91231bcacd5eead9c69?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=NJIS7FfpavDcR9Qr6lVrJt1B7FH2sDvHjIL5CHYO31r-2scakR-Es9rQE5n0Bv0YGyOj69rVH55yoGNlrZj7-QaddyhK0XZfI96KqprdJXQf9nopN4kdDMQOYr7hG3XYIwf9AB1bCSu1Pv8Si~VEn5xKROT87rUeq8GvunCgB9luMPvyVKSMsUIrSyqdYjTMb3cln8aoRBrh2QIMHIJCeGVxQCJXTOWcEecuBwA9WRIbHvAm0CLxDVIT2goHLM0l5-5vDfGx5zoV6y99fraeatIdg2jTR1X0zFc9cWmhhTzM84A4kH6vfHofwLNqEynN8UICJu6wztiH~YmpApIKfg__",
      "https://s3-alpha-sig.figma.com/img/3c83/c7a0/ad68ec4dc893e91231bcacd5eead9c69?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=NJIS7FfpavDcR9Qr6lVrJt1B7FH2sDvHjIL5CHYO31r-2scakR-Es9rQE5n0Bv0YGyOj69rVH55yoGNlrZj7-QaddyhK0XZfI96KqprdJXQf9nopN4kdDMQOYr7hG3XYIwf9AB1bCSu1Pv8Si~VEn5xKROT87rUeq8GvunCgB9luMPvyVKSMsUIrSyqdYjTMb3cln8aoRBrh2QIMHIJCeGVxQCJXTOWcEecuBwA9WRIbHvAm0CLxDVIT2goHLM0l5-5vDfGx5zoV6y99fraeatIdg2jTR1X0zFc9cWmhhTzM84A4kH6vfHofwLNqEynN8UICJu6wztiH~YmpApIKfg__",
      "https://s3-alpha-sig.figma.com/img/3c83/c7a0/ad68ec4dc893e91231bcacd5eead9c69?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=NJIS7FfpavDcR9Qr6lVrJt1B7FH2sDvHjIL5CHYO31r-2scakR-Es9rQE5n0Bv0YGyOj69rVH55yoGNlrZj7-QaddyhK0XZfI96KqprdJXQf9nopN4kdDMQOYr7hG3XYIwf9AB1bCSu1Pv8Si~VEn5xKROT87rUeq8GvunCgB9luMPvyVKSMsUIrSyqdYjTMb3cln8aoRBrh2QIMHIJCeGVxQCJXTOWcEecuBwA9WRIbHvAm0CLxDVIT2goHLM0l5-5vDfGx5zoV6y99fraeatIdg2jTR1X0zFc9cWmhhTzM84A4kH6vfHofwLNqEynN8UICJu6wztiH~YmpApIKfg__",
      "https://s3-alpha-sig.figma.com/img/3c83/c7a0/ad68ec4dc893e91231bcacd5eead9c69?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=NJIS7FfpavDcR9Qr6lVrJt1B7FH2sDvHjIL5CHYO31r-2scakR-Es9rQE5n0Bv0YGyOj69rVH55yoGNlrZj7-QaddyhK0XZfI96KqprdJXQf9nopN4kdDMQOYr7hG3XYIwf9AB1bCSu1Pv8Si~VEn5xKROT87rUeq8GvunCgB9luMPvyVKSMsUIrSyqdYjTMb3cln8aoRBrh2QIMHIJCeGVxQCJXTOWcEecuBwA9WRIbHvAm0CLxDVIT2goHLM0l5-5vDfGx5zoV6y99fraeatIdg2jTR1X0zFc9cWmhhTzM84A4kH6vfHofwLNqEynN8UICJu6wztiH~YmpApIKfg__",
      "https://s3-alpha-sig.figma.com/img/3c83/c7a0/ad68ec4dc893e91231bcacd5eead9c69?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=NJIS7FfpavDcR9Qr6lVrJt1B7FH2sDvHjIL5CHYO31r-2scakR-Es9rQE5n0Bv0YGyOj69rVH55yoGNlrZj7-QaddyhK0XZfI96KqprdJXQf9nopN4kdDMQOYr7hG3XYIwf9AB1bCSu1Pv8Si~VEn5xKROT87rUeq8GvunCgB9luMPvyVKSMsUIrSyqdYjTMb3cln8aoRBrh2QIMHIJCeGVxQCJXTOWcEecuBwA9WRIbHvAm0CLxDVIT2goHLM0l5-5vDfGx5zoV6y99fraeatIdg2jTR1X0zFc9cWmhhTzM84A4kH6vfHofwLNqEynN8UICJu6wztiH~YmpApIKfg__",
      "https://s3-alpha-sig.figma.com/img/3c83/c7a0/ad68ec4dc893e91231bcacd5eead9c69?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=NJIS7FfpavDcR9Qr6lVrJt1B7FH2sDvHjIL5CHYO31r-2scakR-Es9rQE5n0Bv0YGyOj69rVH55yoGNlrZj7-QaddyhK0XZfI96KqprdJXQf9nopN4kdDMQOYr7hG3XYIwf9AB1bCSu1Pv8Si~VEn5xKROT87rUeq8GvunCgB9luMPvyVKSMsUIrSyqdYjTMb3cln8aoRBrh2QIMHIJCeGVxQCJXTOWcEecuBwA9WRIbHvAm0CLxDVIT2goHLM0l5-5vDfGx5zoV6y99fraeatIdg2jTR1X0zFc9cWmhhTzM84A4kH6vfHofwLNqEynN8UICJu6wztiH~YmpApIKfg__",
    ],
    description:
      "Overlooking London’s Green Park is the world-famous The Ritz London...",
    rooms: [
      {
        type: "Deluxe Room",
        features: ["Non-smoking rooms", "Fitness centre", "Room service"],
        price: 450,
      },
      {
        type: "Superior Room",
        features: ["Non-smoking rooms", "Fitness centre", "Room service"],
        price: 550,
      },
    ],
    reviews: [
      {
        user: "John Doe",
        rating: 5,
        comment: "Amazing experience! The staff was very friendly.",
      },
    ],
    surroundings: ["Green Park - 100 m", "Trafalgar Square - 1.2 km"],
    facilities: ["Fitness centre", "Restaurant", "Bar"],
    thingsToKnow: ["Check-in after 4:00 PM", "Checkout before 11:00 AM"],
    faqs: [
      {
        question: "Is breakfast included?",
        answer: "Yes, breakfast is included in the room rate.",
      },
    ],
  },
];

const HotelSinglePage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const hotel = hotels.find((h) => h.slug === slug);

  if (!hotel) {
    return <div>Hotel not found</div>;
  }

  return <HotelSingle hotel={hotel} />;
};

export default HotelSinglePage;
