import introImg from "./img/main.png";
import "./Introduction.css";
import "./App.css";

function Introduction() {
  return (
    <div className="Introduction">
      <main>
        <div className="row">
          <div className="col-lg-7">
            <h1>We <span>are</span></h1>
            <h2><span>pu</span>technology</h2>
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