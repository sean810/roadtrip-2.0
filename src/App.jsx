import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ToastContainer from "./components/ToastContainer";
import ErrorBoundary from "./components/ErrorBoundary";
import Home from "./pages/Home";
import About from "./pages/About";
import Fleet from "./pages/Fleet";
import Services from "./pages/Services";
import Courier from "./pages/Courier";
import Clients from "./pages/Clients";
import Destinations from "./pages/Destinations";
import Contact from "./pages/Contact";
import Booking from "./pages/Booking";
import NotFound from "./pages/NotFound";

export default function App() {
  const [toasts, setToasts] = useState([]);

  const showToast = (message, type = "info") => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 4000);
  };

  return (
    <div className="app">
      <ErrorBoundary showToast={showToast}>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home showToast={showToast} />} />
            <Route path="/fleet" element={<Fleet showToast={showToast} />} />
            <Route path="/services" element={<Services />} />
            <Route path="/courier" element={<Courier />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact showToast={showToast} />} />
            <Route path="/booking" element={<Booking showToast={showToast} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <ToastContainer toasts={toasts} onClose={(id) => setToasts(prev => prev.filter(t => t.id !== id))} />
      </ErrorBoundary>
    </div>
  );
}