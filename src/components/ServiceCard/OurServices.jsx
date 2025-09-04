import React, { useEffect, useState } from "react";
import { fetchServices } from "../../Services/api";
import "./OurServices.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUtensils,
  faMusic,
  faCar,
  faWifi,
  faFire,
} from "@fortawesome/free-solid-svg-icons";

const TypingHeading = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [forward, setForward] = useState(true);

  useEffect(() => {
    const servicesText = [
      "We provide luxury services",
      "We provide wedding services",
      "We provide live music concerts",
      "We provide corporate events",
      "We provide premium catering",
    ];

    let timeout;

    if (forward) {
      if (subIndex < servicesText[index].length) {
        timeout = setTimeout(() => {
          setText(prev => prev + servicesText[index][subIndex]);
          setSubIndex(subIndex + 1);
        }, 150); // typing speed
      } else {
        timeout = setTimeout(() => setForward(false), 1500); // wait before deleting
      }
    } else {
      if (subIndex > 0) {
        timeout = setTimeout(() => {
          setText(prev => prev.slice(0, -1));
          setSubIndex(subIndex - 1);
        }, 100); // deleting speed
      } else {
        setForward(true);
        setIndex((index + 1) % servicesText.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [subIndex, index, forward]);

  return (
    <h2 className="wedding-heading">
      {text}
      <span className="cursor"></span>
    </h2>
  );
};

const OurServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetchServices().then(setServices);
  }, []);

  return (
    <div className="services-bg py-5">
      <div className="text-center mb-5">
        <TypingHeading />
        <div className="decorative-line">
          <span></span>
        </div>
        <p className="sub-content">
          From unforgettable wedding celebrations to live music concerts and
          premium corporate events, we offer meticulously planned services
          with elegance and style. Experience exceptional catering, exquisite
          décor, professional planning, and entertainment that will leave your
          guests amazed.
        </p>
      </div>

      <div className="cardbanner-banner">
        <div className="container py-5">
          <div className="row gx-4 gy-5">
            {services.slice(0, 6).map((service, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div className="service-card h-100">
                  {/* Poster image */}
                  <div className="poster">
                    <img
                      src={service.img}
                      alt={service.title}
                      className="img-fluid"
                    />
                  </div>

                  {/* Details */}
                  <div className="details p-3">
                    <div className="title-rating d-flex justify-content-between align-items-center mb-2">
                      <h5 className="mb-0">{service.title}</h5>
                    </div>
                    <p className="mb-3">{service.description}</p>
                    <button className="btn-salwood w-100">Discover</button>
                  </div>

                  {/* Footer with icons */}
                  <div className="service-footer d-flex justify-content-around align-items-center py-2 border-top">
                    <FontAwesomeIcon
                      icon={faUtensils}
                      className="service-icon"
                      title="Catering"
                    />
                    <FontAwesomeIcon
                      icon={faMusic}
                      className="service-icon"
                      title="DJ / Music"
                    />
                    <FontAwesomeIcon
                      icon={faCar}
                      className="service-icon"
                      title="Transportation"
                    />
                    <FontAwesomeIcon
                      icon={faWifi}
                      className="service-icon"
                      title="Wi-Fi"
                    />
                    <FontAwesomeIcon
                      icon={faFire}
                      className="service-icon"
                      title="Fire Safety"
                    />
                    <div className="service-more">20+</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
