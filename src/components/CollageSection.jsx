import React, { useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  backgroundWedding4 as backgroundImg,
  photo1,
  photo2,
  photo3,
  photo4,
  photo5,
} from "../assets/assets";

const CollageSection = () => {
  const [images, setImages] = useState([
    photo1,
    photo2,
    photo3,
    photo4,
    photo5,
  ]);

  return (
    <div
      className="relative py-16 bg-center bg-cover"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <h2 className="mb-8 font-serif text-5xl text-center font-main">
        Latest Photos
      </h2>

      <div className="grid max-w-6xl grid-cols-2 gap-4 mx-auto sm:grid-cols-3 lg:grid-cols-5 lg:gap-6">
        {/* First large image spanning multiple rows and columns */}
        <ImageCard
          src={images[0]}
          className="col-span-2 row-span-2 h-[300px] sm:h-[350px] lg:col-span-3 lg:row-span-3 lg:h-[500px] flex justify-center items-center"
          animationDelay={0}
        />

        {/* Smaller images */}
        {images.slice(1).map((image, index) => (
          <ImageCard
            key={index}
            src={image}
            className="h-[150px] sm:h-[200px] lg:h-[200px] lg:col-span-1 lg:row-span-1 lg:m-2" // Reduced height for larger screens
            animationDelay={index * 0.2}
          />
        ))}
      </div>
    </div>
  );
};

// Reusable ImageCard component with hover and scroll-triggered animations
const ImageCard = ({ src, className, animationDelay }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className={`${className} transform transition-transform duration-500`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.8, delay: animationDelay }}
      whileHover={{ scale: 1.08 }}
    >
      <img
        src={src}
        alt="Wedding photo"
        className="object-cover w-full h-full transition-shadow duration-300 rounded-lg shadow-2xl hover:shadow-red-400/80"
      />
    </motion.div>
  );
};

export default CollageSection;
