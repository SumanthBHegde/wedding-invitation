import React from "react";
import Navbar from "./components/Navbar";
import "./index.css";
import HeroComponent from "./components/Hero";
import WeddingInviteDetails from "./components/WeddingInviteDetails";
import CollageSection from "./components/CollageSection";
import MapSection from "./components/MapSection";
import EndingDesign from "./components/EndingDesign";

function App() {
  return (
    <div className="min-h-screen App bg-custom-gradient">
      <Navbar />
      {/* Sections for hero, details, gallery, and directions */}
      <section id="hero" className="min-h-screen mx-2">
        <HeroComponent />
      </section>
      <EndingDesign backgroundImgIndex={2} />

      <section id="details" className="min-h-screen mx-2">
        <WeddingInviteDetails />
      </section>
      <EndingDesign backgroundImgIndex={2} />

      <section id="gallery" className="min-h-screen mx-2">
        <CollageSection />
      </section>
      <EndingDesign backgroundImgIndex={3} />

      <section id="map" className="min-h-screen mx-2">
        <MapSection />
      </section>

      <footer className="bg-gradient-to-b from-[#FCECDD]/0 to-[#FFC288]">
        <h1 className="py-10 lg:py-20 text-2xl lg:text-4xl text-center font-semibold text-[#8e4e23]">
          "Join us to celebrate our new beginning."
        </h1>
      </footer>
    </div>
  );
}

export default App;
