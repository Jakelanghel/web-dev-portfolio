import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/home/Home";
import MyWork from "../pages/my-work/MyWork";
import Contact from "../pages/contact/Contact";

const Router = (props) => {
  return (
    <Routes>
      <Route exact path="/" element={<Home isMobile={props.isMobile} />} />
      <Route exact path="/my-work" element={<MyWork />} />
      <Route exact path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default Router;
