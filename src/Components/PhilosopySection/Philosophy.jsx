import React from "react";
import img1 from '../../assets/Task icon/Philosophy.avif'
import img2 from '../../assets/Task icon/mobiledevice.avif'

const Philosophy = () => {
  return (
    <div className="my-20">
      <div className="text-center">
        <p className="text-blue-500 font-bold mb-2">OUR PHILOSOPHY</p>
        <h1 className="text-2xl md:text-5xl font-semibold text-gray-600">
          Human-centred innovation
        </h1>
      </div>

      <div className="hidden md:flex mt-8">
        <span><img src={img1} alt="" /></span>
      </div>
      <div className="md:hidden flex mt-8">
        <span><img src={img2} alt="" /></span>
      </div>
    </div>
  );
};

export default Philosophy;
