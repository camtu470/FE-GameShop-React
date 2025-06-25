"use client";
import Banner from "@/components/home1/banner";
import Footer from "@/components/home1/footer";
import Introduce from "@/components/home1/introduce";
import TopRate from "@/components/home1/top-rate";
import TopTrending from "@/components/home1/top-trending";
import Season from "@/components/layout/season";
import Team from "@/components/layout/team";

export default function Home() {
  return (
    <div className="flex flex-col gap-10">
      <main className="flex flex-col gap-20">
        <Banner />
        <TopTrending />
        <TopRate />
        <Introduce />
        <Team />
        <Season />
      </main>
      <Footer />
    </div>
  );
}
