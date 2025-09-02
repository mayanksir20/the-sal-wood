import React, { useEffect, useState } from "react";
import { fetchBannerContent } from "../../Services/api";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Carousel.css";

const Carousel = () => {
  const [bannerContent, setBannerContent] = useState([]);

  useEffect(() => {
    fetchBannerContent().then((data) => setBannerContent(data));
  }, []);

  if (bannerContent.length === 0) return null;

  return (
    <div id="resortCarousel" className="carousel slide" data-bs-ride="carousel">
      {/* Indicators */}
      <div className="carousel-indicators">
        {bannerContent.map((_, index) => (
          <button
            key={index}
            type="button"
            data-bs-target="#resortCarousel"
            data-bs-slide-to={index}
            className={index === 0 ? "active" : ""}
            aria-current={index === 0 ? "true" : "false"}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>

      {/* Slides */}
      <div className="carousel-inner">
        {bannerContent.map((item, index) => (
          <div
            key={index}
            className={`carousel-item ${index === 0 ? "active" : ""}`}
          >
            <img
              src={item.image}
              className="d-block w-100 carousel-img"
              alt={item.heading}
            />

            {/* Black overlay over image */}
            <div className="carousel-img-overlay"></div>

            {/* Content wrapper */}
            <div className="carousel-content-wrapper">
              <div className="carousel-content">
                <h2 className="carousel-heading">{item.heading}</h2>
                <h5 className="carousel-sub">{item.subcontent}</h5>
                <p className="carousel-text">{item.content}</p>
                <button className="btn btn-warning">{item.buttonText}</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#resortCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon"></span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#resortCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon"></span>
      </button>
    </div>
  );
};

export default Carousel;
