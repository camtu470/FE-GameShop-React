import Footer from "@/components/home1/footer";
import NameArea from "@/components/layout/name";
import Season from "@/components/layout/season";
import Service from "@/components/layout/service";
import Video from "@/components/layout/video";

export default function ServicesPage() {
  return (
    <div className="flex flex-col gap-10">
      <NameArea title="Services" />
      <Service />
      <Video />
      <Season />
      <Footer />
    </div>
  );
}
