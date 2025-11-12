import Slider from "./_components/Slider/Slider";
import Header from "./_components/header/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="max-w-sm sm:max-w-2xl lg:max-w-7xl mx-auto">
        <Slider />
      </div>
    </div>
  );
}
