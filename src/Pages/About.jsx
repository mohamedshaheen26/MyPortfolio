import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Slider from "react-slick";

const About = ({ resumeData }) => {
  const scrollableParentRef = useRef(null);
  const isInView = useInView(scrollableParentRef, { amount: 0, once: false });

  const settings = {
    dots: false,
    arrows: false,
    autoplay: true,
    slidesToShow: 7,
    autoplaySpeed: 0,
    pauseOnHover: true,
    speed: 5000,
    cssEase: "linear",
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <>
      <section
        id='about'
        className='overflow-hidden pt-24 md:pt-20'
        ref={scrollableParentRef}
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
                About Me
              </motion.h2>
              <motion.span
                initial={{ x: -200 }}
                animate={isInView ? { x: 0 } : { x: -200 }}
                transition={{ duration: 0.8 }}
                className='role text-sm bg-gradient-to-r from-primary to-secondary dark:from-primary dark:to-secondary text-transparent bg-clip-text mt-2'
              >
                Get to know me
              </motion.span>
            </motion.div>

            <motion.p
              initial={{ x: -50, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
              transition={{ duration: 0.8 }}
              className='text-md max-w-3xl mt-5 text-light-text dark:text-white'
            >
              {resumeData.aboutme}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: "-100%" }}
              animate={
                isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: "-100%" }
              }
              transition={{ duration: 0.8, delay: 0.8 }}
              className='flex flex-col justify-center'
            >
              <a
                href='/cv/MohamedShaheenResume.pdf'
                download
                className='bg-transparent border-2 border-gray-600 dark:border-primary dark:text-white hover:bg-primary hover:border-primary hover:text-white transition-all mt-10 py-3 px-8 rounded-3xl'
              >
                Download CV
              </a>
            </motion.div>

            <div className='max-w-4xl py-6 mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 overflow-hidden'>
              <motion.div
                initial={{ x: -500, opacity: 0 }}
                animate={
                  isInView ? { x: 0, opacity: 1 } : { x: -500, opacity: 0 }
                }
                transition={{ duration: 0.3 }}
                whileHover={{ scale: 1.05 }}
                className='service border border-[white] dark:border-[#2B2B2B] rounded-lg p-8 
                bg-[linear-gradient(136deg,#f5f8ff00,#BCE7FA)] 
                dark:bg-[linear-gradient(136deg,rgb(28,28,28),#050505)] 
                dark:mix-blend-plus-lighter flex flex-col items-start 
                transition-all duration-300 text-left'
              >
                <div className='space-y-2'>
                  {resumeData.additionalInfo.map((info) => (
                    <p
                      key={info.title}
                      className='text-gray-700 dark:text-white flex items-center'
                    >
                      <i
                        className={`${info.icon} me-2 text-[#00b0ff] text-2xl`}
                      ></i>
                      {info.title}
                    </p>
                  ))}
                </div>
              </motion.div>
              <motion.div
                initial={{ x: 500, opacity: 0 }}
                animate={
                  isInView ? { x: 0, opacity: 1 } : { x: 500, opacity: 0 }
                }
                transition={{ duration: 0.3 }}
                whileHover={{ scale: 1.05 }}
                className='service border border-[white] dark:border-[#2B2B2B] rounded-lg p-8 
                bg-[linear-gradient(136deg,#f5f8ff00,#BCE7FA)] 
                dark:bg-[linear-gradient(136deg,rgb(28,28,28),#050505)] 
                dark:mix-blend-plus-lighter flex flex-col items-start 
                transition-all duration-300 text-left'
              >
                <div className='space-y-2'>
                  <p className='text-gray-700 dark:text-white'>
                    <span className='font-semibold'>University:</span>{" "}
                    {resumeData.education.UniversityName}
                  </p>
                  <p className='text-gray-700 dark:text-white'>
                    <span className='font-semibold'>Specialization:</span>{" "}
                    {resumeData.education.specialization}
                  </p>
                  <p className='text-gray-700 dark:text-white'>
                    <span className='font-semibold'>Graduation:</span>{" "}
                    {resumeData.education.graduation}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
        transition={{ duration: 0.8 }}
        className='skills w-full'
      >
        <Slider {...settings}>
          {resumeData.skills &&
            resumeData.skills.map((skill, index) => (
              <motion.div
                whileHover={{ scale: 1.1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                key={index}
                className='skill text-center p-4 opacity-75 rounded-lg'
              >
                <img src={skill.img} width={30} alt={skill.name} />
                <p className='text-sm text-light-text dark:text-white'>
                  {skill.name}
                </p>
              </motion.div>
            ))}
        </Slider>
      </motion.div>
    </>
  );
};

export default About;
