import React from "react";
import HomeImage from "./img/home.png";
import "./Home.css";
import "./App.css";

function Home() {
  return (
    <div className="Home">
      <main className="home float-up" id="home">
        <div className="text-container">
          <h1>We are</h1>
          <h2>Putechnology</h2>
        </div>
        <div>
          <img src={HomeImage} alt="Putechnology" />
        </div>
      </main>
    </div>
  );
}

export default Home;