import { IoArrowRedoSharp } from "react-icons/io5";
import { SiGradleplaypublisher } from "react-icons/si";
const Introduce = () => {
  return (
    <div className="w-10/12 mx-auto flex gap-10 py-20">
      <div className="w-7/12 flex flex-col gap-4">
        <h1 className="uppercase text-6xl font-extrabold font-sans text-white">
          The Journey of The NFT Sites
        </h1>
        <div className="w-2/12 my-4 h-2 bg-[#45f882] clip-diagonal"></div>
        <p className="text-md tracking-widest text-[#ADB0D2]">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur
          itaque doloremque explicabo odio dolore quisquam in minima, magni
          voluptates optio nobis autem sit asperiores cupiditate maiores cum!
          Architecto, deleniti.
        </p>
        <div className="flex gap-20 my-4">
          <div className="flex flex-col text-center gap-1">
            <p className="font-extrabold text-6xl ">40k</p>
            <p className="text-sm font-bold text-[#ADB0D2]">Member</p>
          </div>
          <div className="flex flex-col text-center gap-1">
            <p className="font-extrabold text-6xl ">12k</p>
            <p className="text-sm font-bold text-[#ADB0D2]">NFTS</p>
          </div>
          <div className="flex flex-col text-center gap-1">
            <p className="font-extrabold text-6xl ">30k</p>
            <p className="text-sm font-bold text-[#ADB0D2]">Artist</p>
          </div>
        </div>
        <div className="flex gap-20">
          <div className="w-fit flex items-center gap-2 shadow rounded-lg border border-[#4c5155] hover:bg-[#232d37] p-4 cursor-pointer">
            <p className="font-bold">Read more</p>
            <IoArrowRedoSharp className="text-[#45f882]" />
          </div>
          <div className="flex items-center gap-2">
            <SiGradleplaypublisher className="text-4xl text-[#45f882]" />
            <p className="capitalize font-bold text-sm">How to work</p>
          </div>
        </div>
      </div>
      <div className="w-5/12">
        <div className="bg-[#45f882] pr-4 pt-10">
          <div className="relative h-[480px] bg-[#2c3237] rounded rotate-[5deg] origin-top-right">
            <img
              src="https://themedox.com/mykd/wp-content/uploads/2023/10/fun_fact.png"
              alt=""
              className="absolute top-[-80px] right-[60px] w-10/12 mx-auto animate-float"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduce;
