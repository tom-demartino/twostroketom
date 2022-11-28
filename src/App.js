import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Fun from "./pages/Fun";
import Highlights from "./pages/Highlights";
import Error404 from "./pages/Error404";

export default function App() {
  return (
    <>
      <Router basename="">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/fun" element={<Fun />} />
          <Route path="/highlights" element={<Highlights />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Router>
    </>
  );
}
