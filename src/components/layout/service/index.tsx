"use client";

import React, { useEffect, useRef, useState } from "react";
import { IoDiamondSharp, IoSettingsOutline } from "react-icons/io5";
import { RiUserSettingsLine } from "react-icons/ri";
import { LiaEthereum } from "react-icons/lia";
import SectionHeader from "@/components/ui/SectionHeader";
const Service = () => {
  const images = [
    "https://themedox.com/mykd/wp-content/uploads/2023/10/services_img02.jpg",
    "https://themedox.com/mykd/wp-content/uploads/2023/10/services_img04.jpg",
    "https://themedox.com/mykd/wp-content/uploads/2023/10/services_img01.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    timeoutRef.current = setInterval(nextSlide, 5000);

    return () => {
      if (timeoutRef.current) clearInterval(timeoutRef.current);
    };
  }, []);

  return (
    <div className="w-11/12 mx-auto flex flex-col md:flex-row gap-10 py-6">
      <div className="md:w-1/2 flex flex-col gap-2">
        <p className="uppercase text-md font-bold text-[#45f882] font-sans">
          powerful services
        </p>
        <h1 className="uppercase text-5xl font-extrabold font-sans text-white">
          Our Powerful Services Done on time
        </h1>
        <div className="w-2/12 my-4 h-2 bg-[#45f882] clip-diagonal"></div>
        <div className="flex flex-col gap-12 text-gray-300 mt-6">
          <div className="flex gap-4">
            <div className="w-1/2 flex flex-col gap-2">
              <IoDiamondSharp className="text-[#45f882] text-4xl" />
              <p className="font-bold text-white text-xl font-sans">
                Year Experience
              </p>
              <p className="text-sm tracking-widest">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                elementum sollicitudin is augue euismod.
              </p>
            </div>
            <div className="w-1/2 flex flex-col gap-2">
              <RiUserSettingsLine className="text-[#45f882] text-4xl" />
              <p className="font-bold text-white text-xl font-sans">
                Expert Teams
              </p>
              <p className="text-sm tracking-widest">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                elementum sollicitudin is augue euismod.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-1/2 flex flex-col gap-2">
              <LiaEthereum className="text-[#45f882] text-4xl" />
              <p className="font-bold text-white text-xl font-sans">
                Best NFT Game
              </p>
              <p className="text-sm tracking-widest">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                elementum sollicitudin is augue euismod.
              </p>
            </div>
            <div className="w-1/2 flex flex-col gap-2">
              <IoSettingsOutline className="text-[#45f882] text-4xl" />
              <p className="font-bold text-white text-xl font-sans">
                Worldwide Client
              </p>
              <p className="text-sm tracking-widest">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                elementum sollicitudin is augue euismod.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="md:w-1/2 w-full relative overflow-hidden rounded">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              className="w-full flex-shrink-0"
              alt={`Slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
