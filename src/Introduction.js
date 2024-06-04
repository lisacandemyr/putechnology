import house from "./img/house.png";
import puzzle from "./img/puzzle.png";
import gear from "./img/gear-wrench.png";

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
            <img src={house} className="img-fluid house" alt="" />
            <img src={puzzle} className="img-fluid puzzle" alt="" />
            <img src={gear} className="img-fluid gear" alt="" />
          </div>
        </div>
      </main>
    </div>
  );
}

export default Introduction;