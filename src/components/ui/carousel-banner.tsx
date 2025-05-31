"use client";

import Image from "next/image";
import React, { useCallback, useEffect, useRef, useState } from "react";

const carouselImages = [
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=400&q=80",
];

const Carousel = ({
  images,
  width,
  height,
}: {
  images: string[];
  width: number;
  height: number;
}) => {
  const [carouselActiveItem, setCarouselActiveItem] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollItem = () => {
    setCarouselActiveItem((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  };

  const autoplay = useCallback(
    () => setInterval(scrollItem, 2000),
    [images.length]
  );

  useEffect(() => {
    const play = autoplay();
    return () => clearInterval(play);
  }, [autoplay]);

  useEffect(() => {
    carouselRef.current?.scroll({
      left: width * carouselActiveItem,
      behavior: "smooth",
    });
  }, [carouselActiveItem, width]);

  return (
    <div
      ref={carouselRef}
      className="carousel carousel-center flex overflow-x-auto scrollbar-hide"
      style={{ scrollSnapType: "x mandatory" }}
    >
      {images.map((src, idx) => (
        <div
          key={idx}
          className="carousel-item flex-shrink-0"
          style={{ scrollSnapAlign: "center" }}
        >
          <Image
            src={src}
            alt={`carousel-img-${idx}`}
            width={width}
            height={height}
            loading="lazy"
            className="rounded-lg"
          />
        </div>
      ))}
    </div>
  );
};

const Banner = () => {
  return (
    <div className="p-8 bg-gray-900 min-h-screen flex items-center justify-center">
      <Carousel images={carouselImages} width={300} height={300} />
    </div>
  );
};

export default Banner;
