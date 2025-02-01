import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from "../../assets/SliderIMg/slider!.avif";
import img2 from "../../assets/SliderIMg/slider2.avif";
import img3 from "../../assets/SliderIMg/slider3.avif";
import img4 from "../../assets/SliderIMg/slider4.avif";


const SliderSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      title: "Secure and safe",
      heading: "Highly secure and safe",
      description:
        "Discover unparalleled security trusted by financial institutions across the globe. Our applications are meticulously developed in compliance with international security standards, drawing on 20 years of technical expertise.",
      description2:
        " Join over 40 esteemed Fls, each serving more than 200 million customers, and benefit from our secure, robust and reliable infrastructure.",
      image: img1,
    },
    {
      title: "Compliance ready",
      heading: "Manage compliance with ease",
      description:
        "Navigate through the evolving regulatory landscape with confidence by streamlining compliance management—through real-time risk monitoring solutions powered by AI and machine learning.",
      description2:
        "Transform your compliance strategy with flexible and diversified policy rules, powered by cutting-edge technology that is designed for seamless integration with core banking and card payment systems.",
      image: img2,
    },
    {
      title: "Agile and adaptable",
      heading: "Agile and adaptable for growth",
      description:
        "Innovate with evolving customer demands through our open platform-based technology architecture. Stay ahead of the ever-changing financial landscape with a strong focus on security, compliance and performance.",
      description2:
        "Optimise your offerings to unlock new revenue streams and deliver an extraordinary customer experience, with digitally designed core banking, payment processing and lending capabilities.",
      image: img3,
    },
    {
      title: "Customer focused",
      heading: "Purpose-built financial services",
      description:
        "Elevate customer experience and achieve agile financial product innovation with the world’s first, consumer-centric, real-time transaction account processing and credit limit system.",
      description2:
        "Experience the advantages of integrated retail financial services technology, real-time analysis of transactional behaviour and product marketing opportunities.",
      image: img4,
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    beforeChange: (current, next) => setActiveSlide(next),
  };

  return (
    <div>
        <div className="my-16 text-center">
            <p className="text-blue-500 font-semibold mb-3">TECHNOLOGY BUILT FOR YOU</p>
            <h1 className="text-2xl lg:text-7xl">The future of finance</h1>
        </div>
      {/* Tabs */}
      <div className="flex justify-center mb-6 flex-col md:flex-row gap-5">
        {slides.map((slide, index) => (
          <button
            key={index}
            className={`px-4 py-2 mx-2 rounded-lg font-medium ${
              activeSlide === index
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setActiveSlide(index)}
          >
            {slide.title}
          </button>
        ))}
      </div>

      <Slider {...settings}>
        {slides.map((data, index) => (
          <div>

            <div className="flex items-center justify-between gap-5 flex-col lg:flex-row  lg:w-10/12 mx-auto lg:px-10 lg:shadow-2xl rounded-2xl lg:py-3 p-2">

             <div className="lg:w-2/4 w-full">
             <h3 className="text-blue-500 font-semibold mb-2">
                {data.title}
              </h3>
              <h2 className="text-2xl font-bold mb-4">{data.heading}</h2>
              <strong className="text-gray-600 mb-2">{data.description}</strong>
              <p className="text-gray-600 my-2">{data.description2}</p>
             </div>
              
              <div className="lg:w-2/4 w-full">
              <img
                src={data.image}
                alt={data.title}
                className="w-[490px] md:h-[425px] object-cover rounded-lg shadow-md "
              />
            </div>

            </div>

          </div>
        ))}
      </Slider>

      {/* Slider */}
      {/* <Slider {...settings}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className="flex flex-col lg:flex-row items-center bg-white p-6 rounded-lg shadow-lg">

            <div className="md:w-1/2 md:pr-6 ">
              <h3 className="text-blue-500 font-semibold mb-2">{slide.title}</h3>
              <h2 className="text-2xl font-bold mb-4">{slide.heading}</h2>
              <p className="text-gray-600">{slide.description}</p>
            </div>

            <div className="md:w-1/2">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full rounded-lg shadow-md"
              />
            </div>
          </div>
        ))}
      </Slider> */}
    </div>
  );
};

export default SliderSection;
