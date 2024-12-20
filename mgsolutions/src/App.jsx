import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Energia from "./pages/Energia"
import Inteligentes from "./pages/Inteligentes";
import Telecomunicacoes from "./pages/Telecomunicacoes";


function App() {
  return (
    <Router>
    <Navbar />
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/telecomunicacoes" element={<Telecomunicacoes />} />
        <Route path="/energia" element={<Energia />} />
        <Route path="/inteligentes" element={<Inteligentes />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
    <Footer />
   
  </Router>
  )
}

export default App
