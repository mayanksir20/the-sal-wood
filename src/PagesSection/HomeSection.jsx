import React from "react";
import CarouselComponent from "../components/CarouselComponent";
import OurServices from "../components/OurServices";

const HomeSection = () => {


  return (
    <section className="w-full">
      <h2 className="text-2xl font-bold mb-4">Welcome to Our Site</h2>
      {/* Use the Carousel here */}
      <CarouselComponent  />
      <OurServices/>
    </section>
  );
};

export default HomeSection;
