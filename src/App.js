import Navbar from "./Navbar.js";
import Introduction from "./Introduction.js";
import Services from "./Services.js";
import Equipment from "./Equipment.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="grain"></div>
      <div className="overlay"></div>
      <Navbar />
      <Introduction />
      <Services />
      <Equipment />
    </div>
  );
}

export default App;











