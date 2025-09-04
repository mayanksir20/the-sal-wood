import React from "react";
import "./ExclusiveOffers.css";

const ExclusiveOffers = () => {
  const offers = [
    {
      id: 1,
      title: "Make your choice right now!",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia quisquam doloremque nostrum.",
      extra: "Learn now and get 40% discount!",
      image:
        "https://images.unsplash.com/photo-1586511925558-a4c6376fe65f?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 2,
      title: "Your best moments",
      text: "Enjoy luxury stays and unforgettable experiences with our exclusive deals.",
      extra: "Book today and save 25%!",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 3,
      title: "Celebrate in style",
      text: "From weddings to anniversaries, make every celebration memorable.",
      extra: "Special offers for group bookings!",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 4,
      title: "Relax & Rejuvenate",
      text: "Take a break and unwind at our serene luxury retreats.",
      extra: "Spa offers up to 30% off!",
      image:
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  return (
    <section className="exclusive-offers py-5">
      <div className="container">
        <div className="section-title text-center mb-5">
          <span className="subtitle">Exclusive Offers</span>
          <h2>Celebrate Your Dream Events</h2>
          <p className="sub-details">
            From intimate gatherings to grand celebrations, our exclusive offers
            ensure your moments are filled with joy, luxury, and unforgettable
            memories.
          </p>
        </div>

        <div className="row">
          {offers.map((offer) => (
            <div key={offer.id} className="col-lg-3 col-md-6 col-sm-12 mb-4">
              <div className="card-hover">
                <div className="card-hover__content">
                  <h3 className="card-hover__title">{offer.title}</h3>
                  <p className="card-hover__text">{offer.text}</p>
                  <a href="#" className="card-hover__link">
                    <span>Learn More</span>
                    <svg
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </a>
                </div>
                <div className="card-hover__extra">
                  <h4>{offer.extra}</h4>
                </div>
                <img src={offer.image} alt={offer.title} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExclusiveOffers;
