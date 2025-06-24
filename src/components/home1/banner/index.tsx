const Banner = () => {
  return (
    <div
      className="relative bg-cover bg-center pt-32 md:pt-32"
      style={{
        backgroundImage:
          "url('https://themedox.com/mykd/wp-content/uploads/2023/10/slider_bg.jpg')",
      }}
    >
      <div className="w-11/12 mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Left Text Content */}
        <div className="w-full md:w-7/12 flex flex-col gap-4 text-center md:text-left">
          <div className="w-fit mx-auto md:mx-0 bg-gradient-to-r from-[#4cff8877] to-transparent p-3 rounded-lg">
            <p className="uppercase text-base md:text-xl font-extrabold font-sans text-[#45f882]">
              Live gaming
            </p>
          </div>

          <p className="font-sans text-[clamp(2rem,10vw,100px)] uppercase font-extrabold leading-tight text-white">
            steaming
          </p>

          <p className="font-bold font-sans text-xl md:text-2xl uppercase text-white">
            video games online
          </p>

          <div className="py-2 mt-2 w-1/2 md:w-5/12 mx-auto md:mx-0 group transition-colors duration-300">
            <button className="w-full p-3 rounded-2xl font-sans bg-[#45f882] text-black font-extrabold text-sm hover:bg-white transition">
              CONTACT US
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-5/12 flex justify-center">
          <img
            src="https://themedox.com/mykd/wp-content/uploads/2023/10/slider_img01.png"
            alt=""
            className="animate-float max-w-[300px] md:max-w-full"
          />
        </div>
      </div>

      {/* Bottom Shape Decorations */}
      {/* Chỉ hiển thị ở màn hình md trở lên */}
      <div className="hidden md:block absolute bottom-0 left-0 w-1/2 h-[60px] bg-[#45f882] [clip-path:polygon(0_0,100%_100%,0_50%)]"></div>
      <div className="hidden md:block absolute bottom-0 right-0 w-1/2 h-[60px] bg-[#45f882] [clip-path:polygon(100%_0,0_100%,100%_50%)]"></div>
    </div>
  );
};

export default Banner;
