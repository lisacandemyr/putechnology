import earth from "./img/earth.png";
import "./Footer.css";

function Footer() {
  return (
    <div className="Footer">
 <footer className="contact" id="contact">
    <div className="grid">
      <div className="grid-item contact-section">
        <h3>Contact</h3>
        <p>
        <strong>PU Technology Ltd</strong>
        <br />
        Unit 6
        <br />
        Botany Business Park
        <br />
        Macclesfield Road
        <br />
        Whaley Bridge
        <br />
        Derbyshire
        <br />
        SK23 7DQ
        <br />
        <strong>Tel: 01663 735032</strong>
        <br />
        <strong>Mob: 07841 046596</strong>
        <br />
        <strong>Email: <a href="mailto:mail@putechnology.com">mail@putechnology.com</a></strong>
        </p>
        <p className="copyright">©2024 <a href="https://lisacandemyr.com/" target="_blank" rel="noreferrer"> Lisa Candemyr</a>. All Rights Reserved.<br />
          <a href="https://putechnology.com/privacy/">Privacy Policy</a> | <a href="https://putechnology.com/cookies/">Cookies Policy</a>
        </p>
      </div>
      <div className="grid-item">
        <img src={earth} className="img-fluid" alt="" />
      </div>
      <div className="grid-item partner-section">
        <h4>Proudly partnering with:</h4>
        <div className="autorim">
           <a href="https://www.autorim.co.uk/" target="_blank" rel="noreferrer">
           <h5 className="autorim-head">AutoRIM</h5>
           <p className="autorim-text">the polyurethane people</p>
           </a>
        </div>
        <div className="krauss-maffei">
           <a href="https://www.kraussmaffei.com/" target="_blank" rel="noreferrer">
           <h5 className="krauss-maffei-head">KraussMaffei</h5>
           <p className="krauss-maffei-text">Pioneering Plastics</p>
           </a>
        </div>
      </div>
    </div>
  </footer>
    </div>
  );
}

export default Footer;