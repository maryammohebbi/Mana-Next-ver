import AboutUs from "@/components/AboutUs";
import Certificates from "@/components/Certificates";
import Header from "@/components/header/Header";
import Services from "@/components/Services";
import Slider from "@/components/Slider/Slider";
import Divider from "@/ui/Divider";
import WaveBackground from "@/ui/WaveBackground";
import WhyUs from "@/components/WhyUs";
import ScrollProgressBar from "@/ui/ScrollProgressBar";

export default function Home() {
  return (
    <div>
      <ScrollProgressBar />
      <Header />
      <div className="max-w-sm sm:max-w-2xl lg:max-w-7xl mx-auto">
        <div id="experience">
          <Slider />
        </div>
        <Divider />
        <div id="certificate">
          <Certificates />
        </div>
        <Divider />
        <div id="service">
          <Services />
        </div>
        <div id="aboutus">
          <AboutUs />
        </div>
        <Divider />
        <div id="whyus">
          <WhyUs />
        </div>
        <WaveBackground />
      </div>
    </div>
  );
}
