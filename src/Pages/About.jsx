import React, { useState } from "react";
import useDarkMode from "../hooks/useDarkMode";
import { motion } from "framer-motion";

const About = ({ resumeData }) => {
  return (
    <section id='about' className='pt-20'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8 text-center'>
        <div
          className={`content flex flex-col justify-center items-center transition-all ease-in-out duration-500`}
        >
          <div className='special-title'>
            <motion.h2
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8 }}
              className='text-2xl font-bold text-light-text mt-5 text-center dark:text-white'
            >
              About Me
            </motion.h2>
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8 }}
              className='role text-sm bg-gradient-to-r from-primary to-slate-600 dark:from-primary dark:to-white text-transparent bg-clip-text mt-2'
            >
              Get to know me
            </motion.span>
          </div>

          <motion.p
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8 }}
            className='lead text-md max-w-3xl mt-5 text-light-text dark:text-white'
          >
            {resumeData.aboutme}
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default About;
