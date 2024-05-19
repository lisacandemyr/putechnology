import introImg from "./img/main.png";
import "./Introduction.css";
import "./App.css";

function Introduction() {
  return (
    <div className="Introduction">
      <main>
        <div className="row">
         <div className="col-lg-7">
          <h1>We are</h1>
          <p className="main-description-1">Turnkey solutions for <strong>polyurethane</strong> processing equipment.</p>
          <h2>We offer</h2>
          <p className="main-description-2">Confidential impartial <strong>analysis</strong>, <strong>evaluation</strong> and <strong>support</strong> in <span>PUR, PIR,</span> hybrid and polyurethane technology.</p>
         </div>
         <div className="col-lg-5">
          <img src={introImg} className="img-fluid" alt="" />
         </div>
        </div>
      </main>
    </div>
  );
}

export default Introduction;