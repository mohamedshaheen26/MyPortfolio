import React, { useState, useEffect } from "react";
import useDarkMode from "../hooks/useDarkMode";

const Header = () => {
  const [isDarkMode, toggleDarkMode] = useDarkMode();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

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
      const sections = ["home", "about", "services", "projects", "contact"];

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

  const activeLinkStyle = "text-primary border-b-2 border-primary font-bold";

  return (
    <header
      className={`bg-light-bg dark:bg-dark-bg ${
        scrolled ? "scrolled " : ""
      } shadow-md`}
    >
      <div className='mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between'>
          <div className='flex items-center justify-between w-full sm:w-auto'>
            <div className='md:flex md:items-center md:gap-12'>
              <a className='block text-teal-600' href='/'>
                <img
                  src='./assets/Logo.png'
                  alt='Logo'
                  width={70}
                  loading='lazy'
                />
              </a>
            </div>

            <div className='flex flex-col justify-center sm:hidden p-3'>
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
                  width='30'
                  height='30'
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
                  width='30'
                  height='30'
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
          </div>

          <div className='w-full sm:w-auto'>
            <nav aria-label='Global'>
              <ul className='flex items-center justify-center gap-6 text-sm'>
                <li>
                  <a
                    className={`${
                      activeSection === "home"
                        ? activeLinkStyle
                        : "text-black dark:text-white"
                    } transition hover:text-primary dark:hover:text-primary`}
                    href='/'
                  >
                    Home
                  </a>
                </li>

                <li>
                  <a
                    className={`${
                      activeSection === "about"
                        ? activeLinkStyle
                        : "text-black dark:text-white"
                    } transition hover:text-primary dark:hover:text-primary`}
                    href='#about'
                  >
                    About
                  </a>
                </li>

                <li>
                  <a
                    className={`${
                      activeSection === "services"
                        ? activeLinkStyle
                        : "text-black dark:text-white"
                    } transition hover:text-primary dark:hover:text-primary`}
                    href='#services'
                  >
                    Services
                  </a>
                </li>

                <li>
                  <a
                    className={`${
                      activeSection === "projects"
                        ? activeLinkStyle
                        : "text-black dark:text-white"
                    } transition hover:text-primary dark:hover:text-primary`}
                    href='#projects'
                  >
                    Projects
                  </a>
                </li>

                <li>
                  <a
                    className={`${
                      activeSection === "contact"
                        ? activeLinkStyle
                        : "text-black dark:text-white"
                    } transition hover:text-primary dark:hover:text-primary`}
                    href='#contact'
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className='hidden sm:flex flex-col justify-center p-3'>
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
                width='16'
                height='16'
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
                width='16'
                height='16'
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
        </div>
      </div>
    </header>
  );
};

export default Header;
