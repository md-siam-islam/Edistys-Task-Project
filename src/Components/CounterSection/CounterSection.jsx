import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const CounterSection = () => {

  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.5, 
  });

  return (
    <div
      ref={ref}
      className="bg-gray-100 lg:p-10 p-5 text-center rounded-lg shadow-lg my-10"
    >
      <h2 className="text-2xl font-bold mb-6 text-blue-600">TRUSTED BY THE BEST</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Counter 1 */}
        <div className="flex md:flex-col flex-row gap-3 items-center border-b-2 md:border-0 border-dashed">
          {inView && (
            <div className="flex items-center gap-1">
            <span className="text-7xl font-semibold text-blue-600">{">"}</span>
            <CountUp start={0} end={20} duration={2.5} className="text-5xl font-bold text-blue-500" />
            </div>
          )}
          <p className="text-black mt-2 font-semibold">Years of Experience</p>
        </div>

        {/* Counter 2 */}
        <div className="flex md:flex-col flex-row gap-1 items-center border-b-2 md:border-0 border-dashed">
          {inView && (
            <div className="flex items-center gap-1">
                <span className="text-7xl font-semibold text-blue-600 hidden lg:flex">{'+'}</span>
                <CountUp start={0} end={40} duration={3} className="text-5xl  font-bold text-blue-500" />
                <span className="text-7xl font-semibold text-blue-600 lg:hidden">{'+'}</span>
            </div>
          )}
          <p className="text-black mt-2 font-semibold ">Financial Institutions</p>
        </div>

        {/* Counter 3 */}
        <div className="flex md:flex-col flex-row gap-1 items-center border-b-2 md:border-0 border-dashed">
          {inView && (
            <div className="flex items-center gap-1">
                 <span className="text-7xl font-semibold text-blue-600">{'>'}</span>
                <CountUp start={0} end={200} duration={2} className="text-5xl font-bold text-blue-500" />
            </div>
          )}
          <p className="text-black mt-2 font-semibold">Customers Each</p>
        </div>
      </div>
    </div>
  );
};

export default CounterSection;
