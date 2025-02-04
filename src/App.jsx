import React from "react";
import resumeData from "../resumeData";
import Header from "./Pages/Header";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";

import "./App.css";

function App() {
  return (
    <div className='App'>
      <Header resumeData={resumeData} />
      <Home resumeData={resumeData} />
      <About resumeData={resumeData} />
      <Services resumeData={resumeData} />
    </div>
  );
}

export default App;
