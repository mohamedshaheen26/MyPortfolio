import { useState } from "react";
import React from "react";
import useDarkMode from "../hooks/useDarkMode";
import { motion } from "framer-motion";

const Home = ({ resumeData }) => {
  const [isDarkMode, toggleDarkMode] = useDarkMode();
  console.log(localStorage.getItem("theme"));
  const [scrollY, setScrollY] = useState(0);
  const handleScroll = () => {
    setScrollY(window.scrollY);
  };
  return (
    <section className='home h-screen'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div
          className={`content  h-screen flex flex-col justify-center items-center transition-all ease-in-out duration-500`}
        >
          <motion.img
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8 }}
            src={resumeData.imagebaseurl}
            alt='Profile'
            className='w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full'
          />
          <motion.h1
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8 }}
            className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-light-text mt-5 text-center dark:text-white'
          >
            {resumeData.name}
          </motion.h1>
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8 }}
            className='role text-xl sm:text-2xl font-semibold bg-gradient-to-r from-primary to-slate-600 dark:from-primary dark:to-white text-transparent bg-clip-text mt-2'
          >
            {resumeData.role}
          </motion.span>
          <motion.p
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8 }}
            className='mt-4 text-base sm:text-lg md:text-xl text-center max-w-3xl dark:text-dark-text'
          >
            {resumeData.roleDescription}
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Home;
