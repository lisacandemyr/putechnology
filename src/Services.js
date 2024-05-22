import React, { useState } from "react";
import analysisImg from "./img/analysis.png";
import evaluationImg from "./img/evaluation.png";
import supportImg from "./img/support.png";
import "./Services.css";
import "./App.css";

function Services() {
  const [activeAnalysis, setActiveAnalysis] = useState("analysis-1");
  const [activeEvaluation, setActiveEvaluation] = useState("evaluation-1");
  const [activeSupport, setActiveSupport] = useState("support-1");

  const analysisContent = {
    "analysis-1": {
      headline: "Technology Audit",
      text: "Performing thorough audits to evaluate the suitability of PU, PUR, PIR and hybrid methods. Utilising pentane and next-generation hybrid blowing agents while adhering to Health & Safety standards. Expertise in continuous and discontinuous panel manufacturing using flexible, rigid, metallic and non-metallic facings."
    },
    "analysis-2": {
      headline: "Production Efficiency",
      text: "Implementing Factory Production Control (FPC) alongside other techniques for accreditation and quality standard requirements. Proficient in the operation of various equipment types, including single and multi-daylight presses, shuttle presses, vertical presses, rotary moulding turntables and many other types of bespoke equipment."
    },
    "analysis-3": {
      headline: "Business Strategy Services",
      text: "Empowering management teams to capitalise on emerging business prospects through strategic planning and comprehensive feasibility studies. Additionally, supporting sales and marketing teams to expedite market expansion and achieve business objectives efficiently."
    },
    "analysis-4": {
      headline: "Issue Resolution & Failure Analysis",
      text: "Diagnosing and resolving issues by utilising our combined expertise spanning over a century in polyurethane processing and products across numerous regions worldwide. Our comprehensive failure analysis include evaluations of processing discrepancies and chemical compatibility."
    },
  };

  const evaluationContent = {
    "evaluation-1": {
      headline: "Product & Production Development",
      text: "Leveraging our collective expertise to streamline market entry by covering all the chemical and numerous processing options. We specialise in equipment optimisation, plant enhancements, and delivering cost-effective solutions for seamless product and production development."
    },
    "evaluation-2": {
      headline: "Advanced Production Optimisation",
      text: "Bringing extensive experience in PU, PUR and PIR technologies, we excel in optimising production processes. Our proficiency extends to utilising high and low-pressure metering equipment, alongside cutting-edge pentane and LBA blowing agent technologies."
    },
    "evaluation-3": {
      headline: "Intellectual Property Sourcing",
      text: "Providing professional guidance on technology, chemicals, and procurement, we ensure optimal sourcing strategies. Our expertise extends to intellectual property matters, covering diverse PU, PUR, PIR and hybrid approaches with partner patent attorneys."
    },
    "evaluation-4": {
      headline: "Valuation & Funding Consultation",
      text: "Offering independent and unbiased advice in collaboration with your financial team to navigate valuation reporting and explore funding options, ensuring informed decision-making and strategic financial planning."
    },
  };

  const supportContent = {
    "support-1": {
      headline: "Production Consultation",
      text: "Offering comprehensive consultation on various PU, PUR, PIR and hybrid approaches, independent of supplier preferences. From continuous metal-faced panels to discontinuous panel production, we provide insights and expertise for prototype samples and beyond."
    },
    "support-2": {
      headline: "Global Assignment Management",
      text: "Facilitating assignments worldwide, including remote work when suitable for cost efficiency and logistical reasons."
    },
    "support-3": {
      headline: "Factory Design Optimisation",
      text: "Specialising in polyurethane processing equipment, our technical specialists excel in factory design and production layout optimisation, including mechanical handling solutions."
    },
    "support-4": {
      headline: "Expert Witness",
      text: "Providing technical expertise as expert witnesses in litigation cases, delivering authoritative and unbiased opinions. Cases may involve patent disputes and project disagreements."
    },
  };

  const renderContent = (content, activeKey) => (
    <div className="option">
      <h5 className={`${activeKey}-head`}>{content.headline}</h5>
      <p><em className={`${activeKey}-text`}>{content.text}</em></p>
    </div>
  );

  return (
    <div className="Services">
      <section className="services" id="services">
        <h3 className="text-center">“Polyurethane is one of the most energy efficient insulation materials available.”</h3>
        <p className="description text-center">Polyurethane is a highly versatile material that can be used in many far-reaching applications, including off-site construction, house building, floors and ceiling cavities in both new and retrofit construction projects. PU Technology works closely with its partners to develop bespoke rigid PU foam solutions. From initial project discussions to delivering the correctly specified materials. We have good experience supplying into SIPs panels, cold store panels, refrigerated displays, marine pipelines, molded rigid foam and more. No matter the complexity of your project - rigid PU/PIR foam materials sourced from PU Technology are available, with a team of application engineers ready to support you and formulate to your specific requirements.</p>
        <div className="services">
          <div className="row">
            <div className="analysis col text-center">
              <div className="option-list">
                <img src={analysisImg} alt="" />
                <h4>Analysis</h4>
                <ul>
                  {Object.keys(analysisContent).map(key => (
                    <li key={key}>
                      <button
                        className={`analysis-${key.slice(-1)} ${activeAnalysis === key ? "active" : ""}`}
                        onClick={() => setActiveAnalysis(key)}
                      >
                        {analysisContent[key].headline}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              {renderContent(analysisContent[activeAnalysis], activeAnalysis)}
            </div>
            <div className="evaluation col text-center">
              <div className="option-list">
                <img src={evaluationImg} alt="" />
                <h4>Evaluation</h4>
                <ul>
                  {Object.keys(evaluationContent).map(key => (
                    <li key={key}>
                      <button
                        className={`evaluation-${key.slice(-1)} ${activeEvaluation === key ? "active" : ""}`}
                        onClick={() => setActiveEvaluation(key)}
                      >
                        {evaluationContent[key].headline}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              {renderContent(evaluationContent[activeEvaluation], activeEvaluation)}
            </div>
            <div className="support col text-center">
              <div className="option-list">
                <img src={supportImg} alt="" />
                <h4>Support</h4>
                <ul>
                  {Object.keys(supportContent).map(key => (
                    <li key={key}>
                      <button
                        className={`support-${key.slice(-1)} ${activeSupport === key ? "active" : ""}`}
                        onClick={() => setActiveSupport(key)}
                      >
                        {supportContent[key].headline}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              {renderContent(supportContent[activeSupport], activeSupport)}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;