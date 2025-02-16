import React, { useState, useEffect, useRef } from "react";
import useDarkMode from "../hooks/useDarkMode";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isDarkMode, toggleDarkMode] = useDarkMode();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu
  const menuRef = useRef(null);
  const burgerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Check if the user has scrolled past a certain point
      if (scrollPosition >= 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Determine which section is currently in view
      const sections = [
        "home",
        "about",
        "experience",
        "services",
        "projects",
        "contact",
      ];

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        burgerRef.current &&
        !burgerRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false); // Close the menu
      }
    };

    // Add event listener when the menu is open
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    // Cleanup the event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  const activeLinkStyle = "text-primary border-b-2 border-primary font-bold";
  const mobileActiveLinkStyle = "bg-primary text-white";

  return (
    <header
      className={`bg-light-bg dark:bg-dark-bg ${
        scrolled ? "scrolled " : ""
      } shadow-md`}
    >
      <div className='mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between'>
        <a className='block text-teal-600' href='/'>
          <img src='./assets/Logo.png' alt='Logo' width={70} loading='lazy' />
        </a>

        {/* Mobile Menu (Absolute Positioning) */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{
                duration: 0.5,
                type: "spring",
                stiffness: 100,
                damping: 10,
              }}
              ref={menuRef}
              className={`${
                isMenuOpen ? "block" : "hidden"
              } absolute top-20 w-[90%] left-[5%] bg-light-bg dark:bg-dark-bg shadow-lg md:hidden z-50 border border-[white] dark:border-[#2B2B2B] rounded-xl`}
              id='navbar-default'
            >
              <ul className='font-medium flex flex-col p-4'>
                <li>
                  <a
                    href='#home'
                    className={`block py-2 px-3 ${
                      activeSection === "home"
                        ? mobileActiveLinkStyle
                        : "text-black dark:text-white"
                    } hover:bg-primary rounded-xl`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href='#about'
                    className={`block py-2 px-3 ${
                      activeSection === "about"
                        ? mobileActiveLinkStyle
                        : "text-black dark:text-white"
                    } hover:bg-primary rounded-xl`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href='#experience'
                    className={`block py-2 px-3 ${
                      activeSection === "experience"
                        ? mobileActiveLinkStyle
                        : "text-black dark:text-white"
                    } hover:bg-primary rounded-xl`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Experience
                  </a>
                </li>
                <li>
                  <a
                    href='#services'
                    className={`block py-2 px-3 ${
                      activeSection === "services"
                        ? mobileActiveLinkStyle
                        : "text-black dark:text-white"
                    } hover:bg-primary rounded-xl`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href='#projects'
                    className={`block py-2 px-3 ${
                      activeSection === "projects"
                        ? mobileActiveLinkStyle
                        : "text-black dark:text-white"
                    } hover:bg-primary rounded-xl`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href='#contact'
                    className={`block py-2 px-3 ${
                      activeSection === "contact"
                        ? mobileActiveLinkStyle
                        : "text-black dark:text-white"
                    } hover:bg-primary rounded-xl`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
        {/* Desktop Navigation Links */}
        <nav className='hidden w-full md:block md:w-auto'>
          <ul className='flex items-center justify-center gap-6 text-sm'>
            <li>
              <a
                href='#home'
                className={`block py-2 px-3 ${
                  activeSection === "home"
                    ? activeLinkStyle
                    : "text-black dark:text-white"
                } transition hover:text-primary dark:hover:text-primary`}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href='#about'
                className={`block py-2 px-3 ${
                  activeSection === "about"
                    ? activeLinkStyle
                    : "text-black dark:text-white"
                } transition hover:text-primary dark:hover:text-primary`}
              >
                About
              </a>
            </li>
            <li>
              <a
                href='#experience'
                className={`block py-2 px-3 ${
                  activeSection === "experience"
                    ? activeLinkStyle
                    : "text-black dark:text-white"
                } transition hover:text-primary dark:hover:text-primary`}
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href='#services'
                className={`block py-2 px-3 ${
                  activeSection === "services"
                    ? activeLinkStyle
                    : "text-black dark:text-white"
                } transition hover:text-primary dark:hover:text-primary`}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href='#projects'
                className={`block py-2 px-3 ${
                  activeSection === "projects"
                    ? activeLinkStyle
                    : "text-black dark:text-white"
                } transition hover:text-primary dark:hover:text-primary`}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href='#contact'
                className={`block py-2 px-3 ${
                  activeSection === "contact"
                    ? activeLinkStyle
                    : "text-black dark:text-white"
                } transition hover:text-primary dark:hover:text-primary`}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className='flex items-center gap-4'>
          <div className='flex flex-col justify-center'>
            <input
              type='checkbox'
              name='light-switch'
              id='light-switch'
              className='light-switch sr-only'
              onClick={toggleDarkMode}
              checked={isDarkMode}
              readOnly
            />
            <label className='relative cursor-pointer' htmlFor='light-switch'>
              <svg
                className='dark:hidden'
                width='24'
                height='24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  className='fill-slate-300'
                  d='M7 0h2v2H7zM12.88 1.637l1.414 1.415-1.415 1.413-1.413-1.414zM14 7h2v2h-2zM12.95 14.433l-1.414-1.413 1.413-1.415 1.415 1.414zM7 14h2v2H7zM2.98 14.364l-1.413-1.415 1.414-1.414 1.414 1.415zM0 7h2v2H0zM3.05 1.706 4.463 3.12 3.05 4.535 1.636 3.12z'
                />
                <path
                  className='fill-slate-400'
                  d='M8 4C5.8 4 4 5.8 4 8s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4Z'
                />
              </svg>
              <svg
                className='hidden dark:block'
                width='24'
                height='24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  className='fill-slate-400'
                  d='M6.2 1C3.2 1.8 1 4.6 1 7.9 1 11.8 4.2 15 8.1 15c3.3 0 6-2.2 6.9-5.2C9.7 11.2 4.8 6.3 6.2 1Z'
                />
                <path
                  className='fill-slate-500'
                  d='M12.5 5a.625.625 0 0 1-.625-.625 1.252 1.252 0 0 0-1.25-1.25.625.625 0 1 1 0-1.25 1.252 1.252 0 0 0 1.25-1.25.625.625 0 1 1 1.25 0c.001.69.56 1.249 1.25 1.25a.625.625 0 1 1 0 1.25c-.69.001-1.249.56-1.25 1.25A.625.625 0 0 1 12.5 5Z'
                />
              </svg>
              <span className='sr-only'></span>
            </label>
          </div>

          <button
            ref={burgerRef}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            type='button'
            className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-700 dark:text-white rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
            aria-controls='navbar-default'
            aria-expanded='false'
          >
            <span className='sr-only'>Open main menu</span>
            <svg
              className='w-5 h-5'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 17 14'
            >
              <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M1 1h15M1 7h15M1 13h15'
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
