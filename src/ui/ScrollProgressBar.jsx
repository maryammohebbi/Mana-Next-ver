"use client";
import { useEffect, useState } from "react";

export default function ScrollProgressBar() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / total) * 100;
      setScroll(progress);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="fixed top-0 right-0 h-1.5 bg-[#1c999a] z-[9999]"
      style={{ width: `${scroll}%` }}
    />
  );
}
