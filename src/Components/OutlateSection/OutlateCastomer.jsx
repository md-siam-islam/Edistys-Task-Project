import React from "react";
import { motion } from "framer-motion";
import mainImg from "../../assets/Backgrounds-Task/costomerImg.avif";
import LogoImg from "../../assets/Backgrounds-Task/Costomer1.svg";
import Logo2Img from "../../assets/Backgrounds-Task/costomerPaymentimg.svg";
import Logo3Img from "../../assets/Backgrounds-Task/logo-3.svg";
import logo4 from '../../assets/Frames/carousel-image-frame-1.svg';
import logo5 from '../../assets/Frames/founder/2.svg';
import logo6 from '../../assets/Backgrounds-Task/ctaMobileWaveLines.svg';

const OutlateCastomer = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
      <div>
        <p className="font-bold text-blue-500 mb-5">
          POWERING THE FUTURE OF FINANCE
        </p>
        <h1 className="text-4xl lg:text-7xl mb-6">
          Uncovering new ways to delight customers
        </h1>
        <p className="font-bold text-gray-500 mb-7 hidden lg:flex">
          AnyTech is revolutionising financial technology by introducing
          innovative and real-time transaction account processing capabilities,
          specifically designed for retail financial services.
        </p>
        <p className="text-gray-500 hidden lg:flex">
          Our modern approach surpasses traditional banking and card processing
          systems, empowering you with the most advanced technology for lasting
          success.
        </p>
      </div>

      <div className="relative">
        <div>
          <img src={mainImg} alt="" className="relative z-10" />
        </div>

        <motion.span
          className="absolute w-[100px] top-10 -right-10 z-20"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <img src={LogoImg} alt="" />
        </motion.span>

        <motion.span
          className="absolute top-32 left-16 w-[80px] z-20"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        >
          <img src={Logo3Img} alt="" />
        </motion.span>

        <motion.span
          className="absolute top-20 -left-5 w-[50px] z-20"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <img src={Logo2Img} alt="" />
        </motion.span>

        <motion.span
          className="absolute -top-14 -left-5 z-0"
          animate={{ y: [0, -25, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <img src={logo4} alt="" />
        </motion.span>

        <motion.span
          className="absolute bottom-3 z-20"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 3.5, repeat: Infinity }}
        >
          <img src={logo5} alt="" />
        </motion.span>

        <motion.span
          className="absolute bottom-3 -right-4 z-20"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 2.8, repeat: Infinity }}
        >
          <img src={logo5} alt="" />
        </motion.span>

        <motion.span
          className="absolute -bottom-3 -right-8 z-0"
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
        >
          <img src={logo6} alt="" />
        </motion.span>
      </div>

      <p className="font-bold text-gray-500 mb-7 lg:hidden flex">
        AnyTech is revolutionising financial technology by introducing
        innovative and real-time transaction account processing capabilities,
        specifically designed for retail financial services.
      </p>
      <p className="text-gray-500 lg:hidden flex">
        Our modern approach surpasses traditional banking and card processing
        systems, empowering you with the most advanced technology for lasting
        success.
      </p>
    </div>
  );
};

export default OutlateCastomer;
