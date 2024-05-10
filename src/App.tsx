import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Wizard from "./Pages/Wizard.tsx"
import Home from "./Pages/Home.tsx"
import FAQ from "./Pages/FAQ.tsx"
import "./App.css"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/wizard" element={<Wizard />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="*" element={<h1 style={{color: "white"}}>Page Doesn't Exist</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
