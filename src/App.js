import Navbar from "./Navbar.js";
import Introduction from "./Home.js";
import Services from "./Services.js";
import Equipment from "./Equipment.js";
import Applications from "./Applications.js";
import About from "./About.js";
import Footer from "./Footer.js";
import "./App.css";

function App() {
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
      <Introduction />
      <Services />
      <Equipment />
      <Applications />
      <About />
      <Footer />
    </div>
  );
}

export default App;







