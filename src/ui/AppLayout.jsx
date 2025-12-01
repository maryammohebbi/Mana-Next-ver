import React from "react";
import ScrollProgressBar from "./ScrollProgressBar";
import Header from "@/components/header/Header";
import Slider from "@/components/Slider/Slider";
import Divider from "./Divider";
import Honors from "@/components/Honors";
import Services from "@/components/Services";
import AboutUs from "@/components/AboutUs";
import KnowledgeBase from "@/components/KnowledgeBase";
import WhyUs from "@/components/WhyUs";
import Footer from "@/components/Footer";
import BlogSection from "@/components/BlogSection/BlogSection";

function AppLayout() {
  return (
    <div>
      <ScrollProgressBar />
      <Header />
      <div className="max-w-sm sm:max-w-2xl lg:max-w-7xl mx-auto px-5">
        <Slider />
        <Divider />
        <WhyUs />
        <Divider />
        <Services />
        <Divider />
        <AboutUs />
        <Divider />
        <KnowledgeBase />
        <Divider />
        <Honors />
        <Divider />
        <BlogSection />
      </div>
      <Footer />
    </div>
  );
}

export default AppLayout;
