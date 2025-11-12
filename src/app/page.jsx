import Header from "@/components/header/Header";
import Slider from "@/components/Slider/Slider";
import Divider from "@/ui/Divider";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="max-w-sm sm:max-w-2xl lg:max-w-7xl mx-auto">
        <Slider />
        <Divider />
      </div>
    </div>
  );
}
