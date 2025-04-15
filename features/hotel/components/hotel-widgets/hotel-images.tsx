"use client";

import React, { useEffect, useRef, useState } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Image from "next/image";
import { Button } from "@/components/ui";
import { Photo } from "../../core/types/hotel";

const HotelImages = ({ images }: { images: Photo[] }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [mainImageIndex, setMainImageIndex] = useState<number>(0);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const galleryRef = useRef<HTMLDivElement>(null);

  const galleryImages = images.map((img) => ({
    original:
      `https://halalholidaycheck.com/images/properties/${img.pic}` ||
      "/placeholder-hotel.jpg",
    thumbnail:
      `https://halalholidaycheck.com/images/properties/${img.pic}` ||
      "/placeholder-hotel.jpg",
  }));

  const handleImageClick = (index: number) => {
    setMainImageIndex(index);
    setIsGalleryOpen(true);
  };

  const displayImages = [...images];
  while (displayImages.length < 5) {
    displayImages.push();
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        galleryRef.current &&
        !galleryRef.current.contains(event.target as Node)
      ) {
        setIsGalleryOpen(false);
      }
    };

    if (isGalleryOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isGalleryOpen]);

  return (
    <div className="mt-6">
      <div className="relative w-full flex items-start gap-2">
        {/* Main large image - takes full width on mobile, 2 cols on desktop */}
        <div className="w-1/2">
          {/* https://halalholidaycheck.com/images/properties/selge-beach-resort-spa-hotel-alanya_83.jpg */}

          <Image
            src={
              `https://halalholidaycheck.com/images/properties/${displayImages[0].pic}` ||
              "/placeholder-hotel.jpg"
            }
            alt="Main hotel image"
            width={600}
            height={500}
            className="w-full h-80 md:h-[600px] object-cover rounded-lg cursor-pointer"
            onClick={() => handleImageClick(0)}
          />
        </div>

        {/* Grid of 4 smaller images */}
        <div className="w-1/2 grid grid-cols-2 gap-2 ">
          {[1, 2, 3, 4].map((index) => (
            <Image
              key={index}
              src={
                `https://halalholidaycheck.com/images/properties/${displayImages[index].pic}` ||
                "/placeholder-hotel.jpg"
              }
              alt={`Hotel image ${index}`}
              width={400}
              height={250}
              className="w-full h-[296px] object-cover rounded-lg cursor-pointer"
              onClick={() => handleImageClick(index)}
            />
          ))}
        </div>
        <Button
          type="white"
          leadingIcon
          leading="widget"
          className="absolute bottom-5 right-5"
          onClick={() => handleImageClick(0)}
        >
          Show all photos
        </Button>
      </div>

      {isGalleryOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div ref={galleryRef} className="relative">
            <Button
              type="white"
              className="absolute top-4 right-4 text-black text-2xl z-50"
              onClick={() => setIsGalleryOpen(false)}
            >
              X
            </Button>
            <ImageGallery
              items={galleryImages}
              startIndex={mainImageIndex}
              additionalClass="w-full max-w-4xl"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default HotelImages;
