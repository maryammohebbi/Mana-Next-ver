import AboutUs from "@/components/AboutUs";
import Certificates from "@/components/Certificates";
import Diagram from "@/components/Diagram";
import Header from "@/components/header/Header";
import Services from "@/components/Services";
import Slider from "@/components/Slider/Slider";
import Divider from "@/ui/Divider";
import WaveBackground from "@/ui/WaveBackground";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="max-w-sm sm:max-w-2xl lg:max-w-7xl mx-auto">
        <Slider />
        <Divider />
        <Certificates />
        <Divider />
        <Services />
        <Divider />
        {/* <Diagram /> */}
        <AboutUs />
        <Divider />
        <WaveBackground />
      </div>
    </div>
  );
}
