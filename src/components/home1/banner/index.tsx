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
