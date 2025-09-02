import React from "react";

import OurServices from "../components/OurServices";
import Carousel from "../components/Carousel/Carousel";

const HomeSection = () => {


  return (
    <section className="w-full">
      <h2 className="text-2xl font-bold mb-4">Welcome to Our Site</h2>
      {/* Use the Carousel here */}
      <Carousel />
      <OurServices/>
    </section>
  );
};

export default HomeSection;
