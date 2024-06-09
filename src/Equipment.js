import React, { useState, useEffect, useRef } from "react";
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import EquipmentOne from "./img/equipment-1.png";
import EquipmentTwo1 from "./img/equipment-2-1.png";
import EquipmentTwo2 from "./img/equipment-2-2.png";
import EquipmentFive from "./img/equipment-5.png";
import "./Equipment.css";
import "./App.css";

function Equipment() {
  const [activeEquipment, setActiveEquipment] = useState("equipment-1");
  const [fade, setFade] = useState({ type: "", key: "" });
  const [containerHeight, setContainerHeight] = useState("auto");
  const containerRef = useRef(null);
  const contentRefs = useRef({});

  const equipmentContent = {
    "equipment-1": (
      <div className="equipment-1">
        <h4>SIPs Equipment Solutions</h4>
        <p>
          We provide MMC and SIPs manufacturing equipment in partnership with
          Krauss Maffei and AutoRIM technologies, covering a wide range from
          automated continuous lines to discontinuous panel setups. With
          extensive experience, our expertise and equipment cater to Modern
          Methods of Construction, including SIPs panels, for residential,
          commercial and industrial buildings. Our aim is to assist you in
          selecting the right equipment. SIPs buildings, renowned for their
          energy efficiency and noise reduction, are manufactured more affordably
          than older systems with the proper machinery and knowledge. Their
          popularity stems from quicker construction, reduced air leakage, fewer
          drafts and noise intrusions, and notably lower energy bills and CO2
          emissions for Full Wall, roof panels, Volumetric and Modular buildings
          compared to traditional timber framing.
        </p>
        <div className="grid">
          <div className="grid-item-1">
            <h5>SIPs Production</h5>
            <p>
              SIPs, or Structural Insulated Panels, consist of a rigid foam core
              sandwiched between two structural facings. The core materials
              include polyurethane (PUR), polyisocyanurate (PIR) or polystyrene
              (PS). Panels with a PUR/PIR core offer superior insulation with a
              thinner cross-section compared to those with a PS core. PUR also
              transmits about 40% less heat for a given thickness. Our advanced
              bonding technology ensures structural integrity, with the
              insulation core auto-adhesively bonded to the OSB facings for
              enhanced adhesion. Unlike traditional methods relying on secondary
              glues, our panels feature PUR foam injected in liquid form,
              expanding to bond directly with the OSB under high pressure. This
              innovative approach guarantees reliable results, setting us apart
              in SIPs manufacturing.
            </p>
          </div>
          <div className="grid-item-2">
          <img src={EquipmentOne} alt="" />
          </div>
        </div>
      </div>
    ),
    "equipment-2": (
      <div className="equipment-2">
        <h4>RimStar Smart</h4>
        <div className="grid">
          <div className="grid-item-1">
            <p>
              Introducing RimStar Smart by PU Technology, launched in the UK in
              collaboration with AutoRIM. Unlock your PUR processing potential
              with RimStar Smart. Our renowned reliability, top-quality components
              and adaptable systems set the standard. Select our standard RimStar
              Smart or customise with RimStar Plus to suit your needs perfectly.
              RimStar Smart handles daily challenges efficiently. Tailor the basic
              version to your industry demands with customisable options. Choose
              tank sizes, pumps, temperature regulation and mixing heads to match
              your unique requirements.
            </p>
            <h5>Future-proof Investment</h5>
            <p>
              RimStar Smart is ideal for digital production environments,
              featuring a smart interface for plant technology and automation. The
              optional ClosedLoop control system ensures optimal component
              quality, while an RFID interface streamlines efficiency. With
              SmartAssist, KraussMaffei offers rapid expert support online or
              on-site if needed.
            </p>
            <h5>Operate from Anywhere</h5>
            <p>
              Equipped with a 12-inch glass touch display and castors, the mobile
              HMI offers operational flexibility. Its advanced design allows for
              precise usage even when wearing thin gloves. With an IP65 protection
              rating and a durable end-to-end glass panel, the panel is highly
              resistant to scratches and chemicals. The user-friendly interface
              provides an intuitive experience, with menu screens displaying
              crucial parameters at a glance. The customisable quick-access
              toolbar boosts daily productivity. For manual foaming processes, a
              control panel at the mixing head features a 4-inch color touch
              display, while a shot time countdown enhances comfort and process
              control.
            </p>
            <h5>Compact and Adaptable</h5>
            <p>
              RimStar Smart fits any space with its 4.8 m² footprint. The metering
              machine's design is extremely compact, and the optional swiveling
              mix head boom adjusts as needed. Whether installed in front of or
              beside the machine, its benefits include flexibility in process and
              production, low space requirements, premium-quality mixing heads,
              matching components for durability and high product quality,
              additional process data display at the mixing head and optional
              positioning of the mix head boom.
            </p>
            <h5>Innovative Solutions for Polyurethane Professionals</h5>
            <p>
              Offering maximum flexibility, our solutions ensure you're always
              prepared to meet customer needs and capitalise on market
              opportunities. Premium-quality machine components and customisable
              options enable tailored solutions. KraussMaffei's quality and
              comprehensive consultation ensure long-term productivity, quality
              and efficiency, driving your economic success.
              <br />
              <br />
              <strong>Key Features:</strong>
            </p>
            <ul>
              <li>• Competitive price/performance ratio.</li>
              <li>• Compact metering machine footprint (4.8 m²).</li>
              <li>• Intuitive operation via mobile HMI.</li>
              <li>• Tried-and-tested premium-quality mixing heads and components.</li>
              <li>• Additional process data display on mixing head panel.</li>
              <li>• Smart options for customised configurations.</li>
              <li>• Short delivery times.</li>
              <li>• Online and on-site KraussMaffei Service.</li>
            </ul>
          </div>
          <div className="grid-item-2">
            <img src={EquipmentTwo1} alt="" />
            <img src={EquipmentTwo2} className="two" alt="" />
          </div>
        </div>
      </div>
    ),
    "equipment-3": (
      <div className="equipment-3">
        <h4>Presses and Jig Handling Systems</h4>
        <p>
          We offer expertise to guide initial advice from AutoRIM on permutations. We coordinate detailed discussions on required output, product mix, space and budget to facilitate firm proposals, costings and layouts for consideration. Our experience ensures AutoRIM panel presses are designed and constructed for reliable service, tailored to specific design and specification needs. Similarly, our jig handling systems and preparation units are compatible and carefully balanced to optimise production criteria.
        </p>
        <h5>Panel Jigs</h5>
        <p>
          Our expertise complements AutoRIM's standard panel jig system, ensuring swift delivery for manufacturing cold rooms, building cladding or partitioning panels. These systems feature a jig frame assembly made from structural aluminum extrusion, producing panels with a tongued and grooved profile for superior thermal integrity at the joint. The jigs can be supplied ready to accommodate AutoRIM's specially developed panel lock system, with eccentric over-center locators to securely and easily fasten the locks during the foaming process and swiftly release them during demolding. While standard extrusion widths of 80mm and 120mm are available, we offer guidance on suitable intermediates that can be fabricated to meet specific requirements.
        </p>
      </div>
    ),
    "equipment-4": (
      <div className="equipment-4">
        <h4>Foam Dispensing Equipment</h4>
        <p>
          Polyurethane (PU) foam dispensing equipment plays a crucial role in PU production. We are pleased to offer expert guidance and support for two leading independent providers of polyurethane metering and foam dispensing equipment: AutoRIM and KraussMaffei. Through our partnerships and network of agents, we ensure our customers receive top-quality service, quick technical assistance and spare parts support. Our unique collaboration with AutoRIM and KraussMaffei grants our customers access to a comprehensive range of high and low-pressure PU equipment, with outputs ranging from 7kg to 300kg per minute. This diverse selection ensures our customers find the most suitable machine for their requirements.
          <br />
          <br />
          With over 100 years of combined experience in PU mixing technology, we assist customers in selecting the right machine and operating technology tailored to their specific production parameters. Our collaborative approach ensures customers receive optimal solutions for their PU foam production needs. We offer the most comprehensive service in the polyurethane manufacturing industry, providing expert advice, a variety of equipment options, and technical support. Our guidance aligns with the AutoRIM and KraussMaffei Total Package Concept, encompassing supply contracts for chemical systems and facing materials tailored to customer specifications.
        </p>  
      </div>
    ),
    "equipment-5": (
      <div className="equipment-5">
        <h4>Discontinuous Press Injection Process</h4>
        <p>
          For the production of large quantities of standard products, a regular or inverse laminator may suffice. However, when faced with factors such as diverse facing materials, varied panel thicknesses or the need for mechanical fixing systems within panels, continuous laminator systems become impractical. In such cases, the Discontinuous Press Injection Process emerges as the preferred alternative. While manufacturers previously had to source component parts from various suppliers, this approach risked compatibility issues, inefficiencies or unreliability. Collaborating with AutoRIM and KraussMaffei, we offer an integrated range of equipment tailored for PU and PIR composite panel manufacturing, providing complete turnkey plants from a single source. <strong>Our equipment and supplies include:</strong>
          <br />
          <br />
        </p>
        <div className="grid">
          <div className="grid-item-1">
            <ul>
              <li>• KraussMaffei High-Pressure and AutoRIM Low-Pressure Polyurethane Foam Metering machines.</li>
              <li>• Hydraulically powered single and multi-daylight panel presses with various specifications.</li>
              <li>• Mechanical drive parallel-acting presses.</li>
              <li>• Simple manually clamped 'oyster' presses.</li>
              <li>• Jig Preparation Tables.</li>
              <li>• Jig Transfer Tables.</li>
              <li>• Hydraulic Scissor Lift Tables.</li>
              <li>• Jig infeed and outfeed tables, return conveyors.</li>
              <li>• Standard jig system for cold-room and building panels.</li>
              <li>• Panel lock supplies.</li>
              <li>• Design and fabrication of purpose-made jig systems.</li>
              <li>• Extract and ventilation equipment.</li>
              <li>• Raw materials handling equipment.</li>
              <li>• Chemical systems and facing material supplies.</li>
            </ul>
          </div>
          <div className="grid-item-2">
            <img src={EquipmentFive} alt="" />
          </div>
        </div>
      </div>
    )
  };

  useEffect(() => {
    if (fade.type && fade.key) {
      const timer = setTimeout(() => {
        setFade({ type: "", key: "" });
        setActiveEquipment(fade.key);
      }, 750);
      return () => clearTimeout(timer);
    }
  }, [fade]);

  useEffect(() => {
    if (contentRefs.current[activeEquipment]) {
      setContainerHeight(contentRefs.current[activeEquipment].scrollHeight);
    }
  }, [activeEquipment]);

  const handleClick = (key) => {
    setFade({ type: "equipment", key });
  };

  const renderContent = (content, key, fadeClass) => (
    <div className={`option ${fadeClass}`} ref={el => contentRefs.current[key] = el}>
      {content}
    </div>
  );

  return (
    <div className="Equipment">
      <section className="equipment" id="equipment">
        <div className="row">
          <button className={`col equipment-btn-1 ${activeEquipment === "equipment-1" ? 'active' : ''}`}
            onClick={() => handleClick("equipment-1")}
          >SIPS Equipment Solutions</button>
          <button className={`col equipment-btn-2 ${activeEquipment === "equipment-2" ? 'active' : ''}`}
            onClick={() => handleClick("equipment-2")}
          >RimStar Smart</button>
          <button className={`col equipment-btn-3 ${activeEquipment === "equipment-3" ? 'active' : ''}`}
            onClick={() => handleClick("equipment-3")}
          >Presses and Jig Handling Systems</button>
          <button className={`col equipment-btn-4 ${activeEquipment === "equipment-4" ? 'active' : ''}`}
            onClick={() => handleClick("equipment-4")}
          >Foam Dispensing Equipment</button>
          <button className={`col equipment-btn-5 ${activeEquipment === "equipment-5" ? 'active' : ''}`}
            onClick={() => handleClick("equipment-5")}
          >Discontinuous Press Injection Process</button>
        </div>
        <div 
          className="equipment-content-wrapper"
          style={{ height: containerHeight }}
          ref={containerRef}
        >
          <TransitionGroup className="equipment-content">
            <CSSTransition key={activeEquipment} classNames="fade" timeout={750}>
              {renderContent(equipmentContent[activeEquipment], activeEquipment, fade.type === "equipment" ? "fade-out" : "fade-in")}
            </CSSTransition>
          </TransitionGroup>
        </div>
      </section>
    </div>
  );
}

export default Equipment;