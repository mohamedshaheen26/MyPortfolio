import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

const Home = ({ resumeData }) => {
  const scrollableParentRef = useRef(null);
  const isInView = useInView(scrollableParentRef, { amount: 0, once: false });

  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0); // Track current role

  useEffect(() => {
    const roles = resumeData.roles;
    const role = roles[currentRoleIndex];

    if (isTyping) {
      // Typing phase: add one character at a time
      if (currentIndex < role.length) {
        const timeout = setTimeout(() => {
          setDisplayText((prev) => prev + role[currentIndex]);
          setCurrentIndex((prev) => prev + 1);
        }, 100); // Adjust typing speed (100ms per character)

        return () => clearTimeout(timeout);
      } else {
        // Switch to backspacing phase after a short delay
        const switchTimeout = setTimeout(() => {
          setIsTyping(false);
        }, 1000); // Delay before starting backspacing (1 second)

        return () => clearTimeout(switchTimeout);
      }
    } else {
      // Backspacing phase: remove one character at a time
      if (currentIndex > 0) {
        const timeout = setTimeout(() => {
          setDisplayText((prev) => prev.slice(0, -1));
          setCurrentIndex((prev) => prev - 1);
        }, 100); // Adjust backspacing speed (50ms per character)

        return () => clearTimeout(timeout);
      } else {
        // Switch to the next role after a short delay
        const switchTimeout = setTimeout(() => {
          setIsTyping(true);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length); // Move to the next role
        }, 0); // Delay before starting the next role (1 second)

        return () => clearTimeout(switchTimeout);
      }
    }
  }, [currentIndex, isTyping, currentRoleIndex]);

  return (
    <section
      ref={scrollableParentRef}
      className='home flex items-center overflow-hidden'
      id='home'
    >
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div
          className={`content flex flex-col justify-center items-center transition-all ease-in-out duration-500`}
        >
          <motion.img
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.8 }}
            src={resumeData.imagebaseurl}
            alt='Profile'
            className='w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full object-cover'
            loading='lazy'
          />
          <motion.h1
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-light-text mt-5 text-center dark:text-white'
          >
            {resumeData.name}
          </motion.h1>
          <motion.span
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className='role text-xl sm:text-2xl font-semibold bg-gradient-to-r from-primary to-secondary dark:from-primary dark:to-secondary text-transparent bg-clip-text mt-2'
          >
            {displayText}
            <span className='cursor'>|</span>
          </motion.span>
          <motion.p
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className='mt-4 text-base sm:text-lg md:text-xl text-center max-w-3xl dark:text-dark-text'
          >
            {resumeData.roleDescription}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={
              isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: "-100%" }
            }
            transition={{ duration: 0.8, delay: 0.8 }}
            className='flex flex-col justify-center'
          >
            <button
              className='bg-transparent border-2 border-gray-600 dark:border-primary dark:text-white hover:bg-primary hover:border-primary hover:text-white transition-all mt-10 py-3 px-8 rounded-3xl'
              onClick={() =>
                window.open(
                  "https://wa.me/+201144201011?text=Hello%20I%20am%20interested%20in%20your%20services",
                  "_blank"
                )
              }
            >
              Contact Me
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;
