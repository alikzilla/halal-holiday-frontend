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
      <div className="relative w-full flex flex-col md:flex-row items-start gap-2">
        {/* Main large image */}
        <div className="w-full md:w-1/2">
          <Image
            src={
              `https://halalholidaycheck.com/images/properties/${displayImages[0]?.pic}` ||
              "/placeholder-hotel.jpg"
            }
            alt="Main hotel image"
            width={600}
            height={500}
            className="w-full h-64 md:h-80 lg:h-[400px] object-cover rounded-lg cursor-pointer"
            onClick={() => handleImageClick(0)}
          />
        </div>

        {/* Grid of 4 smaller images */}
        <div className="w-full md:w-1/2 grid grid-cols-2 gap-2">
          {[1, 2, 3, 4].map((index) => (
            <Image
              key={index}
              src={
                `https://halalholidaycheck.com/images/properties/${displayImages[index]?.pic}` ||
                "/placeholder-hotel.jpg"
              }
              alt={`Hotel image ${index}`}
              width={400}
              height={250}
              className="w-full h-32 md:h-40 lg:h-[194px] object-cover rounded-lg cursor-pointer"
              onClick={() => handleImageClick(index)}
            />
          ))}
        </div>
        <Button
          type="white"
          leadingIcon
          leading="widget"
          className="absolute bottom-5 right-5 text-sm md:text-base"
          onClick={() => handleImageClick(0)}
        >
          Show all photos
        </Button>
      </div>

      {isGalleryOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div ref={galleryRef} className="relative w-full max-w-4xl">
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
              additionalClass="w-full"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default HotelImages;
