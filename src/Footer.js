import "./Footer.css";

function Footer() {
  return (
  <div className="Footer">
   <footer className="contact" id="contact">
    <div className="grid">
      <div className="grid-item-1">
        <h3>Contact</h3>
        <p>
        PU Technology Ltd
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
        <br />
        <strong>
        Tel: 01663 735032 / Mob: 07841 046596
        <br />
        Email: <a href="mailto:mail@putechnology.com">mail@putechnology.com</a>
        </strong>
        </p>
      </div>
      <div className="grid-item-2">
        <h3>Design</h3>
        <p>©2024 <a href="https://lisacandemyr.com/" target="_blank" rel="noreferrer"> Lisa Candemyr</a>
        <br />        
        Icons by <a href="https://icons8.com/" target="_blank" rel="noreferrer">Icons8.com</a> 
        </p>
      </div>
    </div>
   </footer>
  </div>
  );
}

export default Footer;