import React, { useEffect } from "react";
import Navbar from "./Navbar.js";
import Introduction from "./Home.js";
import Services from "./Services.js";
import Equipment from "./Equipment.js";
import Applications from "./Applications.js";
import About from "./About.js";
import Footer from "./Footer.js";
import "./App.css";

function App() {
  useEffect(() => {
    const sections = document.querySelectorAll('.section');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    }, { threshold: 0.2 });

    sections.forEach(section => {
      observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="App">
      <div className="grain"></div>
      <div className="gradients-container">
        <div className="g1"></div>
        <div className="g2"></div>
        <div className="g3"></div>
        <div className="g4"></div>
        <div className="g5"></div>
      </div>
      <div className="overlay"></div>
      <Navbar />
      <div className="section"><Introduction /></div>
      <div className="section"><Services /></div>
      <div className="section"><Equipment /></div>
      <div className="section"><Applications /></div>
      <div className="section"><About /></div>
      <div className="section"><Footer /></div>
    </div>
  );
}

export default App;
