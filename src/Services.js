import React, { useEffect, useState } from "react";
import analysisImg from "./img/analysis.png";
import evaluationImg from "./img/evaluation.png";
import supportImg from "./img/support.png";
import "./Services.css";
import "./App.css";

const contentData = {
  analysis: {
    "analysis-1": {
      headline: "Technology Audit",
      text: "Conducting thorough audits to assess the suitability of PU, PUR, PIR and hybrid methods. Utilising pentane and advanced hybrid blowing agents while ensuring Health & Safety compliance. Expertise in manufacturing continuous and discontinuous panels with flexible, rigid, metallic and non-metallic facings."
    },
    "analysis-2": {
      headline: "Operational Efficiency",
      text: "Implementing Factory Production Control (FPC) and other techniques for accreditation and quality standards. Skilled in operating various equipment, including single and multi-daylight presses, shuttle presses, vertical presses, rotary molding turntables and custom machinery."
    },
    "analysis-3": {
      headline: "Strategy Services",
      text: "Empowering management to seize emerging business opportunities through strategic planning and feasibility studies. Supporting sales and marketing teams for faster market expansion and efficient goal achievement."
    },
    "analysis-4": {
      headline: "Failure Analysis",
      text: "Diagnosing and resolving issues using our century-long expertise in polyurethane processing worldwide. Our comprehensive analysis includes evaluating processing discrepancies and chemical compatibility."
    },
  },
  evaluation: {
    "evaluation-1": {
      headline: "Production Development",
      text: "Utilising our expertise to streamline market entry, covering various chemical and processing options. Specialising in equipment optimisation, plant enhancements and cost-effective solutions for seamless product and production development."
    },
    "evaluation-2": {
      headline: "Production Optimisation",
      text: "Bringing extensive experience in PU, PUR and PIR technologies, we excel in optimising production processes. Our skills include using high and low-pressure metering equipment, as well as advanced pentane and LBA blowing agent technologies."
    },
    "evaluation-3": {
      headline: "Property Sourcing",
      text: "Providing professional guidance on technology, chemicals and procurement, we ensure optimal sourcing strategies. Our expertise extends to intellectual property matters, covering various PU, PUR, PIR and hybrid approaches with partner patent attorneys."
    },
    "evaluation-4": {
      headline: "Financial Consultancy",
      text: "Providing impartial advice alongside your financial team, we navigate valuation reporting and funding options for informed decision-making and strategic planning."
    },
  },
  support: {
    "support-1": {
      headline: "Manufacturing Advisory",
      text: "Delivering thorough consultation on diverse PU, PUR, PIR and hybrid methods, free from supplier biases. From continuous metal-faced panels to discontinuous panel production, we offer insights and expertise for prototype samples and beyond."
    },
    "support-2": {
      headline: "Global Oversight",
      text: "Managing projects worldwide, including remote work for cost efficiency and logistical considerations when appropriate."
    },
    "support-3": {
      headline: "Optimising Design",
      text: "Focused on polyurethane processing equipment, our technical experts specialise in factory design and production layout optimisation, including mechanical handling solutions."
    },
    "support-4": {
      headline: "Expert Witness",
      text: "Offering authoritative and impartial opinions as expert witnesses in litigation cases, covering areas such as patent disputes and project disagreements."
    },
  },
};

function Services() {
  const [activeContent, setActiveContent] = useState({
    analysis: contentData.analysis["analysis-1"],
    evaluation: contentData.evaluation["evaluation-1"],
    support: contentData.support["support-1"],
  });
  const [fade, setFade] = useState({ type: "", key: "" });

  useEffect(() => {
    if (fade.type && fade.key) {
      const timer = setTimeout(() => {
        setFade({ type: "", key: "" });
        setActiveContent((prevState) => ({
          ...prevState,
          [fade.type]: contentData[fade.type][fade.key],
        }));
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [fade]);

  const handleClick = (type, key) => {
    setFade({ type, key });
  };

  const renderContent = (content, fadeClass) => (
    <div className={`option ${fadeClass}`}>
      <h5 className={`${content.headline}-head`}>{content.headline}</h5>
      <p><em className={`${content.headline}-text`}>{content.text}</em></p>
    </div>
  );

  return (
    <div className="Services">
      <section className="services fade-in" id="services">
        <h3 className="text-center">“Polyurethane is one of the most energy efficient insulation materials available.”</h3>
        <p className="description text-center">Polyurethane is a versatile material used in various applications, including off-site construction, house building, floor and ceiling cavities for both new and retrofit projects. PU Technology collaborates closely with partners to develop custom rigid PU foam solutions, from project inception to material delivery. Our expertise spans across SIPs panels, cold store panels, refrigerated displays, marine pipelines, molded rigid foam and more. Regardless of project complexity, PU Technology provides tailored rigid PU/PIR foam materials, backed by a team of application engineers to meet your specific needs.</p>
        <div className="services">
          <div className="grid">
            <div className="analysis grid-item text-center">
              <div className="text-container">
                <img src={analysisImg} alt="" />
                <h4>Analysis</h4>
                <ul>
                  {Object.keys(contentData.analysis).map((key) => (
                    <li key={key}>
                      <button
                        className={`analysis-${key.slice(-1)} ${activeContent.analysis === contentData.analysis[key] ? "active" : ""}`}
                        onClick={() => handleClick("analysis", key)}
                      >
                        {contentData.analysis[key].headline}
                      </button>
                    </li>
                  ))}
                </ul>
                {renderContent(activeContent.analysis, fade.type === "analysis" ? "fade-out" : "fade-in")}
              </div>
            </div>
            <div className="evaluation grid-item text-center">
              <div className="text-container">
                <img src={evaluationImg} alt="" />
                <h4>Evaluation</h4>
                <ul>
                  {Object.keys(contentData.evaluation).map((key) => (
                    <li key={key}>
                      <button
                        className={`evaluation-${key.slice(-1)} ${activeContent.evaluation === contentData.evaluation[key] ? "active" : ""}`}
                        onClick={() => handleClick("evaluation", key)}
                      >
                        {contentData.evaluation[key].headline}
                      </button>
                    </li>
                  ))}
                </ul>
                {renderContent(activeContent.evaluation, fade.type === "evaluation" ? "fade-out" : "fade-in")}
              </div>
            </div>
            <div className="support grid-item text-center">
              <div className="text-container">
                <img src={supportImg} alt="" />
                <h4>Support</h4>
                <ul>
                  {Object.keys(contentData.support).map((key) => (
                    <li key={key}>
                      <button
                        className={`support-${key.slice(-1)} ${activeContent.support === contentData.support[key] ? "active" : ""}`}
                        onClick={() => handleClick("support", key)}
                      >
                        {contentData.support[key].headline}
                      </button>
                    </li>
                  ))}
                </ul>
                {renderContent(activeContent.support, fade.type === "support" ? "fade-out" : "fade-in")}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;