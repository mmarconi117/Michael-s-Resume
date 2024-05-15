import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import Cover from "./Components/Cover";
import References from "./Components/References";
import Footer from "./Components/Footer";
// import Certifications from "./Components/Certifications";
import React, { useEffect, useState } from "react";

const welcomeText = "Welcome To Michael Marconi's Resume";
const animationDelay = 200; // Adjust the delay as needed

function App() {
  const [visibleText, setVisibleText] = useState('');

  useEffect(() => {
    const animateText = async () => {
      for (let i = 0; i < welcomeText.length; i++) {
        await new Promise((resolve) => setTimeout(resolve, animationDelay));
        setVisibleText(welcomeText.substring(0, i + 1));
      }
    };

    animateText();
  }, []);

  return (
    <Router>
      <div>
        <span className="welcomeText">{visibleText}</span>
        <Navbar />
        {/* Define your routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cover" element={<Cover />} />
          <Route path="/references" element={<References />} />
          {/* <Route path="/certs" element={<Certifications />} /> */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
