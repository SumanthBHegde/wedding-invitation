import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "react-feather";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", checkIsMobile);
    checkIsMobile();
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "details", "gallery", "map", "footer"];
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      // Find the nearest section to scroll position
      let nearestSection = "";
      for (let section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition) {
          nearestSection = section;
        }
      }
      setActiveSection(nearestSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Home", id: "hero" },
    { label: "Wedding Details", id: "details" },
    { label: "Gallery", id: "gallery" },
    { label: "Direction", id: "map" },
  ];

  const handleScrollToSection = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
    setMenuOpen(false);
  };

  return (
    <nav className="fixed w-full bg-[#FCECDD] shadow-md z-10 transition-all duration-300">
      <div className="container flex items-center justify-between p-2 mx-auto">
        <div className="text-xl font-bold text-[#FF6701]">
          Wedding Invitation
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-[#FEA82F] focus:outline-none"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobile ? (
          <motion.ul
            initial={false}
            animate={
              menuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: "-100%" }
            }
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className={`${
              menuOpen ? "block" : "hidden"
            } absolute top-16 left-0 w-full bg-[#FCECDD] p-4 space-y-4 md:flex md:space-y-0 md:space-x-6 md:static md:w-auto md:bg-transparent md:p-0`}
          >
            {menuItems.map((item) => (
              <li key={item.id} className="relative">
                <a
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleScrollToSection(item.id);
                  }}
                  className={`block px-2 py-1 text-base transition-all duration-300 ${
                    activeSection === item.id
                      ? "text-[#FF6701]"
                      : "text-[#FEA82F]"
                  }`}
                >
                  {item.label}
                </a>
                {activeSection === item.id && (
                  <motion.div
                    layoutId="underline"
                    className="absolute left-0 right-0 mx-auto h-1 bg-[#FFC288] rounded top-full"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  />
                )}
              </li>
            ))}
          </motion.ul>
        ) : (
          <ul className="md:flex md:space-x-6">
            {menuItems.map((item) => (
              <li key={item.id} className="relative">
                <a
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleScrollToSection(item.id);
                  }}
                  className={`block px-2 py-1 text-base transition-all duration-300 ${
                    activeSection === item.id
                      ? "text-[#FF6701]"
                      : "text-[#FEA82F]"
                  }`}
                >
                  {item.label}
                </a>
                {activeSection === item.id && (
                  <motion.div
                    layoutId="underline"
                    className="absolute left-0 right-0 mx-auto h-1 bg-[#FFC288] rounded top-full"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  />
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
