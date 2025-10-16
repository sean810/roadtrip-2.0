import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Fleet from "./pages/Fleet";
import Services from "./pages/Services";
import Courier from "./pages/Courier";
import Clients from "./pages/Clients";
import Destinations from "./pages/Destinations";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

export default function App(){
  return (
    <div className="app">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fleet" element={<Fleet />} />
          <Route path="/services" element={<Services />} />
          <Route path="/courier" element={<Courier />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
