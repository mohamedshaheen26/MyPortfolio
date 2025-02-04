import React, { useState } from "react";
import { motion } from "framer-motion";

const Services = ({ resumeData }) => {
  const [isInView, setIsInView] = useState(false);

  return (
    <section id='services' className='pt-20'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8 text-center'>
        <div className='content flex flex-col justify-center items-center transition-all ease-in-out duration-500'>
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8 }}
            onViewportEnter={() => setIsInView(true)}
            onViewportLeave={() => setIsInView(false)}
            viewport={{ amount: 0.5, once: false }}
            className='special-title'
          >
            <motion.h2
              initial={{ x: 200 }}
              animate={isInView ? { x: 0 } : { x: 200 }}
              transition={{ duration: 0.8 }}
              onViewportEnter={() => setIsInView(true)}
              onViewportLeave={() => setIsInView(false)}
              viewport={{ amount: 0.5, once: false }}
              className='text-2xl font-bold text-light-text mt-5 text-center dark:text-white'
            >
              What I do
            </motion.h2>
            <motion.span
              initial={{ x: -200 }}
              animate={isInView ? { x: 0 } : { x: -200 }}
              transition={{ duration: 0.8 }}
              onViewportEnter={() => setIsInView(true)}
              onViewportLeave={() => setIsInView(false)}
              viewport={{ amount: 0.5, once: false }}
              className='role text-sm bg-gradient-to-r from-primary to-slate-600 dark:from-primary dark:to-white text-transparent bg-clip-text mt-2'
            >
              My Services
            </motion.span>
          </motion.div>

          <div className='services grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8'>
            {resumeData.services &&
              resumeData.services.map((item) => {
                console.log(item);

                return (
                  <div
                    key={item.id}
                    className='service border border-[#2B2B2B] dark:border-[#2B2B2B] rounded-lg p-8 bg-[linear-gradient(136deg,rgb(28,28,28),#050505)] mix-blend-plus-lighter flex flex-col items-start'
                  >
                    <div className='bg-[#BCE7FA] dark:bg-[#F5F8FF] text-[#1A1A1A] w-12 h-12 rounded-xl flex justify-center items-center mb-4'>
                      <i className={item.icon}></i>
                    </div>
                    <h3 className='text-md font-bold text-[#484E53] mt-2 dark:text-white mb-4'>
                      {item.title}
                    </h3>
                    <p className='text-left text-sm text-[#1C1E53] dark:text-[#E1E1E1] mt-2'>
                      {item.description}
                    </p>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
