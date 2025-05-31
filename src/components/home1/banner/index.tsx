// import { ThreeDMarquee } from "@/components/ui/3d-marquee";
// const Banner = () => {
//   const images = [
//     "https://assets.aceternity.com/cloudinary_bkp/3d-card.png",
//     "https://assets.aceternity.com/animated-modal.png",
//     "https://assets.aceternity.com/animated-testimonials.webp",
//     "https://assets.aceternity.com/cloudinary_bkp/Tooltip_luwy44.png",
//     "https://assets.aceternity.com/github-globe.png",
//     "https://assets.aceternity.com/glare-card.png",
//     "https://assets.aceternity.com/layout-grid.png",
//     "https://assets.aceternity.com/flip-text.png",
//     "https://assets.aceternity.com/hero-highlight.png",
//     "https://assets.aceternity.com/carousel.webp",
//     "https://assets.aceternity.com/placeholders-and-vanish-input.png",
//     "https://assets.aceternity.com/shooting-stars-and-stars-background.png",
//     "https://assets.aceternity.com/signup-form.png",
//     "https://assets.aceternity.com/cloudinary_bkp/stars_sxle3d.png",
//     "https://assets.aceternity.com/spotlight-new.webp",
//     "https://assets.aceternity.com/cloudinary_bkp/Spotlight_ar5jpr.png",
//     "https://assets.aceternity.com/cloudinary_bkp/Parallax_Scroll_pzlatw_anfkh7.png",
//     "https://assets.aceternity.com/tabs.png",
//     "https://assets.aceternity.com/cloudinary_bkp/Tracing_Beam_npujte.png",
//     "https://assets.aceternity.com/cloudinary_bkp/typewriter-effect.png",
//     "https://assets.aceternity.com/glowing-effect.webp",
//     "https://assets.aceternity.com/hover-border-gradient.png",
//     "https://assets.aceternity.com/cloudinary_bkp/Infinite_Moving_Cards_evhzur.png",
//     "https://assets.aceternity.com/cloudinary_bkp/Lamp_hlq3ln.png",
//     "https://assets.aceternity.com/macbook-scroll.png",
//     "https://assets.aceternity.com/cloudinary_bkp/Meteors_fye3ys.png",
//     "https://assets.aceternity.com/cloudinary_bkp/Moving_Border_yn78lv.png",
//     "https://assets.aceternity.com/multi-step-loader.png",
//     "https://assets.aceternity.com/vortex.png",
//     "https://assets.aceternity.com/wobble-card.png",
//     "https://assets.aceternity.com/world-map.webp",
//   ];
//   return (
//     <div className="mx-auto my-10 max-w-7xl rounded-3xl bg-gray-950/5 p-2 ring-1 ring-neutral-700/10 dark:bg-neutral-800">
//       <ThreeDMarquee images={images} />
//     </div>
//   );
// };

// export default Banner;

const Banner = () => {
  return (
    <div
      className="relative bg-cover bg-center  pt-32"
      style={{
        backgroundImage:
          "url('https://themedox.com/mykd/wp-content/uploads/2023/10/slider_bg.jpg')",
      }}
    >
      <div className=" w-10/12 mx-auto  flex items-center">
        <div className="w-7/12 flex flex-col gap-4">
          <div className="w-1/2 bg-gradient-to-r from-[#4cff8877] to-transparent p-4 rounded-lg">
            <p className="uppercase text-xl font-extrabold font-sans text-[#45f882]">
              Live gaming
            </p>
          </div>
          <p className="font-sans text-[100px] uppercase text-6xl font-extrabold">
            steaming
          </p>

          <p className="font-bold font-sans text-2xl uppercase">
            video games online
          </p>
          <div className="py-2 mt-2 clip-arrow w-4/12 bg-white group transition-colors duration-300">
            <button className="w-full p-2 clip-arrow font-sans bg-[#45f882] text-black font-extrabold text-sm transition-colors duration-300 group-hover:bg-white">
              CONTACT US
            </button>
          </div>
        </div>
        <div className="w-5/12">
          <img
            src="https://themedox.com/mykd/wp-content/uploads/2023/10/slider_img01.png"
            alt=""
            className="animate-float"
          />
        </div>
      </div>
      {/* <div className="w-1/2 h-[50px] bg-[#45f882] [clip-path:polygon(0_0,100%_50%,0_100%)]"></div>
      <div className="w-1/2 h-[50px] bg-[#45f882] [clip-path:polygon(0_0,50%_100%,0_100%)]"></div>
      <div className="w-1/2 h-[50px] bg-[#45f882] [clip-path:polygon(100%_0,100%_100%,0_50%)]"></div> */}

      <div className="absolute bottom-0 left-0 w-1/2 h-[60px] bg-[#45f882] [clip-path:polygon(0_0,100%_100%,0_50%)]"></div>
      <div className="absolute bottom-0 right-0 w-1/2 h-[60px] bg-[#45f882] [clip-path:polygon(100%_0,0_100%,100%_50%)]"></div>
    </div>
  );
};

export default Banner;
