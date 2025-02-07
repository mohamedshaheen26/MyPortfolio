import React, { useState } from "react";
import { delay, motion } from "framer-motion";

const Services = ({ resumeData }) => {
  const [isInView, setIsInView] = useState(false);

  const itemVariants = {
    hidden: (index) => {
      if (index === 0) return { opacity: 0, x: -200 };
      if (index === 1) return { scale: 0 };
      if (index === 2) return { opacity: 0, x: 200 };
    },
    visible: (index) => ({
      opacity: 1,
      scale: 1,
      x: 0,
      transition: { duration: 0.3, delay: index == 1 ? 0.5 : 0 },
    }),
    hover: { scale: 0.99 },
  };

  return (
    <section id='services' className='pt-20 overflow-hidden'>
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
              className='text-4xl font-bold text-light-text mt-5 mb-1 text-center dark:text-white'
            >
              What I do
            </motion.h2>
            <motion.span
              initial={{ scale: 0 }}
              onViewportLeave={() => setIsInView(false)}
              onViewportEnter={() => setIsInView(true)}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ amount: 0.5, once: false }}
              className='role text-sm bg-gradient-to-r from-primary to-secondary dark:from-primary dark:to-secondary text-transparent bg-clip-text mt-2'
            >
              My Services
            </motion.span>
          </motion.div>
          <div className='w-full max-w-2xl lg:max-w-7xl px-6 pt-6 lg:px-8 mx-auto overflow-hidden'>
            <div className='services grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8 overflow-hidden'>
              {resumeData.services &&
                resumeData.services.map((item, index) => {
                  return (
                    <motion.div
                      key={item.id}
                      variants={itemVariants}
                      initial='hidden'
                      whileInView='visible'
                      whileHover='hover'
                      viewport={{ once: false, amount: 0.3 }}
                      custom={index}
                      className='service border border-[white] dark:border-[#2B2B2B] rounded-lg p-8 
                      bg-[linear-gradient(136deg,#f5f8ff00,#BCE7FA)] 
                      dark:bg-[linear-gradient(136deg,rgb(28,28,28),#050505)] 
                      dark:mix-blend-plus-lighter flex flex-col items-start 
                      transition-all duration-300'
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
                    </motion.div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
