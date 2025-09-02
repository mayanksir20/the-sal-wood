import React, { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

const OurServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services") // db.json endpoint
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.error("Error fetching services:", err));
  }, []);

  return (
    <div
      className="relative bg-fixed bg-cover bg-center"
      style={{
        backgroundImage:
          "../assets/images/our_services_bg.jpg",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content on top of background */}
      <div className="relative z-10 w-[95%] mx-auto py-16">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
          We are provider of luxury service
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="w-full shadow-lg block">
              <CardHeader
                floated={false}
                className="relative overflow-hidden group h-56"
              >
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-black/60" />
              </CardHeader>

              <CardBody>
                <div className="mb-3 flex items-center justify-between">
                  <Typography className="font-medium text-2xl text-[#b5b53e]">
                    {service.title}
                  </Typography>
                  <Typography
                    color="blue-gray"
                    className="flex items-center gap-1.5 font-normal"
                  >
                    ⭐ {service.rating}
                  </Typography>
                </div>
                <Typography
                  color="gray"
                  className="text-justify text-base leading-relaxed"
                >
                  {service.description}
                </Typography>
              </CardBody>

              <CardFooter className="pt-3">
                <Button size="lg" fullWidth={true}>
                  Reserve
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurServices;
