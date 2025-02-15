import React, { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = ({ resumeData }) => {
  const scrollableParentRef = useRef(null);
  const isInView = useInView(scrollableParentRef, { amount: 0, once: false });

  const [state, handleSubmit] = useForm("myzkpdgq");

  useEffect(() => {
    if (state.succeeded) {
      toast.success("Message sent successfully!", {
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });

      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
    }
  }, [state.succeeded]);
  return (
    <section
      ref={scrollableParentRef}
      id='contact'
      className='overflow-hidden pt-24 md:pt-20 mb-32'
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
              Get In Touch
            </motion.h2>
            <motion.span
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className='role text-sm bg-gradient-to-r from-primary to-secondary dark:from-primary dark:to-secondary text-transparent bg-clip-text mt-2'
            >
              Lets work together
            </motion.span>
          </motion.div>
        </div>

        <div className='w-full max-w-2xl lg:max-w-7xl px-6 pt-6 lg:px-8 mx-auto overflow-hidden'>
          <div className=''>
            <div className='flex flex-col items-center justify-center space-y-6'>
              <div className='w-full'>
                <div className='max-w-lg mx-auto'>
                  <form onSubmit={handleSubmit} className='mt-6'>
                    <motion.div
                      initial={{ y: 100, opacity: 0 }}
                      animate={
                        isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }
                      }
                      transition={{ duration: 0.8 }}
                      className='flex flex-col space-y-2'
                    >
                      <label
                        htmlFor='name'
                        className='text-left font-semibold text-[#282938] dark:text-white'
                      >
                        Name
                      </label>
                      <input
                        type='text'
                        name='name'
                        id='name'
                        placeholder='full name'
                        required
                        className='px-6 py-4 rounded-xl bg-transparent border border-[#484E53] focus:outline-none dark:border-[#D6DDED] text-[#8987A1] dark:text-[#8987A1]'
                      />
                      <ValidationError
                        prefix='Name'
                        field='Name'
                        errors={state.errors}
                      />
                    </motion.div>
                    <motion.div
                      initial={{ y: 100, opacity: 0 }}
                      animate={
                        isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }
                      }
                      transition={{ duration: 0.8, delay: 0.2 }}
                      className='flex flex-col space-y-2 mt-4'
                    >
                      <label
                        htmlFor='email'
                        className='text-left font-semibold text-[#282938] dark:text-white'
                      >
                        Email
                      </label>
                      <input
                        type='email'
                        name='email'
                        id='email'
                        placeholder='example@email.com'
                        required
                        className='px-6 py-4 rounded-xl bg-transparent border border-[#484E53] focus:outline-none dark:border-[#D6DDED] text-[#8987A1] dark:text-[#8987A1]'
                      />
                      <ValidationError
                        prefix='Email'
                        field='email'
                        errors={state.errors}
                      />
                    </motion.div>
                    <motion.div
                      initial={{ y: 100, opacity: 0 }}
                      animate={
                        isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }
                      }
                      transition={{ duration: 0.8, delay: 0.4 }}
                      className='flex flex-col space-y-2 mt-4'
                    >
                      <label
                        htmlFor='message'
                        className='text-left font-semibold text-[#282938] dark:text-white'
                      >
                        Message
                      </label>
                      <textarea
                        type='text'
                        name='message'
                        id='message'
                        rows={5}
                        required
                        className='px-6 py-4 rounded-xl bg-transparent border border-[#484E53] focus:outline-none dark:border-[#D6DDED] text-[#8987A1] dark:text-[#8987A1]'
                      />
                      <ValidationError
                        prefix='Message'
                        field='message'
                        errors={state.errors}
                      />
                    </motion.div>
                    <motion.button
                      initial={{ y: 100, opacity: 0 }}
                      animate={
                        isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }
                      }
                      transition={{ duration: 0.8, delay: 0.6 }}
                      type='submit'
                      disabled={state.submitting}
                      className='w-full px-6 py-4 mt-4 bg-[#484E53] rounded-xl text-[#ffffff] dark:bg-[#ffffff] dark:text-[#000000] font-semibold transition-all duration-300 hover:bg-[#61686d] dark:hover:bg-[#e2e2e2]'
                    >
                      {state.submitting ? "Sending..." : "Get in Touch"}
                    </motion.button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer
        position='top-left'
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        style={{ top: "90px" }}
      />
    </section>
  );
};

export default Contact;
