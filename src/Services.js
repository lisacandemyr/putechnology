import analysisImg from "./img/analysis.png";
import evaluationImg from "./img/evaluation.png";
import supportImg from "./img/support.png";
import "./Services.css";
import "./App.css";

function Services() {
return (
    <div className="Services">
      <section className="services" id="services">
       <h3 className="text-center">“Polyurethane is one of the most energy efficient insulation materials available today.”</h3>
       <p className="description text-center">Polyurethane is a highly versatile material that can be used in many far-reaching applications, including off-site construction, house building, floors, and ceiling cavities in both new and retrofit construction projects. PU Technology works closely with its partners to develop bespoke rigid PU foam solutions. From initial project discussions to delivering the correctly specified materials, we have good experience supplying into SIPs panels, cold store panels, refrigerated displays, marine pipelines, molded rigid foam, and more. No matter the complexity of your project, rigid PU/PIR foam materials sourced from PU Technology are available, with a team of application engineers ready to support you and formulate to your specific requirements.</p>
      <div className="services">
        <div className="row">
          <div className="analysis col text-center">
             <div className="option-list">
                  <img src={analysisImg} alt="" />
                <h4>Analysis</h4>
                <ul>
                  <li><button className="analysis-1 active">Technology Audit</button></li>
                  <li><button className="analysis-2">Production Efficiency</button></li>
                  <li><button className="analysis-3">Business Strategy Services</button></li>
                  <li><button className="analysis-4">Issue Resolution & Failure Analysis</button></li>
                </ul>
             </div>
             <div className="option">
                <h5 className="analysis-head">Technology Audit</h5>
                <p><em className="analysis-text">Performing thorough audits to evaluate the suitability of PU, PUR, PIR and hybrid methods. Utilising pentane and next-generation hybrid blowing agents while adhering to Health & Safety standards. Expertise in continuous and discontinuous panel manufacturing using flexible, rigid, metallic and non-metallic facings.</em></p>
             </div>
          </div>
          <div className="evaluation col text-center">
            <div className="option-list">
                 <img src={evaluationImg} alt="" />
               <h4>Evaluation</h4>
               <ul>
                 <li><button className="evaluation-1 active">Product & Production Development</button></li>
                 <li><button className="evaluation-2">Advanced Production Optimisation</button></li>
                 <li><button className="evaluation-3">Intellectual Property Sourcing</button></li>
                 <li><button className="evaluation-4">Valuation & Funding Consultation</button></li>
               </ul>
            </div>
            <div className="option">
               <h5 className="evaluation-head">Product & Production Development</h5>
               <p><em className="evaluation-text">Leveraging our collective expertise to streamline market entry by covering all the chemical and numerous processing options. We specialise in equipment optimisation, plant enhancements, and delivering cost-effective solutions for seamless product and production development.</em></p>
            </div>
          </div>
          <div className="support col text-center">
            <div className="option-list">
                 <img src={supportImg} alt="" />
               <h4>Support</h4>
               <ul>
                 <li><button className="support-1 active">Production Consultation</button></li>
                 <li><button className="support-2">Global Assignment Management</button></li>
                 <li><button className="support-3">Factory Design Optimisation</button></li>
                 <li><button className="support-4">Expert Witness</button></li>
               </ul>
            </div>
            <div className="option">
               <h5 className="support-head">Production Consultation</h5>
               <p><em className="support-text">Offering comprehensive consultation on various PU, PUR, PIR and hybrid approaches, independent of supplier preferences. From continuous metal-faced panels to discontinuous panel production, we provide insights and expertise for prototype samples and beyond.</em></p>
            </div>
          </div>
        </div>
     </div>
     </section>
    </div>
  );
}

export default Services;