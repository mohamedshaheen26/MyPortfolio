import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const Footer = ({ resumeData }) => {
  return (
    <footer className='overflow-hidden pt-20'>
      <div className='mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center mb-10'>
        <h3 className='text-left text-2xl md:text-3xl lg:text-6xl font-medium text-[#282938] dark:text-[#DEDEDE]'>
          Let’s
          <br />
          Work Together -
        </h3>
        <motion.a
          whileHover={{ scale: 1.05 }}
          href={`mailto:${resumeData.email}`}
          className='px-8 py-4 mt-4 border flex justify-center items-center gap-4 border-[#484E53] text-[#484E53] dark:text-[#C9C9C9] rounded-xl text-sm lg:text-lg focus:outline-none'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width={24}
            height={24}
            viewBox='0 0 256 256'
          >
            <g fill='none'>
              <rect width={256} height={256} fill='#f4f2ed' rx={60}></rect>
              <path
                fill='#4285f4'
                d='M41.636 203.039h31.818v-77.273L28 91.676v97.727c0 7.545 6.114 13.636 13.636 13.636'
              ></path>
              <path
                fill='#34a853'
                d='M182.545 203.039h31.819c7.545 0 13.636-6.114 13.636-13.636V91.675l-45.455 34.091'
              ></path>
              <path
                fill='#fbbc04'
                d='M182.545 66.675v59.091L228 91.676V73.492c0-16.863-19.25-26.477-32.727-16.363'
              ></path>
              <path
                fill='#ea4335'
                d='M73.455 125.766v-59.09L128 107.583l54.545-40.909v59.091L128 166.675'
              ></path>
              <path
                fill='#c5221f'
                d='M28 73.493v18.182l45.454 34.091v-59.09L60.727 57.13C47.227 47.016 28 56.63 28 73.493'
              ></path>
            </g>
          </svg>
          <span className='text-wrap'>{resumeData.email}</span>
        </motion.a>
      </div>
      <div className='mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row justify-between items-center py-5 border-t-[1px] border-[#484E53] dark:border-[#3D3D3D]'>
        <p className='text-center text-sm lg:text-lg text-[#282938] dark:text-[#A9A9A9]'>
          © 2021{" "}
          <span className='role text-sm bg-gradient-to-r from-primary to-secondary dark:from-primary dark:to-secondary text-transparent bg-clip-text mt-2'>
            {resumeData.name}
          </span>
          . All rights reserved.
        </p>
        <div className='flex gap-4 mb-5 md:mb-0'>
          {resumeData.socialLinks &&
            resumeData.socialLinks.map((item) => {
              return (
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  key={item.name}
                  href={item.url}
                  target='_blank'
                  title={item.name}
                  className='text-[#484E53] dark:text-[#A9A9A9] hover:text-[#282938] dark:hover:text-[#DEDEDE] w-10 h-10 flex justify-center items-center border-[2px] border-[#484E53] rounded-full focus:outline-none'
                >
                  <span className='sr-only'>{item.name}</span>
                  <i className={item.className}></i>
                </motion.a>
              );
            })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
