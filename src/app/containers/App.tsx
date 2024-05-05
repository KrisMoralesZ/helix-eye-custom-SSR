import React from "react";
import { Routes, Route } from "react-router-dom";
import { GlobalStyles } from "../styles/GlobalStyles";
import { Menu } from "../components/Menu";
import { Home } from "../pages/Home";
import { Galaxies } from "../pages/Galaxies";
import { Footer } from "../components/Footer";
import GalaxiesInfo from "../pages/GalaxiesInfo";

export const App = (props) => {
  return (
    <>
      <GlobalStyles />
      <Menu />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/galaxies" element={<Galaxies {...props} />} />
        <Route path="/galaxies/:id" element={<GalaxiesInfo {...props} />} />
      </Routes>
      <Footer />
    </>
  );
};
