import React, { useState } from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";

const About = ({ resumeData }) => {
  const [isInView, setIsInView] = useState(false);

  // Slider settings
  const settings = {
    dots: false, // Hide dots
    arrows: false, // Hide arrows
    slidesToShow: 8, // Number of slides to show at once
    autoplay: true, // Enable autoplay
    autoplaySpeed: 0, // Autoplay speed in milliseconds
    pauseOnHover: true, // Pause autoplay on hover
    speed: 5000, // Transition speed
    cssEase: "linear",
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024, // For screens smaller than 1024px
        settings: {
          slidesToShow: 7, // Show 2 slides
        },
      },
      {
        breakpoint: 768, // For screens smaller than 768px
        settings: {
          slidesToShow: 4, // Show 1 slide
        },
      },
    ],
  };

  return (
    <>
      <section id='about' className='overflow-hidden pt-20'>
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
                About Me
              </motion.h2>
              <motion.span
                initial={{ x: -200 }}
                animate={isInView ? { x: 0 } : { x: -200 }}
                transition={{ duration: 0.8 }}
                onViewportEnter={() => setIsInView(true)}
                onViewportLeave={() => setIsInView(false)}
                viewport={{ amount: 0.5, once: false }}
                className='role text-sm bg-gradient-to-r from-primary to-secondary dark:from-primary dark:to-secondary text-transparent bg-clip-text mt-2'
              >
                Get to know me
              </motion.span>
            </motion.div>

            <motion.p
              initial={{ y: 50, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
              transition={{ duration: 0.8 }}
              onViewportEnter={() => setIsInView(true)}
              onViewportLeave={() => setIsInView(false)}
              viewport={{ amount: 0.5, once: false }}
              className='lead text-md max-w-3xl mt-5 text-light-text dark:text-white'
            >
              {resumeData.aboutme}
            </motion.p>
          </div>
        </div>
      </section>
      {/* Slider Section */}
      <div className='skills w-full mt-10'>
        <Slider {...settings}>
          {resumeData.skills &&
            resumeData.skills.map((skill, index) => (
              <div key={index} className='text-center p-4 rounded-lg'>
                <img src={skill.img} width={60} alt={skill.name} />
              </div>
            ))}
        </Slider>
      </div>
    </>
  );
};

export default About;
