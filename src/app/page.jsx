import AboutUs from "@/components/AboutUs";
import Certificates from "@/components/Certificates";
import Header from "@/components/header/Header";
import Services from "@/components/Services";
import Slider from "@/components/Slider/Slider";
import Divider from "@/ui/Divider";
import WhyUs from "@/components/WhyUs";
import ScrollProgressBar from "@/ui/ScrollProgressBar";
import KnowledgeBase from "@/components/KnowledgeBase";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <ScrollProgressBar />
      <Header />
      <div className="max-w-sm sm:max-w-2xl lg:max-w-7xl mx-auto">
        <Slider />
        <Divider />
        <Certificates />
        <Divider />
        <Services />
        <Divider />
        <AboutUs />
        <Divider />
        <KnowledgeBase />
        <Divider />
        <WhyUs />
      </div>
      <Footer />
    </div>
  );
}
