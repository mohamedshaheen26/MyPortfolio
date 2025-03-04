import React, { useState, useEffect } from "react";

import resumeData from "../resumeData";
import Header from "./Pages/Header";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Resume from "./Pages/Resume";
import Services from "./Pages/Services";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import Footer from "./Pages/Footer";

import "./App.css";

function App() {
  const [loader, setLoader] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Get user preference from localStorage or check system preference
    const userTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (userTheme === "dark" || (!userTheme && systemPrefersDark)) {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setLoader(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (loader) {
    return (
      <div
        className={`flex justify-center items-center fixed top-0 left-0 w-full h-full z-50 ${
          isDarkMode ? "bg-[#1a1a1a]" : "bg-[#e0e8f6]"
        }`}
      >
        <span className={`spinner ${isDarkMode ? "dark-spinner" : ""}`}></span>
      </div>
    );
  }
  return (
    <div className='App'>
      <Header resumeData={resumeData} />
      <Home resumeData={resumeData} />
      <About resumeData={resumeData} />
      <Resume resumeData={resumeData} />
      <Services resumeData={resumeData} />
      <Projects resumeData={resumeData} />
      <Contact resumeData={resumeData} />
      <Footer resumeData={resumeData} />
    </div>
  );
}

export default App;
