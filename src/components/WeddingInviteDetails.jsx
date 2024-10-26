import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  floralVector1,
  floralVector2,
  floralVector4 as floralVector3,
  floralVector5 as floralVector4,
  backgroundWedding2 as backgroundImg,
} from "../assets/assets.js";

const WeddingInviteDetails = () => {
  const headingRef = useRef(null);
  const isHeadingInView = useInView(headingRef, { triggerOnce: true });

  const floralRef = useRef(null);
  const isFloralInView = useInView(floralRef, { triggerOnce: true });

  // Component for large devices
  const LargeDeviceDetails = () => (
    <motion.div
      className="relative z-10 w-full max-w-xs p-4 text-center border-4 border-red-300 border-double rounded-lg shadow-lg bg-opacity-90 md:max-w-4xl md:p-12"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
    >
      <div className="flex flex-col space-y-4 md:grid md:grid-cols-3 md:gap-6 md:space-y-0">
        {/* Time */}
        <div className="text-center md:border-r md:border-red-300 md:pr-6">
          <h4 className="text-lg font-semibold text-gray-800 md:text-2xl">
            12:00 PM
          </h4>
          <h5 className="text-base italic text-gray-500 md:text-xl">
            Sharp at Noon
          </h5>
        </div>

        {/* Venue */}
        <div className="text-center md:border-r md:border-red-300 md:px-6">
          <h4 className="text-lg font-semibold text-gray-800 md:text-2xl">
            Nilaya
          </h4>
          <h5 className="text-sm italic text-gray-500 md:text-lg">
            Hutgar, Siddapura 018956 <br />
            address 2
          </h5>
        </div>

        {/* Date */}
        <div className="text-center md:pl-6">
          <div className="flex items-center justify-center space-x-1">
            <h4 className="text-2xl font-bold text-pink-600 md:text-4xl">27</h4>
            <h4 className="text-base text-gray-700 md:text-xl">RD</h4>
          </div>
          <h5 className="text-base text-gray-500 md:text-2xl">November</h5>
          <h5 className="text-sm italic text-gray-500 md:text-lg">Wednesday</h5>
        </div>
      </div>
    </motion.div>
  );

  // Component for mobile devices
  const MobileDeviceDetails = () => (
    <motion.div
      className="relative z-10 w-full max-w-xs p-4 text-center border-4 border-red-300 border-double rounded-lg shadow-lg bg-opacity-90 md:max-w-4xl md:p-12"
      initial={{ opacity: 0, y: 80, scale: 0.9 }}
      animate={{
        opacity: isFloralInView ? 1 : 0,
        y: isFloralInView ? 0 : 80,
        scale: isFloralInView ? 1 : 0.9,
      }}
      transition={{ duration: 1.5 }}
    >
      <div className="flex flex-col md:flex-row md:space-x-6">
        {/* Date */}
        <div className="text-center">
          <div className="flex items-center justify-center space-x-1">
            <h4 className="text-2xl font-bold text-pink-600 md:text-4xl">27</h4>
            <h4 className="text-base text-gray-700 md:text-xl">RD</h4>
          </div>
          <h5 className="text-base text-gray-500 md:text-2xl">November</h5>
          <h5 className="text-sm italic text-gray-500 md:text-lg">Wednesday</h5>
        </div>

        {/* Time */}
        <div className="text-center">
          <h4 className="text-lg font-semibold text-gray-800 md:text-2xl">
            12:00 PM
          </h4>
          <h5 className="text-base italic text-gray-500 md:text-xl">
            Sharp at Noon
          </h5>
        </div>

        {/* Venue */}
        <div className="text-center">
          <h4 className="text-lg font-semibold text-gray-800 md:text-2xl">
            Nilaya
          </h4>
          <h5 className="text-sm italic text-gray-500 md:text-lg">
            Hutgar, Siddapura 018956 <br />
            address 2
          </h5>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div
      className="relative flex flex-col items-center justify-center min-h-screen px-4 bg-center bg-cover bg-custom-gradient"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      {/* Heading text */}
      <motion.h1
        ref={headingRef}
        className="relative z-20 mb-8 text-3xl font-bold text-pink-700 md:text-5xl"
        initial={{ opacity: 0, y: -40 }}
        animate={isHeadingInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
      >
        You Are Invited!
      </motion.h1>

      {/* Background floral decorations */}
      <div ref={floralRef} className="hidden md:block">
        <motion.img
          src={floralVector1}
          alt="Floral Decoration 1"
          className="absolute top-0 left-0 w-full h-full"
          initial={{ opacity: 0.8 }}
          animate={isFloralInView ? { opacity: [0.8, 1, 0.8] } : {}}
          transition={{ duration: 2 }}
        />
        <motion.img
          src={floralVector2}
          alt="Floral Decoration 2"
          className="absolute bottom-0 right-0 w-full h-full"
          initial={{ opacity: 0.8 }}
          animate={isFloralInView ? { opacity: [0.8, 1, 0.8] } : {}}
          transition={{ duration: 2 }}
          whileHover={{ scale: 1.5 }}
        />
      </div>

      {/* For mobile devices */}
      <div ref={floralRef} className="block md:hidden">
        <motion.img
          src={floralVector3}
          alt="Floral Decoration 3"
          className="absolute bottom-0 left-0 w-full"
          initial={{ opacity: 0.8, scale: 0.9, y: 20 }}
          animate={isFloralInView ? { scale: 1, y: 0 } : {}}
          transition={{ duration: 1.5 }}
          whileHover={{ scale: 1.5 }}
        />
        <motion.img
          src={floralVector4}
          alt="Floral Decoration 4"
          className="absolute top-0 right-0 w-full"
          initial={{ opacity: 0.8, scale: 0.9, y: -20 }}
          animate={isFloralInView ? { scale: 1, y: 0 } : {}}
          transition={{ duration: 1.5 }}
          whileHover={{ scale: 1.5 }}
        />
      </div>

      {/* Conditional rendering for mobile or large device */}
      {window.innerWidth < 768 ? (
        <MobileDeviceDetails />
      ) : (
        <LargeDeviceDetails />
      )}
    </div>
  );
};

export default WeddingInviteDetails;
