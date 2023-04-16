import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/home/Home";
import MyWork from "../pages/my-work/MyWork";
import Contact from "../pages/contact/Contact";

const Router = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/my-work" element={<MyWork />} />
      <Route exact path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default Router;
