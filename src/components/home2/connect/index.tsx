import SectionHeader from "@/components/ui/SectionHeader";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaDiscord,
  FaTwitch,
} from "react-icons/fa";

const Connect = () => {
  return (
    <div className="flex flex-col gap-6 font-sans py-10">
      <SectionHeader subtitle="  connect with us" title="  stay connected" />

      <div className="flex gap-6 justify-center p-10">
        <div className="flex flex-col gap-1">
          <div className="group flex flex-col items-center justify-center gap-4 w-36 h-36 border-2 border-[#45f882] transition-colors duration-300 hover:bg-[#1f212c]">
            <FaFacebook className="text-4xl text-white transition-colors duration-300 group-hover:text-[#45f882]" />
            <p className="text-sm uppercase font-bold tracking-wider text-[#45f882]">
              Facebook
            </p>
          </div>
          <div className="w-8/12 h-1 bg-[#45f882] clip-diagonal"></div>
        </div>
        <div className="flex flex-col gap-1">
          <div className="group flex flex-col items-center justify-center gap-4 w-36 h-36 border-2 border-[#45f882] transition-colors duration-300 hover:bg-[#1f212c]">
            <FaTwitter className="text-4xl text-white transition-colors duration-300 group-hover:text-[#45f882]" />
            <p className="text-sm uppercase font-bold tracking-wider text-[#45f882]">
              Twitter
            </p>
          </div>
          <div className="w-8/12 h-1 bg-[#45f882] clip-diagonal"></div>
        </div>
        <div className="flex flex-col gap-1">
          <div className="group flex flex-col items-center justify-center gap-4 w-36 h-36 border-2 border-[#45f882] transition-colors duration-300 hover:bg-[#1f212c]">
            <FaInstagram className="text-4xl text-white transition-colors duration-300 group-hover:text-[#45f882]" />
            <p className="text-sm uppercase font-bold tracking-wider text-[#45f882]">
              Instagram
            </p>
          </div>
          <div className="w-8/12 h-1 bg-[#45f882] clip-diagonal"></div>
        </div>
        <div className="flex flex-col gap-1">
          <div className="group flex flex-col items-center justify-center gap-4 w-36 h-36 border-2 border-[#45f882] transition-colors duration-300 hover:bg-[#1f212c]">
            <FaYoutube className="text-4xl text-white transition-colors duration-300 group-hover:text-[#45f882]" />
            <p className="text-sm uppercase font-bold tracking-wider text-[#45f882]">
              Youtube
            </p>
          </div>
          <div className="w-8/12 h-1 bg-[#45f882] clip-diagonal"></div>
        </div>
        <div className="flex flex-col gap-1">
          <div className="group flex flex-col items-center justify-center gap-4 w-36 h-36 border-2 border-[#45f882] transition-colors duration-300 hover:bg-[#1f212c]">
            <FaDiscord className="text-4xl text-white transition-colors duration-300 group-hover:text-[#45f882]" />
            <p className="text-sm uppercase font-bold tracking-wider text-[#45f882]">
              Discord
            </p>
          </div>
          <div className="w-8/12 h-1 bg-[#45f882] clip-diagonal"></div>
        </div>
        <div className="flex flex-col gap-1">
          <div className="group flex flex-col items-center justify-center gap-4 w-36 h-36 border-2 border-[#45f882] transition-colors duration-300 hover:bg-[#1f212c]">
            <FaTwitch className="text-4xl text-white transition-colors duration-300 group-hover:text-[#45f882]" />
            <p className="text-sm uppercase font-bold tracking-wider text-[#45f882]">
              Twitch
            </p>
          </div>
          <div className="w-8/12 h-1 bg-[#45f882] clip-diagonal"></div>
        </div>
      </div>
    </div>
  );
};

export default Connect;
