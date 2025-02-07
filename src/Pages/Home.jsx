import React, { useState } from "react";
import { motion } from "framer-motion";

const Home = ({ resumeData }) => {
  const [isInView, setIsInView] = useState(false);
  return (
    <section className='home flex items-center overflow-hidden' id='home'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div
          className={`content flex flex-col justify-center items-center transition-all ease-in-out duration-500`}
        >
          <motion.img
            initial={{ scale: 0 }}
            onViewportLeave={() => setIsInView(false)}
            onViewportEnter={() => setIsInView(true)}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ amount: 0.5, once: false }}
            src={resumeData.imagebaseurl}
            alt='Profile'
            className='w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full'
          />
          <motion.h1
            initial={{ scale: 0 }}
            onViewportLeave={() => setIsInView(false)}
            onViewportEnter={() => setIsInView(true)}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ amount: 0.5, once: false }}
            className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-light-text mt-5 text-center dark:text-white'
          >
            {resumeData.name}
          </motion.h1>
          <motion.span
            initial={{ scale: 0 }}
            onViewportLeave={() => setIsInView(false)}
            onViewportEnter={() => setIsInView(true)}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ amount: 0.5, once: false }}
            className='role text-xl sm:text-2xl font-semibold bg-gradient-to-r from-primary to-secondary dark:from-primary dark:to-secondary text-transparent bg-clip-text mt-2'
          >
            {resumeData.role}
          </motion.span>
          <motion.p
            initial={{ scale: 0 }}
            onViewportLeave={() => setIsInView(false)}
            onViewportEnter={() => setIsInView(true)}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ amount: 0.5, once: false }}
            className='mt-4 text-base sm:text-lg md:text-xl text-center max-w-3xl dark:text-dark-text'
          >
            {resumeData.roleDescription}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            onViewportLeave={() => setIsInView(false)}
            onViewportEnter={() => setIsInView(true)}
            animate={
              isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: "-100%" }
            }
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ amount: 0.5, once: false }}
            className='flex flex-col justify-center'
          >
            <button className='bg-transparent border-2 border-gray-600 dark:border-primary dark:text-white hover:bg-primary hover:border-primary hover:text-white transition-all mt-10 py-3 px-8 rounded-3xl'>
              Contact Me
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;
