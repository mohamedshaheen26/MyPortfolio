import React from "react";
import resumeData from "../resumeData";
import Header from "./components/Header";
import Home from "./components/Home";

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
