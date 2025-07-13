import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Components from "./components";

const {
  Header,
  Hero,
  ProductShowcase,
  Features,
  CustomizationForm,
  FAQ,
  Testimonials,
  Footer,
  BackToTop
} = Components;

const Home = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-yellow-50">
      <Header />
      <Hero />
      <ProductShowcase />
      <Features />
      <CustomizationForm />
      <FAQ />
      <Testimonials />
      <Footer />
      {showBackToTop && <BackToTop />}
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;