"use client"; // Required for using hooks in Next.js 13+

import React, { useState } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Image from "next/image";

const HotelImages = ({ images }: { images: string[] }) => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  const galleryImages = images.map((img) => ({
    original: img,
    thumbnail: img,
  }));

  return (
    <div className="mt-6">
      <div className="grid grid-cols-3 gap-4">
        {images.slice(0, 6).map((img, index) => (
          <Image
            key={index}
            src={img}
            alt={`Hotel Image ${index + 1}`}
            width={10}
            height={10}
            className="w-full h-48 object-cover rounded-lg cursor-pointer"
            onClick={() => setIsGalleryOpen(true)}
          />
        ))}
      </div>

      {isGalleryOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <button
            className="absolute top-4 right-4 text-white text-2xl"
            onClick={() => setIsGalleryOpen(false)}
          >
            &times;
          </button>
          <ImageGallery items={galleryImages} />
        </div>
      )}
    </div>
  );
};

export default HotelImages;
