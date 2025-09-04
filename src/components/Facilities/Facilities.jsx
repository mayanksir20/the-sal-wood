import React from "react";
import Slider from "react-slick";
import "./Facilities.css";
import marriageHallImage from "../../assets/Images/banner-2.png";
import {
  FaPeopleGroup,
  FaMugHot,
  FaSquareParking,
  FaFaucetDrip,
  FaTruckPickup,
  FaPersonSwimming,
} from "react-icons/fa6";

const Facilities = () => {
  const facilities = [
    {
      id: 1,
      icon: <FaPeopleGroup size={36} />,
      title: "Meetings & Special Events",
      description: "Because you deserve the best event planning",
    },
    {
      id: 2,
      icon: <FaMugHot size={36} />,
      title: "Welcome Drink",
      description: "From nature, naturally.",
    },
    {
      id: 3,
      icon: <FaSquareParking size={36} />,
      title: "Parking Space",
      description: "Caring For Your Car The Way You Would.",
    },
    {
      id: 4,
      icon: <FaFaucetDrip size={36} />,
      title: "Cold & Hot Water",
      description: "24*7 water facility",
    },
    {
      id: 5,
      icon: <FaTruckPickup size={36} />,
      title: "Pick Up & Drop",
      description: "Pick and drop facility from your destination",
    },
    {
      id: 6,
      icon: <FaPersonSwimming size={36} />,
      title: "Swimming Pool",
      description: "The perfect workout",
    },
  ];

  const cards = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      title: "Destination Wedding​",
      desc: "Experience comfort like never before in our premium rooms.",
      button: "Book Now",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80",
      title: "Pre-Wedding Photoshoot",
      desc: "Make your special day unforgettable with our elegant hall.",
      button: "Explore",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
      title: "Post-Wedding Photoshoot",
      desc: "Relax and refresh yourself at our crystal clear pool.",
      button: "View More",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80",
      title: "Engagement Ceremony",
      desc: "Two souls, one promise — begin your forever amidst the serene beauty of Corbett.",
      button: "Reserve",
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      title: "Anniversary Celebration​",
      desc: "Love doesn’t need a special day, but anniversaries are perfect to relive your vows in paradise.",
      button: "Book Now",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: "200px",
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: { centerPadding: "120px" },
      },
      {
        breakpoint: 992,
        settings: { centerPadding: "80px" },
      },
      {
        breakpoint: 768,
        settings: { centerPadding: "40px" },
      },
      {
        breakpoint: 576,
        settings: { centerMode: false, slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="facilities-area-four mt-5 pt-70">
      <div className="container">
        <div className="section-title mb-5 text-center">
          <span className="subtitle">Facilities</span>
          <h2>Giving entirely awesome</h2>
        </div>

        {/* Facilities Grid */}
        <div className="row">
          {facilities.map((facility) => (
            <div key={facility.id} className="col-lg-4 col-sm-6 d-flex">
              <div className="singles-facilities w-100">
                <i className="icon">{facility.icon}</i>
                <div className="facilities-content">
                  <h3>{facility.title}</h3>
                  <p>{facility.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Marriage Card Section */}
      <div className="section-title my-5 text-center">
        <h2>Celebrate Your Dream Events</h2>
      </div>
      <div className="row p-0 m-0 position-relative mt-5 marrige-card">
        <div className="col-lg-5 p-0 col-md-12 mb-4 mb-lg-0">
          <div className="image-main text-center">
            <img
              src={marriageHallImage}
              alt="Marriage Hall"
              className="img-fluid rounded shadow"
            />
          </div>
        </div>

        <div className="col-lg-7 col-md-12 text-main">
          <div>
            <h2>WEDDING</h2>
            <p>
              Make your special day unforgettable with our elegant marriage
              hall. Perfect for weddings, receptions, and celebrations. Our
              spacious venue is designed with luxurious interiors, modern
              amenities, and a warm ambience to ensure every moment becomes
              truly memorable. With dedicated event planning support,
              customizable décor, and catering services, we provide everything
              you need to host a flawless celebration that matches your dreams.
            </p>
          </div>

          <div className="card-slider">
            <Slider {...settings}>
              {cards.map((card) => (
                <div key={card.id} className="card-slide">
                  <div className="card-image-wrapper">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="card-image"
                    />
                    <div className="card-overlay" />
                    <div className="card-content">
                      <h2>{card.title}</h2>
                      <p>{card.desc}</p>
                      <button className="card-btn">{card.button}</button>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facilities;
