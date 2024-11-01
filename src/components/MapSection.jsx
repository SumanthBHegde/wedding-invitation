import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { backgroundWedding3 as backgroundImg } from "../assets/assets.js";

const MapSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const handleOpenDirections = () => {
    window.open(
      "https://www.google.com/maps/dir/?api=1&destination=14.496444536721285,74.69081278490076",
      "_blank"
    );
  };

  return (
    <motion.div
      ref={sectionRef}
      className="py-16 bg-center bg-cover"
      style={{ backgroundImage: `url(${backgroundImg})` }}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 1 }}
    >
      <motion.h2
        className="mb-8 font-serif text-5xl text-center font-main"
        initial={{ y: -30, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : {}}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Venue Location
      </motion.h2>

      <div className="grid max-w-6xl gap-8 mx-auto md:grid-cols-2">
        <motion.div
          className="overflow-hidden rounded-lg shadow-lg"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31237.202731417135!2d74.69081278490076!3d14.496444536721285!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDI5JzQ2LjgiTiA3NMKwNDEnMjcuMyJF!5e0!3m2!1sen!2sin!4v1600123456789!5m2!1sen!2sin&z=15"
            width="100%"
            height="400"
            allowFullScreen=""
            loading="lazy"
            title="Venue Map"
            className="w-full h-80 md:h-full"
          ></iframe>
        </motion.div>

        <motion.div
          className="p-6 text-gray-700 bg-white rounded-lg shadow-lg bg-opacity-70"
          initial={{ x: 30, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <h3 className="mb-4 text-3xl font-medium font-mid">
            Travel Recommendations
          </h3>

          <div className="mb-4">
            <h4 className="text-2xl font-mid ">Travel Route:</h4>
            <ul className="text-lg font-semibold list-disc list-inside text-orange-950">
              <li>Kumata-Bandala-Hutgar</li>
              <li>Sirsi-Ammenalli-Kanchikai-Hutgar</li>
              <li>Sirsi-Bandala-Hutgar</li>
            </ul>
          </div>

          <div className="mb-4">
            <h4 className="text-2xl font-mid">Public Transportation:</h4>
            <ul className="text-lg font-semibold list-disc list-inside text-orange-950">
              <li>Kumata Bus: Bandla Stop</li>
              <li>Heggarani Bus: Kanchikai Stop</li>
              <li>Shivalamane Bus: Hutgar Shale Stop</li>
            </ul>
          </div>

          {/* Directions Button */}
          <motion.button
            onClick={handleOpenDirections}
            className="px-4 py-2 mt-4 font-semibold text-white transition-all duration-300 ease-in-out transform rounded-lg shadow-md hover:scale-105"
            style={{
              background:
                "linear-gradient(to right, #b35d5c, #a54947, #8d3938)",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7, duration: 0.8 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Directions
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default MapSection;
