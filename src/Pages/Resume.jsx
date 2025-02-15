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
        <div class='relative mt-8 p-8'>
          <div class='absolute left-1/2 top-0 h-full w-[2px] bg-primary transform -translate-x-1/2'></div>

          {resumeData.experience &&
            resumeData.experience.map((item, index) => {
              return (
                <div class='mt-12 mb-12 flex items-center'>
                  <div class='absolute top-[50px] left-1/2 transform -translate-x-1/2 bg-primary text-white font-bold py-1 px-3 rounded-full -mt-8'>
                    {item.YearOfLeaving}
                  </div>
                  <div class='flex-1 pr-8 text-left mr-7'>
                    <div class='bg-white shadow-md p-6 rounded-lg relative bullet-before triangle-after'>
                      <h3 class='font-bold text-blue-500'>
                        {item.CompanyName}
                      </h3>
                      <span>{item.specialization}</span>
                      <p class='text-gray-700'>
                        <ul className='list-disc list-inside'>
                          {item.description.map((item) => {
                            return <li>{item}</li>;
                          })}
                        </ul>
                      </p>
                    </div>
                  </div>
                  <div class='flex-1'></div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default resume;
