import React from "react";
import "./WaveBackground.css";

const WaveBackground = () => {
  return (
    <div className="relative overflow-hidden h-48">
      <div className="wave absolute bottom-0 w-[200%] h-24 bg-teal-300 opacity-50 animate-wave-delay-0"></div>
      <div className="wave absolute bottom-0 w-[200%] h-24 bg-blue-500 opacity-30 animate-wave-delay-2"></div>
      <div className="wave absolute bottom-0 w-[200%] h-24 bg-blue-700 opacity-10 animate-wave-delay-4"></div>
    </div>
  );
};

export default WaveBackground;
