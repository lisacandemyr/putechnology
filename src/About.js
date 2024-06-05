import "./About.css";

function About() {
  return (
    <div className="About">
 <section className="about" id="about">
    <h3 className="gradient-text text-center">About PU Technology</h3>
      <div className="row">
        <div className="card-1 col text-center">
          <div className="card-top">
           <img src="src/about-1.png" alt="" />
          </div>
          <div className="card-body">
           <p><em>We provide professional, unbiased polyurethane machine advice, with over 100 years of combined experience in polyurethane processing and products across the world.
           <br />
           <br />
           Our engineering expertise, process and also product experience cover the full range of PU, PUR, PIR and hybrid processing techniques. These include continuous metal-faced panels and discontinuous panel production.
           <br />
           <br />
           Furthermore, our chemical expertise covers the full range of developments, including many at the frontiers of the technology.</em></p>
          </div>
        </div>
        <div className="card-2 col text-center">
          <div className="card-top">
           <img src="src/about-2.png" alt="" />
          </div>
          <div className="card-body">
           <p><em>Our technical specialists have product experience, including prototype samples; bringing new products rapidly to market; and growing output by orders of magnitude, in addition to expanding production geographically by rolling out to multi-site operations.
           <br />
           <br />
           Our expertise includes chemical selection, production process definition, also new product development in existing and emerging markets. Addressing technical product aspects including fire resistance, structural performance, thermal optimisation, acoustic attenuation and also total life environmental aspects.</em></p>
          </div>
        </div>
        <div className="card-3 col text-center">
          <div className="card-top">
           <img src="src/about-3.png" alt="" />
          </div>
          <div className="card-body">
           <p><em>Our experience and market knowledge ranges across polyurethane insulation applications including construction, transport, cold storage, insulated pipelines, domestic refrigeration in addition to deep sea buoyancy.
           <br />
           <br />
           Other areas of expertise include the introduction of pentane technology (C5 H12); use of LBA, for example Solstice, without pentane and blended with pentane; low carbon, bio-based and carbon capture approaches; dicyclopentadiene (DCPD); high performance syntactic GSPU (as well as IMPU) and also hydrophilic polyurethane prepolymer using PEG, for example Hypol.</em></p>
          </div>
        </div>
      </div>
  </section>
    </div>
  );
}

export default About;
