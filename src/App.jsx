import React from "react";
import Navbar from "./components/Navbar";
import "./index.css";
import HeroComponent from "./components/Hero";
import WeddingInviteDetails from "./components/WeddingInviteDetails";
import CollageSection from "./components/CollageSection";
import MapSection from "./components/MapSection";

function App() {
  return (
    <div className="min-h-screen App bg-custom-gradient">
      <Navbar />
      {/* Sections for hero, details, gallery, and footer */}
      <section id="hero" className="min-h-screen mx-2">
        <HeroComponent />
      </section>
      <div className="h-20" />

      <section id="details" className="min-h-screen mx-2">
        <WeddingInviteDetails />
      </section>
      <div className="h-20" />

      <section id="gallery" className="min-h-screen mx-2">
        <CollageSection />
      </section>
      <div className="h-20" />

      <section id="map" className="min-h-screen mx-2">
        <MapSection />
      </section>

      <footer className="bg-gradient-to-b from-[#FCECDD]/0 to-[#FFC288]">
        <h1 className="py-20 text-4xl text-center"></h1>
      </footer>
    </div>
  );
}

export default App;
