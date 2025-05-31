"use client";

import Image from "next/image";
import { FaLongArrowAltRight } from "react-icons/fa";
import React, { useCallback, useEffect, useRef, useState } from "react";

// Ảnh carousel dùng cho component
const carouselImages = [
  "https://media.vov.vn/sites/default/files/styles/large/public/2021-08/1_0_25.jpg",
  "https://cdna.artstation.com/p/assets/images/images/045/957/746/large/james-whatsapp-image-2022-01-14-at-1-36-25-pm.jpg?1643937262",
  "https://cdna.artstation.com/p/assets/images/images/045/957/746/large/james-whatsapp-image-2022-01-14-at-1-36-25-pm.jpg?1643937262",
  "https://cdna.artstation.com/p/assets/images/images/045/957/746/large/james-whatsapp-image-2022-01-14-at-1-36-25-pm.jpg?1643937262",
];

// Component carousel
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
          <img
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

// Component banner chính
const Banner = () => {
  return (
    <div
      className="w-full px-4 lg:px-16 py-4 lg:py-10 relative lg:pt-32"
      style={{
        backgroundImage:
          "url('https://themedox.com/mykd/wp-content/uploads/2023/10/banner_bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          backgroundImage: "url('/images/bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(20px)",
          zIndex: -1,
        }}
      ></div>

      <div className="w-full relative flex flex-col lg:flex-row p-4 lg:p-14 rounded-lg bg-opacity-50 bg-black shadow-lg">
        <div className="w-full lg:w-1/2 flex flex-col gap-2 p-2">
          <p className="w-full text-2xl lg:text-6xl font-extrabold text-white">
            <span className="special-text">Fintech</span> is The best Web For
            Your <span className="special-text"> NFTS</span>
          </p>
          <p className="text-xs lg:text-sm text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
            deleniti quidem animi repellendus, facilis deserunt atque maxime
            asperiores numquam culpa!
          </p>
          <div className="w-full flex gap-2 lg:gap-12 mt-4">
            <div className="flex flex-col text-white">
              <p className="text-sm lg:text-3xl font-extrabold text-green-400">
                35m+
              </p>
              <p className="text-xs font-medium text-gray-600">Artwork</p>
            </div>
            <div className="flex flex-col text-white">
              <p className="text-sm lg:text-3xl font-extrabold text-pink-500">
                18m+
              </p>
              <p className="text-xs font-medium text-gray-600">Auctions</p>
            </div>
            <div className="flex flex-col text-white">
              <p className="text-sm lg:text-3xl font-extrabold text-orange-500">
                500k+
              </p>
              <p className="text-xs font-medium text-gray-600">Artists</p>
            </div>
          </div>
          <button className="group animate-float cursor-pointer special-text slide-anime px-6 mt-4 py-3 text-sm border border-zinc-700  rounded-full w-[180px] bg-base-dark text-white hover:text-pink-500 flex justify-between items-center font-semibold">
            Discover Now
            <div className="group-hover:translate-x-2 transition-all">
              <FaLongArrowAltRight />
            </div>
          </button>
        </div>

        <div className="w-full lg:w-1/2">
          <div className="hidden lg:flex justify-center">
            <div className="p-4 lg:p-10 lg:border-8 rounded-xl animate-float">
              <div className="w-[300px] h-[300px] border-spacing-2 border-2 rounded-md overflow-hidden">
                <Carousel images={carouselImages} width={300} height={300} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
