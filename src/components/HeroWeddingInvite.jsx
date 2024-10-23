import React from "react";
import { motion } from "framer-motion";
import floralFrame from "../assets/floral-frame.png";
import backgroundImg from "../assets/background-wedding.png";

const HeroWeddingInvite = () => {
  return (
    <div
      className="relative flex items-center justify-center w-full h-screen bg-center bg-cover"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      {/* Floral frame decoration */}
      <motion.img
        src={floralFrame}
        alt="Floral Frame"
        className="absolute top-0 object-cover w-full h-full opacity-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        whileHover={{ scale: 1.05 }} // Slight scale on hover
        whileTap={{ scale: 0.95 }} // Scale down slightly when clicked
      />

      {/* Central invitation text */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        whileHover={{ scale: 1.02 }} // Subtle scaling for hover
      >
        <h1 className="mb-4 font-serif text-6xl text-red-800">
          Manasa & Shreedhaar
        </h1>
        <p className="text-2xl font-light text-red-600">
          We're Getting Married
        </p>

        {/* Call to action */}
        <motion.button
          className="px-6 py-3 mt-8 font-medium text-black bg-white rounded-full"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Learn More
        </motion.button>
      </motion.div>
    </div>
  );
};

export default HeroWeddingInvite;
