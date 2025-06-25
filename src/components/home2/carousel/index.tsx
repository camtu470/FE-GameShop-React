"use client";

import { Carousel } from "@/components/ui/carousel-slider";
import SectionHeader from "@/components/ui/SectionHeader";
import { players } from "@/data/player";

const Carousel_slider = () => {
  const slideData = players.map((player) => ({
    title: player.name,
    button: "View Profile",
    src: player.image,
  }));

  return (
    <div className="flex flex-col gap-2">
      <SectionHeader subtitle="Our top streamers" title="top rated streamers" />
      <div className="relative overflow-hidden w-full h-full py-6 pb-20 lg:py-20">
        <Carousel slides={slideData} />
      </div>
    </div>
  );
};

export default Carousel_slider;
