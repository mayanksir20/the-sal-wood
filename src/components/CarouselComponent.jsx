import React, { useState, useEffect } from "react";
import banner2 from "../assets/Images/banner-1.png";
import banner3 from "../assets/Images/banner-2.png";
import banner4 from "../assets/Images/banner-3.png";
import banner5 from "../assets/Images/banner-4.jpg";

const images = [banner2, banner3, banner4, banner5];

const CarouselContainer = () => {
  const [bannerContent, setBannerContent] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fetch content
  useEffect(() => {
    fetch("/db.json")
      .then((res) => res.json())
      .then((data) => setBannerContent(data.bannerContent))
      .catch((err) => console.error(err));
  }, []);

  // Autoplay
  useEffect(() => {
    if (bannerContent.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % bannerContent.length);
    }, 5000); // slower autoplay

    return () => clearInterval(interval);
  }, [bannerContent]);

  if (bannerContent.length === 0) return null;

  return (
    <div className="relative w-full h-[600px] md:h-[600px] overflow-hidden">
      {/* Slides wrapper */}
      <div
        className="flex transition-transform duration-1500 ease-in-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img, idx) => (
          <div key={idx} className="min-w-full h-full relative">
            {/* Image */}
            <img src={img} alt={`Banner ${idx}`} className="w-full h-full object-cover" />

            {/* Overlay behind content only */}
            <div className="absolute left-0 top-0 h-full w-full flex items-center">
              <div className="bg-black/50 p-6 md:p-12 max-w-lg text-white">
                <h2 className="text-3xl md:text-5xl  font-bold mb-4">
                  {bannerContent[idx].heading}
                </h2>
                <p className="mb-6">{bannerContent[idx].content}</p>
                <button className="mt-3 block w-full rounded-xl bg-[#c4c451] px-4 py-2 text-center font-semibold text-white shadow hover:bg-[#b5b53e] transition">
                  {bannerContent[idx].buttonText}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <button
        onClick={() =>
          setCurrentIndex(
            currentIndex === 0 ? bannerContent.length - 1 : currentIndex - 1
          )
        }
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 rounded-full p-2 z-20"
      >
        &#10094;
      </button>
      <button
        onClick={() =>
          setCurrentIndex((currentIndex + 1) % bannerContent.length)
        }
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 rounded-full p-2 z-20"
      >
        &#10095;
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {bannerContent.map((_, idx) => (
          <span
            key={idx}
            className={`h-2 w-2 rounded-full ${
              idx === currentIndex ? "bg-white" : "bg-white/50"
            } cursor-pointer`}
            onClick={() => setCurrentIndex(idx)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default CarouselContainer;
