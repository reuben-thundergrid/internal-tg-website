import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Wizard from "./Pages/Wizard.tsx"
import Home from "./Pages/Home.tsx"
import FAQ from "./Pages/FAQ.tsx"
import "./App.css"
import Rules from "./Pages/Rules.tsx";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/wizard" element={<Wizard />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="*" element={<h1 style={{color: "white"}}>Page Doesn't Exist</h1>} />
        </Routes>
      </BrowserRouter>
      {/* <!-- Primary Meta Tags --> */}
      <title>Thundergrid Click</title>
      <meta name="title" content="Thundergrid Click" />
      <meta name="description" content="Company hub for internal processes" />

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="http://thundergrid.click" />
      <meta property="og:title" content="Thundergrid Click" />
      <meta property="og:description" content="Company hub for internal processes" />
    </>
  );
};

export default App;
