import React from "react";
import { Routes, Route } from "react-router-dom";
import { GlobalStyles } from "../styles/GlobalStyles";
import { Menu } from "../components/Menu";
import { Home } from "../pages/Home";
import { Galaxies } from "../pages/Galaxies";
import { Footer } from "../components/Footer";

export const App = (props) => {
  return (
    <>
      <GlobalStyles />
      <Menu />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/galaxies" element={<Galaxies {...props} />} />
      </Routes>
      <Footer />
    </>
  );
};
