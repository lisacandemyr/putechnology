import Navbar from "./Navbar.js";
import Introduction from "./Introduction.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="grain"></div>
      <div className="overlay"></div>
      <Navbar />
      <Introduction />
    </div>
  );
}

export default App;
