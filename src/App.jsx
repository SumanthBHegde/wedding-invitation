import React from "react";
import Navbar from "./components/Navbar";
import "./index.css";
import HeroComponent from "./components/Hero";

function App() {
  return (
    <div className="App bg-gradient-to-b from-[#FCECDD] via-[#FFC288] to-[#FF6701]">
      <Navbar />
      {/* Sections for hero, details, gallery, and footer */}
      <section id="hero" className="min-h-screen">
        <HeroComponent />
      </section>
      <section id="details" className="min-h-screen bg-gray-200">
        <h1 className="py-20 text-4xl text-center">Wedding Details</h1>
      </section>
      <section id="gallery" className="min-h-screen bg-gray-300">
        <h1 className="py-20 text-4xl text-center">Gallery</h1>
      </section>
      <footer id="footer" className="min-h-screen bg-gray-400">
        <h1 className="py-20 text-4xl text-center">Footer</h1>
      </footer>
    </div>
  );
}

export default App;
