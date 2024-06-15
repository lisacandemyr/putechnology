import React from "react";
import HomeImage from "./img/home.png";
import "./Home.css";
import "./App.css";

function Home() {
  return (
    <div className="Home">
      <main className="home" id="home">
        <div className="text-container float-up">
          <h1>We are</h1>
          <h2>Putechnology</h2>
        </div>
        <div>
          <img src={HomeImage} className="float-up" alt="Putechnology" />
        </div>
      </main>
    </div>
  );
}

export default Home;