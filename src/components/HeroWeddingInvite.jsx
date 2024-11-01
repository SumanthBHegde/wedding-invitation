import React from "react";
import { motion } from "framer-motion";
import Countdown from "react-countdown";
import {
  floralFrame,
  backgroundWedding1 as backgroundImg,
} from "../assets/assets.js";

const renderer = ({ days, hours, minutes, seconds }) => {
  return (
    <div className="flex justify-center space-x-4 text-3xl font-bold font-mid">
      <div>
        <span className="block">{days}</span>
        <span className="block text-sm">Days</span>
      </div>
      <div>
        <span className="block">{hours}</span>
        <span className="block text-sm">Hours</span>
      </div>
      <div>
        <span className="block">{minutes}</span>
        <span className="block text-sm">Minutes</span>
      </div>
      <div>
        <span className="block">{seconds}</span>
        <span className="block text-sm">Seconds</span>
      </div>
    </div>
  );
};

const HeroWeddingInvite = () => {
  const weddingDate = new Date("2024-11-27T12:00:00");

  return (
    <div
      className="relative flex items-center justify-center min-h-screen bg-center bg-cover bg-opacity-10"
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
        whileHover={{ scale: 1.05 }}
      />

      {/* Central invitation text */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        <h1 className="mb-4 font-serif text-6xl font-main">
          Manasa & Shridhar
        </h1>
        <p className="text-2xl font-light font-mini">We're Getting Married</p>

        {/* Countdown Timer */}
        <motion.div
          className="px-6 py-3 mt-8 text-3xl font-bold rounded-full"
          whileHover={{ scale: 0.95 }}
        >
          <Countdown date={weddingDate} renderer={renderer} />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroWeddingInvite;
