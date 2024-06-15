import "./About.css";

function About() {
  return (
    <div className="About">
      <section className="about" id="about">
        <div className="grid">
          <div className="grid-item grid-item-1">
            <h3 className="text-center">About Us</h3>
            <p className="description text-center">We offer professional, unbiased advice on polyurethane machines, backed by over 100 years of combined global experience in PU processing and products. Our engineering expertise spans across PU, PUR, PIR and hybrid techniques, including continuous and discontinuous panel production. Our chemical knowledge covers cutting-edge developments. We excel in product development, rapid market introduction and large-scale production expansion. Our services include chemical selection, process definition and new product development, addressing fire resistance, structural performance, thermal optimisation and environmental impact. We also specialise in technologies like pentane, LBA, low carbon, bio-based approaches, DCPD, high-performance syntactic GSPU and hydrophilic polyurethane prepolymer.</p>
          </div>
          <div className="grid-item grid-item-2">
            <h4 className="text-center">Partners</h4>
           <div className="autorim text-center">
            <a href="https://www.autorim.co.uk/" target="_blank" rel="noreferrer">
            <h5 className="autorim-head">AutoRIM</h5>
            <p className="autorim-text">the polyurethane people</p>
            </a>
           </div>
           <div className="krauss-maffei text-center">
            <a href="https://www.kraussmaffei.com/" target="_blank" rel="noreferrer">
            <h5 className="krauss-maffei-head">KraussMaffei</h5>
            <p className="krauss-maffei-text">Pioneering Plastics</p>
            </a>
           </div>
          </div>
        </div>  
      </section>
    </div>
  );
}

export default About;
