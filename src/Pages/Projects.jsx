import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Projects = ({ resumeData }) => {
  const [isInView, setIsInView] = useState(false);
  const [showCard, setShowCard] = useState("all");

  const filteredProjects =
    showCard === "all"
      ? resumeData.projects
      : resumeData.projects.filter((project) => project.category === showCard);

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -20, scale: 0.9, transition: { duration: 0.3 } },
  };

  return (
    <section id='projects' className='overflow-hidden pt-20'>
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
              Projects
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
              Some of my Work
            </motion.span>
          </motion.div>
        </div>

        <div className='w-full max-w-2xl lg:max-w-7xl px-6 pt-6 lg:px-8 mx-auto overflow-hidden'>
          <div className='w-full px-4'>
            <ul className='flex flex-wrap justify-center gap-5 md:gap-10 lg:gap-14 mb-2 lg:mb-12 space-x-1'>
              {["all", "htmlcss", "javascript", "react"].map((category) => (
                <motion.li
                  key={category}
                  initial={{ scale: 0 }}
                  onViewportLeave={() => setIsInView(false)}
                  onViewportEnter={() => setIsInView(true)}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className='mb-1'
                >
                  <button
                    onClick={() => setShowCard(category)}
                    className={`inline-block rounded-full border border-[#484E53] py-2 px-5 text-center text-base transition md:py-3 lg:px-8 ${
                      showCard === category
                        ? "activeClasses bg-[#484E53] text-white"
                        : "inactiveClasses text-body-color hover:bg-[#484E53] dark:text-[#A9A9A9] dark:hover:bg-[#484E53] hover:text-white"
                    }`}
                  >
                    {category.toUpperCase()}
                  </button>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
        <div className='w-full max-w-2xl lg:max-w-7xl px-6 pt-6 lg:px-8 mx-auto overflow-hidden'>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xxl:grid-cols-4 gap-8'>
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <motion.div
                  variants={itemVariants}
                  initial='hidden'
                  whileInView='visible'
                  exit='exit'
                  layout
                  viewport={{ once: false }}
                  key={project.id}
                  className='flex items-center flex-col gap-8 w-full group'
                >
                  <div className='block'>
                    <motion.img
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 0.97 }}
                      transition={{ duration: 0.3 }}
                      className='rounded-3xl object-cover'
                      src={project.imgurl}
                      alt='Project Achievements of Sketch'
                    />
                  </div>
                  <div className='flex items-center justify-between text-[#484E53] max-w-[406px] lg:max-w-full w-full lg:px-0'>
                    <div className='block'>
                      <h4 className='text-2xl font-manrope font-semibold dark:text-[#C1C1C1] mb-1'>
                        {project.name}
                      </h4>
                    </div>
                    <button className=' bg-[#4FC3F7] py-2 px-3.5 rounded-full transition-all duration-300 hover:bg-[#73d4ff]'>
                      <a
                        className='text-white focus:outline-none'
                        href={project.link}
                        target='_blank'
                      >
                        <i className='fa-solid fa-arrow-up-right-from-square'></i>
                      </a>
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
