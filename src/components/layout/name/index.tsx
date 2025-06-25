import { GiBroadheadArrow } from "react-icons/gi";

interface NameAreaProps {
  title: string;
  parent?: string;
}

const NameArea: React.FC<NameAreaProps> = ({ title, parent = "ABC" }) => {
  return (
    <div className="relative flex flex-col md:flex-row items-center gap-6 md:gap-10 p-6 md:p-10 pt-32 bg-[url('https://themedox.com/mykd/wp-content/uploads/2023/10/breadcrumb_bg01.jpg')] bg-cover bg-center w-full">
      {/* Left Section */}
      <div className="w-full md:w-1/2 flex flex-col gap-4 md:gap-6 uppercase text-center md:text-left px-4 md:pl-40">
        <h1 className="font-extrabold font-sans text-3xl md:text-6xl text-white">
          {title}
        </h1>
        <div className="flex justify-center md:justify-start gap-2 items-center font-extrabold font-geistSans text-white text-lg md:text-2xl">
          <p className="text-[#45f882]">{parent}</p>
          <GiBroadheadArrow className="rotate-180 scale-x-[-1]" />
          <p>{title}</p>
        </div>
      </div>

      {/* Right Section (Image) */}
      <div className="w-full md:w-1/2">
        <img
          src="https://themedox.com/mykd/wp-content/themes/mykd/assets/img/others/breadcrumb_img01.png"
          alt="breadcrumb visual"
          className="w-6/12 md:w-4/12 mx-auto animate-float"
        />
      </div>

      {/* Bottom Decoration */}
      <div className="absolute bottom-0 left-0 w-1/2 h-[40px] md:h-[60px] bg-[#45f882] [clip-path:polygon(0_0,100%_100%,0_50%)]" />
      <div className="absolute bottom-0 right-0 w-1/2 h-[40px] md:h-[60px] bg-[#45f882] [clip-path:polygon(100%_0,0_100%,100%_50%)]" />
    </div>
  );
};

export default NameArea;
