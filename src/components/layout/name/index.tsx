import { GiBroadheadArrow } from "react-icons/gi";

interface NameAreaProps {
  title: string;
  parent?: string; // optional, mặc định là "ABC"
}

const NameArea: React.FC<NameAreaProps> = ({ title, parent = "ABC" }) => {
  return (
    <div className="relative flex items-center gap-10 p-10 pt-32 bg-[url('https://themedox.com/mykd/wp-content/uploads/2023/10/breadcrumb_bg01.jpg')] bg-cover w-full">
      <div className="w-1/2 flex flex-col gap-6 uppercase pl-40">
        <h1 className="font-extrabold font-sans text-6xl text-white">
          {title}
        </h1>
        <div className="flex gap-2 items-center font-extrabold font-geistSans text-white text-2xl">
          <p className="text-[#45f882]">{parent}</p>
          <GiBroadheadArrow className="text-2xl rotate-180 scale-x-[-1]" />
          <p>{title}</p>
        </div>
      </div>
      <div className="w-1/2">
        <img
          src="https://themedox.com/mykd/wp-content/themes/mykd/assets/img/others/breadcrumb_img01.png"
          alt=""
          className="w-6/12 mx-auto animate-float"
        />
      </div>
      <div className="absolute bottom-0 left-0 w-1/2 h-[60px] bg-[#45f882] [clip-path:polygon(0_0,100%_100%,0_50%)]"></div>
      <div className="absolute bottom-0 right-0 w-1/2 h-[60px] bg-[#45f882] [clip-path:polygon(100%_0,0_100%,100%_50%)]"></div>
    </div>
  );
};

export default NameArea;
