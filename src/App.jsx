import React from "react";
import Navbar from "./components/Navbar";
import "./index.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* Sections for hero, details, gallery, and footer */}
      <section id="hero" className="min-h-screen bg-gray-100">
        <h1 className="text-4xl text-center py-20">Hero Section</h1>
      </section>
      <section id="details" className="min-h-screen bg-gray-200">
        <h1 className="text-4xl text-center py-20">Wedding Details</h1>
      </section>
      <section id="gallery" className="min-h-screen bg-gray-300">
        <h1 className="text-4xl text-center py-20">Gallery</h1>
      </section>
      <footer id="footer" className="min-h-screen bg-gray-400">
        <h1 className="text-4xl text-center py-20">Footer</h1>
      </footer>
    </div>
  );
}

export default App;
