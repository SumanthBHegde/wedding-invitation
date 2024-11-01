import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ReactLenis } from "lenis/dist/lenis-react";
import HeroWeddingInvite from "./HeroWeddingInvite";

import {
  weddingAvatarBgrm as mobileForegroundImg,
  weddingBackground3 as mobileBackgroundImg,
} from "../assets/assets.js";

const SECTION_HEIGHT_LAPTOP = 800;
const SECTION_HEIGHT_MOBILE = 300;

// Unified Hero Component for Mobile and Laptop
const Hero = ({ isMobile }) => {
  const SECTION_HEIGHT = isMobile
    ? SECTION_HEIGHT_MOBILE
    : SECTION_HEIGHT_LAPTOP;

  return (
    <>
      {isMobile ? (
        <MobileHero sectionHeight={SECTION_HEIGHT} />
      ) : (
        <HeroWeddingInvite />
      )}
    </>
  );
};

// Mobile Hero Component
const MobileHero = ({ sectionHeight }) => {
  const startYMobile = window.innerHeight * 0.5;

  return (
    <div
      style={{ height: `calc(${sectionHeight}px + 100vh)` }}
      className="relative w-full"
    >
      <ParallaxBackground
        image={mobileBackgroundImg}
        sectionHeight={sectionHeight}
      />
      <ParallaxForeground
        image={mobileForegroundImg}
        sectionHeight={sectionHeight}
        offsetX="0"
        startY={startYMobile}
        endY={startYMobile - 30} // Slower movement for foreground
        className="w-auto mx-auto h-[400px]"
      />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-[#FCECDD]/0 to-[#FFC288]" />
    </div>
  );
};

// Parallax Background Component
const ParallaxBackground = ({ image, sectionHeight }) => {
  const { scrollY } = useScroll();
  const backgroundSize = useTransform(
    scrollY,
    [0, sectionHeight],
    ["100%", "100%"]
  );

  return (
    <motion.div
      className="sticky top-0 w-full h-screen"
      style={{
        scale: backgroundSize,
      }}
    >
      <img
        src={image}
        alt="background"
        className="object-cover object-center w-full h-full"
      />
    </motion.div>
  );
};

// Parallax Foreground Component with Fade
const ParallaxForeground = ({
  image,
  sectionHeight,
  offsetX,
  startY,
  endY,
  className,
  imgClassName,
}) => {
  const { scrollY } = useScroll();

  // Slow scroll movement for the avatar image
  const y = useTransform(scrollY, [0, sectionHeight], [startY, endY]);

  // Fade out when approaching the center of the screen
  const opacity = useTransform(
    scrollY,
    [0, sectionHeight / 2, sectionHeight],
    [1, 0.5, 0]
  );

  return (
    <motion.div
      className={`absolute top-0 ${className}`}
      style={{
        translateX: offsetX,
        translateY: y,
        opacity: opacity,
      }}
    >
      <img
        src={image}
        alt="foreground"
        className={`w-full h-full object-cover ${imgClassName}`}
      />
    </motion.div>
  );
};

// Main Hero Component
const HeroComponent = () => {
  const isMobile = window.innerWidth < 768;
  return (
    <ReactLenis root options={{ lerp: 0.05 }}>
      <Hero isMobile={isMobile} />
    </ReactLenis>
  );
};

export default HeroComponent;
