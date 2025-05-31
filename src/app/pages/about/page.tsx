import Footer from "@/components/home1/footer";
import NameArea from "@/components/layout/name";
import Introduce from "@/components/layout/pages/about/introduce";
import Service from "@/components/layout/service";
import Team from "@/components/layout/team";

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-16">
      <NameArea title="ABOUT US" />
      <Introduce />
      <Service />
      <Team />
      <Footer />
    </div>
  );
}
