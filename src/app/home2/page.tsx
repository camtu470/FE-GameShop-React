import Footer from "@/components/home1/footer";
import Banner from "@/components/home2/banner";
import Carousel_slider from "@/components/home2/carousel";
import Connect from "@/components/home2/connect";
import Introduce from "@/components/home2/introduce";
import MatchList from "@/components/home2/match-list";
import Tournament from "@/components/home2/tournament";
import Service from "@/components/layout/service";

export default function Home2Page() {
  return (
    <div className="">
      <Banner />
      <MatchList />
      {/* <Tournament /> */}
      <Introduce />
      <Carousel_slider />

      <Connect />
      <Service />
      <Footer />
    </div>
  );
}
