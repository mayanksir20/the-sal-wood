import React from "react";

import OurServices from "../components/ServiceCard/OurServices";
import Carousel from "../components/Carousel/Carousel";
import Facilities from "../components/Facilities/Facilities";
import ExclusiveOffers from "../components/ExclusiveOffers/ExclusiveOffers";
// import VirtualTour from "../components/VirtualTour/VirtualTour";

const HomeSection = () => {
  return (
    <section className="w-full">
      <h2 className="text-2xl font-bold mb-4">Welcome to Our Site</h2>
      {/* Use the Carousel here */}
      <Carousel />
      <OurServices />
      <Facilities />
      <ExclusiveOffers/>
    </section>
  );
};

export default HomeSection;
