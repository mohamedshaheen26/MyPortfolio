import React from "react";
import resumeData from "../resumeData";
import Header from "./Pages/Header";
import Home from "./Pages/Home";

import "./App.css";

function App() {
  return (
    <div className='App'>
      <Header resumeData={resumeData} />
      <Home resumeData={resumeData} />
    </div>
  );
}

export default App;
