import analysisImg from "./img/analysis.png";
import evaluationImg from "./img/evaluation.png";
import supportImg from "./img/support.png";
import "./Services.css";
import "./App.css";

function Services() {
  // Function for Analysis Section //
const analysisButtons = document.querySelectorAll(".analysis-1, .analysis-2, .analysis-3, .analysis-4");
let activeAnalysisButton = document.querySelector(".analysis-1");

function displayAnalysisOption(event) {
  event.preventDefault();
  const analysisHeadline = document.querySelector(".analysis-head");
  const analysisText = document.querySelector(".analysis-text");
  const analysisButton = event.target;
  
  activeAnalysisButton.classList.remove("active");
  
  if (analysisButton.classList.contains("analysis-1")) {
    analysisHeadline.innerHTML = "Technology Audit";
    analysisText.innerHTML = "Performing thorough audits to evaluate the suitability of PU, PUR, PIR and hybrid methods. Utilising pentane and next-generation hybrid blowing agents while adhering to Health & Safety standards. Expertise in continuous and discontinuous panel manufacturing using flexible, rigid, metallic and non-metallic facings.";
  } else if (analysisButton.classList.contains("analysis-2")) {
    analysisHeadline.innerHTML = "Production Efficiency";
    analysisText.innerHTML = "Implementing Factory Production Control (FPC) alongside other techniques for accreditation and quality standard requirements. Proficient in the operation of various equipment types, including single and multi-daylight presses, shuttle presses, vertical presses, rotary moulding turntables and many other types of bespoke equipment.";
  } else if (analysisButton.classList.contains("analysis-3")) {
    analysisHeadline.innerHTML = "Business Strategy Services";
    analysisText.innerHTML = "Empowering management teams to capitalise on emerging business prospects through strategic planning and comprehensive feasibility studies. Additionally, supporting sales and marketing teams to expedite market expansion and achieve business objectives efficiently.";
  } else if (analysisButton.classList.contains("analysis-4")) {
    analysisHeadline.innerHTML = "Issue Resolution & Failure Analysis";
    analysisText.innerHTML = "Diagnosing and resolving issues by utilising our combined expertise spanning over a century in polyurethane processing and products across numerous regions worldwide. Our comprehensive failure analysis include evaluations of processing discrepancies and chemical compatibility.";
  }
  
  analysisButton.classList.add("active");
  
  activeAnalysisButton = analysisButton;
}

analysisButtons.forEach(button => {
  button.addEventListener("click", displayAnalysisOption);
});

// Function for Evaluation Section //
const evaluationButtons = document.querySelectorAll(".evaluation-1, .evaluation-2, .evaluation-3, .evaluation-4");
let activeEvaluationButton = document.querySelector(".evaluation-1");

function displayEvaluationOption(event) {
  event.preventDefault();
  const evaluationHeadline = document.querySelector(".evaluation-head");
  const evaluationText = document.querySelector(".evaluation-text");
  const evaluationButton = event.target;

  activeEvaluationButton.classList.remove("active");
  
  if (evaluationButton.classList.contains("evaluation-1")) {
    evaluationHeadline.innerHTML = "Product & Production Development";
    evaluationText.innerHTML = "Leveraging our collective expertise to streamline market entry by covering all the chemical and numerous processing options. We specialise in equipment optimisation, plant enhancements, and delivering cost-effective solutions for seamless product and production development.";
  } else if (evaluationButton.classList.contains("evaluation-2")) {
    evaluationHeadline.innerHTML = "Advanced Production Optimisation";
    evaluationText.innerHTML = "Bringing extensive experience in PU, PUR and PIR technologies, we excel in optimising production processes. Our proficiency extends to utilising high and low-pressure metering equipment, alongside cutting-edge pentane and LBA blowing agent technologies.";
  } else if (evaluationButton.classList.contains("evaluation-3")) {
    evaluationHeadline.innerHTML = "Intellectual Property Sourcing";
    evaluationText.innerHTML = "Providing professional guidance on technology, chemicals, and procurement, we ensure optimal sourcing strategies. Our expertise extends to intellectual property matters, covering diverse PU, PUR, PIR and hybrid approaches with partner patent attorneys.";
  } else if (evaluationButton.classList.contains("evaluation-4")) {
    evaluationHeadline.innerHTML = "Valuation & Funding Consultation";
    evaluationText.innerHTML = "Offering independent and unbiased advice in collaboration with your financial team to navigate valuation reporting and explore funding options, ensuring informed decision-making and strategic financial planning.";
  } 
  
  evaluationButton.classList.add("active");
  
  activeEvaluationButton = evaluationButton;
}

evaluationButtons.forEach(button => {
  button.addEventListener("click", displayEvaluationOption);
});

// Function for Support Section //
const supportButtons = document.querySelectorAll(".support-1, .support-2, .support-3, .support-4, .support-5, .support-6, .support-7, .support-8");
let activeSupportButton = document.querySelector(".support-1");

function displaySupportOption(event) {
  event.preventDefault();
  const supportHeadline = document.querySelector(".support-head");
  const supportText = document.querySelector(".support-text");
  const supportButton = event.target;

  // Remove active class from the previously active button
  activeSupportButton.classList.remove("active");
  
  if (supportButton.classList.contains("support-1")) {
    supportHeadline.innerHTML = "Production Consultation";
    supportText.innerHTML = "Offering comprehensive consultation on various PU, PUR, PIR and hybrid approaches, independent of supplier preferences. From continuous metal-faced panels to discontinuous panel production, we provide insights and expertise for prototype samples and beyond.";
  } else if (supportButton.classList.contains("support-2")) {
    supportHeadline.innerHTML = "Global Assignment Management";
    supportText.innerHTML = "Facilitating assignments worldwide, including remote work when suitable for cost efficiency and logistical reasons.";
  } else if (supportButton.classList.contains("support-3")) {
    supportHeadline.innerHTML = "Factory Design Optimisation";
    supportText.innerHTML = "Specialising in polyurethane processing equipment, our technical specialists excel in factory design and production layout optimisation, including mechanical handling solutions.";
  } else if (supportButton.classList.contains("support-4")) {
    supportHeadline.innerHTML = "Expert Witness";
    supportText.innerHTML = "Providing technical expertise as expert witnesses in litigation cases, delivering authoritative and unbiased opinions. Cases may involve patent disputes and project disagreements.";
  } 
  
  // Add active class to the clicked button
  supportButton.classList.add("active");
  
  // Update the activeSupportButton variable to the newly clicked button
  activeSupportButton = supportButton;
}

supportButtons.forEach(button => {
  button.addEventListener("click", displaySupportOption);
});

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