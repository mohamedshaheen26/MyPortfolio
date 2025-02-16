import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const resume = ({ resumeData }) => {
  const scrollableParentRef = useRef(null);
  const isInView = useInView(scrollableParentRef, { amount: 0, once: false });

  return (
    <section
      ref={scrollableParentRef}
      id='experience'
      className='overflow-hidden pt-20'
    >
      <div className='container mx-auto px-4 sm:px-6 lg:px-8 text-center'>
        <div className='content flex flex-col justify-center items-center transition-all ease-in-out duration-500'>
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8 }}
            className='special-title'
          >
            <motion.h2
              initial={{ x: 200 }}
              animate={isInView ? { x: 0 } : { x: 200 }}
              transition={{ duration: 0.8 }}
              className='text-4xl font-bold text-light-text mt-5 mb-1 text-center dark:text-white'
            >
              Experience
            </motion.h2>
            <motion.span
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className='role text-sm bg-gradient-to-r from-primary to-secondary dark:from-primary dark:to-secondary text-transparent bg-clip-text mt-2'
            >
              My Work Experience
            </motion.span>
          </motion.div>
        </div>
        <div className='relative mt-8 p-8'>
          {/* Vertical Line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 2 }}
            className='absolute md:left-1/2 top-0 h-full w-[2px] bg-primary transform -translate-x-1/2'
          ></motion.div>

          {resumeData.experience &&
            resumeData.experience.map((item, index) => {
              return (
                <div
                  key={index}
                  className='mt-12 mb-12 flex flex-col md:flex-row items-center'
                >
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 2 }}
                    className='absolute top-[50px] left-[2rem] md:left-1/2 transform -translate-x-1/2 bg-primary text-white font-bold py-1 px-3 rounded-full -mt-8'
                  >
                    {item.YearOfLeaving}
                  </motion.div>

                  <div className='flex-1 md:pr-8 pl-8 md:pl-0 text-left md:mr-7 ml-7 md:ml-0 w-full md:w-auto'>
                    <motion.div
                      initial={{ x: -300, opacity: 0 }}
                      animate={
                        isInView
                          ? { x: 0, opacity: 1 }
                          : { x: -300, opacity: 0 }
                      }
                      transition={{ duration: 0.5 }}
                      className='border border-[white] dark:border-[#2B2B2B] rounded-lg p-8 
                      bg-[linear-gradient(136deg,#f5f8ff00,#BCE7FA)] 
                      dark:bg-[linear-gradient(136deg,rgb(28,28,28),#050505)] 
                      dark:mix-blend-plus-lighter relative bullet-before triangle-after'
                    >
                      <h3 className='text-md font-bold text-[#484E53] dark:text-white'>
                        {item.CompanyName}
                      </h3>
                      <span className='text-primary'>
                        {item.specialization}
                      </span>
                      <p className='text-left text-sm text-[#1C1E53] dark:text-[#E1E1E1] mt-2'>
                        {item.description}
                      </p>
                    </motion.div>
                  </div>
                  <div className='flex-1 hidden md:block'></div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default resume;
