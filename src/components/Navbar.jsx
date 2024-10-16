import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "react-feather";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [scrollTimeout, setScrollTimeout] = useState(null);

  useEffect(() => {
    // Function to check if the screen width is mobile
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768); // Tailwind's md breakpoint is 768px
    };

    // Add event listener to check screen size on resize
    window.addEventListener("resize", checkIsMobile);

    // Initial check
    checkIsMobile();

    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "details", "gallery", "footer"];
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      for (let section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Home", id: "hero" },
    { label: "Wedding Details", id: "details" },
    { label: "Gallery", id: "gallery" },
    { label: "Footer", id: "footer" },
  ];

  // Menu variants for mobile animation
  const menuVariants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: "-100%" },
  };

  const handleScrollToSection = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });

      // Clear any existing timeout to avoid conflicts
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }

      // Set a timeout to update the active section after the scroll
      const timeoutId = setTimeout(() => {
        setActiveSection(sectionId); // Update the active section after scroll
      }, 300); // Adjust the delay if needed

      setScrollTimeout(timeoutId); // Store the timeout ID
    }
    setMenuOpen(false); // Close the menu after clicking
  };

  return (
    <nav className="fixed w-full bg-[#FCECDD] shadow-md z-10">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-[#FF6701]">
          Wedding Invitation
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-[#FEA82F] focus:outline-none"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Navigation Menu */}
        {isMobile ? (
          <motion.ul
            initial={false}
            animate={menuOpen ? "open" : "closed"}
            variants={menuVariants}
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
                    e.preventDefault(); // Prevent default anchor jump behavior
                    handleScrollToSection(item.id);
                  }}
                  className={`block px-4 py-2 text-lg ${
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
                    style={{ maxWidth: "100%", width: "auto" }}
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
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
                    e.preventDefault(); // Prevent default anchor jump behavior
                    handleScrollToSection(item.id);
                  }}
                  className={`block px-4 py-2 text-lg ${
                    activeSection === item.id
                      ? "text-[#FF6701]"
                      : "text-[#FEA82F]"
                  }`}
                >
                  {item.label}
                </a>
                {activeSection === item.id && (
                  <div className="absolute left-0 right-0 mx-auto h-1 bg-[#FFC288] rounded top-full" />
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
