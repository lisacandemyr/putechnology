import React, { useState } from "react";
import EquipmentOne from "./img/diagram.png";
import EquipmentTwo1 from "./img/equipment-2-1.png";
import EquipmentTwo2 from "./img/equipment-2-2.png";
import EquipmentTwo3 from "./img/equipment-2-3.png";
import EquipmentTwo4 from "./img/equipment-2-4.jpg";
import "./Equipment.css";
import "./App.css";

function Equipment() {
  const [activeEquipment, setActiveEquipment] = useState(1);

  const handleEquipmentClick = (equipmentNumber) => {
    setActiveEquipment(equipmentNumber);
  };

  return (
    <div className="Equipment">
      <section className="equipment" id="equipment">
        <div className="row">
            <button className={`col equipment-btn-1 ${activeEquipment === 1 ? 'active' : ''}`}
            onClick={() => handleEquipmentClick(1)}
          >SIPs Manufacturing Equipment</button>
            <button className={`col equipment-btn-2 ${activeEquipment === 2 ? 'active' : ''}`}
            onClick={() => handleEquipmentClick(2)}
          >RimStar Smart</button>
            <button className={`col equipment-btn-3 ${activeEquipment === 3 ? 'active' : ''}`}
            onClick={() => handleEquipmentClick(3)}
          >Presses & Jig Handling Systems</button>
            <button className={`col equipment-btn-4 ${activeEquipment === 4 ? 'active' : ''}`}
            onClick={() => handleEquipmentClick(4)}
          >Foam Dispensing Equipment</button>
            <button className={`col equipment-btn-5 ${activeEquipment === 5 ? 'active' : ''}`}
            onClick={() => handleEquipmentClick(5)}
          >Discontinuous Press Injection Process</button>
        </div>
        <div className={`equipment-1 ${activeEquipment === 1 ? '' : 'hidden'}`}>
          <h4>SIPs Manufacturing Equipment</h4>
          <p>
          <strong>We supply MMC and SIPs manufacturing equipment.</strong> Our partnership with <a href="https://www.kraussmaffei.com/en/home" target="_blank" rel="noreferrer">Krauss Maffei</a> and <a href="https://www.autorim.co.uk/" target="_blank" rel="noreferrer">AutoRIM technologies</a> ensures the full spectrum. From fully automated continuous lines to discontinuous panel technology. Therefore, we have hundreds of years of combined experience with our clients and partners. Our expertise and equipment are particularly applicable to Modern Methods of Construction, including SIPs panels. In addition, SIPs Off-Site manufacturing processes and equipment for residential, commercial, and industrial buildings. We’re here to help and guide you to the suitable equipment for your needs.
          <br />
          <br />
          SIPs buildings are more energy efficient and quieter. Furthermore, with the right know-how and machinery, their manufacture is more cost-effective than older technology systems. Hence their popularity for both Full Wall, roof panels, Volumetric, and Modular buildings over, for example, timber framing. As well as faster build, they give less air leakage, therefore, fewer drafts, fewer noise penetrations, and significantly lower energy bills and CO2 emissions.
          </p>
          <br />
         <div className="grid">
          <div className="grid-item-1">
          <h5>SIPs Manufacture</h5>
          <p>SIPs or Eco panels take the form of a rigid foam insulating core, sandwiched between two structural facings. The insulating core material is polyurethane (PUR), polyisocyanurate (PIR), or polystyrene (PS). Panels with a PUR/PIR core achieve the same U-value over a thinner cross-section than panels with a PS core. In addition, PUR typically transmits about 40% less heat for a given thickness. For example, at a U-value of 0.02 W/m²K, a SIP wall using PUR is about 50mm thinner than one using PS. The difference in internal floor space or plotting efficiency is significant to some clients. Ensure structural integrity with our advanced bonding technology. Our panels are designed to withstand structural loads, with the insulation core auto-adhesively bonded to the OSB facings for improved adhesion. Unlike other solutions that rely on glues used in a secondary process, our panels feature PUR foam that is injected in liquid form and expands to bond directly with the OSB under high pressure. This advanced approach sets us apart and guarantees reliable results.</p>
          </div>
          <div className="grid-item-2">
          <img src={EquipmentOne} alt="" />
          <img src="src/equipment-1-2.png" alt="" />
          </div>
         </div> 
        </div>
        <div className={`equipment-2 ${activeEquipment === 2 ? '' : 'hidden'}`}>
          <h4>RimStar Smart</h4>
         <div className="grid">
          <div className="grid-item-1">
          <p>
          <strong>PU Technology launches the RimStar Smart in the UK in conjunction with <a href="https://www.autorim.co.uk/" target="_blank" rel="noreferrer">AutoRIM</a>.</strong>
          <br />
          Maximize your PUR processing potential with RimStar Smart. Our reputation for reliability, top-quality components, and flexible systems is unmatched. Choose from our standard RimStar Smart or opt for our customised RimStar Plus solution, tailored to meet your specific needs.
          <br />
          <br />
          <strong>Basis for high standards</strong>
          <br />
          The RimStar Smart handles your daily challenges. Additionally, with options designed to meet the demands of your industry, you can customise the basic version to fit your specific needs. Choose from a variety of tank sizes, pumps, temperature regulation options, and proven mixing heads to match your unique requirements.</p>  
          <h5>Future-proof investment</h5>
          <p>The RimStar Smart is fit for digital production environments, a “smart” interface connects plant technology and also automation. Furthermore, the optional ClosedLoop control system of the output rate ensures optimum component quality. An additional RFID interface for mould recognition makes working extremely efficient. In addition thanks to SmartAssist, KraussMaffei provide quick and expert support if service becomes necessary – online or alternatively on-site.</p>
          <h5>Operate from wherever you want</h5>
          <p>Featuring a 12-inch glass touch display, the mobile HMI with castors offers flexibility in operation. Its cutting-edge design enables precise usage even when wearing thin gloves. With an IP 65 protection rating and a durable end-to-end glass panel, the panel is also highly resistant to scratches and chemicals. The user interface design is incredibly user-friendly, offering an intuitive experience. The menu screens present crucial parameters at a glance, while the customisable quick-access toolbar enhances daily productivity to a great extent. A control panel at the mixing head with a 4-inch colour touch display provides support in manual foaming processes, in addition, a shot time countdown ensures increased comfort and process control.
          </p>
          <h5>Space-saving and flexible</h5>
          <p>The RimStar Smart fits in any space. With a footprint of 4.8 m², the design of the metering machine is extremely compact. Furthermore, the optional swivelling mix head boom is extended as required. When installed on the hall floor, the perfect place for it is either in front of the machine or to the side.
          <br />
          <br />
          <strong>Your benefits:</strong>
          </p>
          <ul>
           <li>• Flexibility in process and production.</li>
           <li>• Low space requirements.</li>
           <li>• Premium-quality selection of mixing heads.</li>
           <li>• Matching components for long service life and high product quality.</li>
           <li>• Additional process data display right at the mixing head.</li>
           <li>• Mixhead boom that can be positioned as you please (optional).</li>
          </ul>
          <h5>Smart solutions for polyurethane professionals</h5>
          <p>It gives you maximum flexibility. Therefore, you’re always equipped to respond to your customers requirements and seize current market opportunities. This is possible thanks to premium-quality, ingeniously designed machine components and options that meet individual requirements. <a href="https://www.kraussmaffei.com/en/home" target="_blank" rel="noreferrer">KraussMaffei</a> quality and comprehensive consultation are the basis of long-term productivity, quality and efficiency and thus the basis of your economic success.
          <br />
          <br />
          <strong>The highlights at a glance:</strong>
          </p>
          <ul>
           <li>• Attractive price/performance ratio.</li>
           <li>• Low space requirements – metering machine footprint measures 4.8 m² only.</li>
           <li>• Intuitive operation at the mobile HMI.</li>
           <li>• Premium-quality selection of tried-and-test mixing heads and components.</li>
           <li>• Mixing head panel with additional process data display.</li>
           <li>• Smart options for requirements-based configuration.</li>
           <li>• Short delivery time.</li>
           <li>• <a href="https://www.kraussmaffei.com/en/home" target="_blank" rel="noreferrer">KraussMaffei</a> Service online and on-site.</li>
          </ul>
          </div>
          <div className="grid-item-2">
          <img src={EquipmentTwo1} className="img-fluid" alt="" />
          <img src={EquipmentTwo2} className="img-fluid" alt="" />
          <img src={EquipmentTwo3} className="img-fluid" alt="" />
          <img src={EquipmentTwo4} className="img-fluid" alt="" />
          </div>
         </div>
        </div>
        <div className={`equipment-3 ${activeEquipment === 3 ? '' : 'hidden'}`}>
          <h4>Presses and Jig Handling Systems</h4>
          <p>Our expertise supports the initial advice from <a href="https://www.autorim.co.uk/" target="_blank" rel="noreferrer">AutoRIM</a>, on permutations. Coordinate further detailed discussion on the output required, including type and size mix of product, space available and budget to facilitate firm proposals, costings and layouts for consideration. Experience ensures <a href="https://www.autorim.co.uk/" target="_blank" rel="noreferrer">AutoRIM</a> panel presses are designed and constructed for reliable service, whatever their design and specification. Similarly, their jig handling systems and preparation units are compatible, and the systems are carefully balanced, ensuring an optimum combination of production criteria.</p>
          <h5>Panel Jigs</h5>
          <p>Our expertise supports <a href="https://www.autorim.co.uk/" target="_blank" rel="noreferrer">AutoRIM</a>'s provision of a standard panel jig system, with quick delivery for the manufacture of cold rooms and building cladding or partitioning panels. Such systems comprise a jig frame assembly formed from a structural aluminium extrusion and produce panels having a tongued and grooved profile for good thermal integrity at the joint. The jigs can be supplied ready to accept the <a href="https://www.autorim.co.uk/" target="_blank" rel="noreferrer">AutoRIM</a> specially developed panel lock system, with the provision of eccentric over centre locators to secure the locks simply and effectively during the foaming process, and provide a quick means of release during the demould stage. Whilst two standard widths of extrusion are available, 80mm and 120mm, we advise on suitable intermediates that can be readily fabricated to suit particular requirements.
          </p>
        </div>
        <div className={`equipment-4 ${activeEquipment === 4 ? '' : 'hidden'}`}>
          <h4>Foam Dispensing Equipment</h4>
         <div className="grid">
          <div className="grid-item-1">
          <p>
          Polyurethane (PU) foam dispensing equipment is a critical component in PU production. That’s why we are proud to offer expert advice and support for two of the worlds leading independent providers of polyurethane metering and foam dispensing equipment – <a href="https://www.autorim.co.uk/" target="_blank" rel="noreferrer">AutoRIM</a> and <a href="https://www.kraussmaffei.com/en/home" target="_blank" rel="noreferrer">KraussMaffei</a>. Our partnerships with a network of agents, ensure that our customers receive top-quality service and support, including quick technical and spare parts assistance. Our unique partnership with <a href="https://www.autorim.co.uk/" target="_blank" rel="noreferrer">AutoRIM</a> and <a href="https://www.kraussmaffei.com/en/home" target="_blank" rel="noreferrer">KraussMaffei</a> provides our customers with access to a comprehensive range of high and low-pressure PU equipment, with outputs ranging from 7kg to 300kg per minute. This breadth of options ensures that our customers can find the best machine for their needs.
          <br />
          <br />
          With over 100 years of combined experience working with PU mixing technology, we help customers select the correct machine and operating technology for their specific production parameters. This multi-faceted approach and close liaison ensures that our customers receive the best possible solution for their PU foam production needs. We provide the most comprehensive service available in the polyurethane manufacturing industry. Providing the best combination of advice, a variety of equipment and also technical support equipment. Our polyurethane machine advice supports the <a href="https://www.autorim.co.uk/" target="_blank" rel="noreferrer">AutoRIM</a> and <a href="https://www.kraussmaffei.com/en/home" target="_blank" rel="noreferrer">KraussMaffei</a> Total Package Concept. These include supply contracts for chemical systems as well as facing materials to meet customers specifications.
          </p>
          </div>
          <div className="grid-item-2">
          <img src="https://mlpmwkbjwyqf.i.optimole.com/w:723/h:494/q:mauto/ig:avif/https://putechnology.com/wp-content/uploads/2024/03/Krauss-Maffei-injection.jpg" alt="" />  
          <img src="https://mlpmwkbjwyqf.i.optimole.com/w:337/h:495/q:mauto/ig:avif/https://putechnology.com/wp-content/uploads/2024/03/AR-injection.jpg" alt="" />
          </div>
         </div>    
        </div>
        <div className={`equipment-5 ${activeEquipment === 5 ? '' : 'hidden'}`}>
          <h4>Discontinuous Press Injection Process</h4>
          <p>
          Press injection process – for the manufacture of large quantities of standard products, installation of a normal or inverse laminator may be appropriate. However, where the output required cannot justify the high investment costs involved, for example; types of facing materials, when a variety of facing materials is used; when a multiplicity of panel thicknesses is needed; alternatively the need to incorporate mechanical fixing system within the panel. These factors make continuous laminator systems unsuitable. Therefore, the most effective alternative means of production is the increasingly popular Discontinuous Press Injection Process. To date, manufacturers employing this technique have been obliged to obtain the component parts of their production systems from several different sources. Therefore, running the risk that the resulting combination will be incompatible, inefficient, or simply unreliable. Working with <a href="https://www.autorim.co.uk/" target="_blank" rel="noreferrer">AutoRIM</a> together with <a href="https://www.kraussmaffei.com/en/home" target="_blank" rel="noreferrer">KraussMaffei</a>, we provide an integrated range of equipment, specifically designed and manufactured for PU and PIR composite panel manufacture. This gives the ability to supply complete turnkey plants from a single source, therefore fast and efficient technical back-up service through the world-wide resources of the <a href="https://www.autorim.co.uk/" target="_blank" rel="noreferrer">AutoRIM</a> and <a href="https://www.kraussmaffei.com/en/home" target="_blank" rel="noreferrer">KraussMaffei</a> Groups.
          <br />
          <br />
          <strong>The range of equipment and supplies available includes:</strong>
          </p>
          <ul>
           <li>• <a href="https://www.kraussmaffei.com/en/home" target="_blank" rel="noreferrer">KraussMaffei</a> High Pressure and <a href="https://www.autorim.co.uk/" target="_blank" rel="noreferrer">AutoRIM</a> Low-Pressure Polyurethane Foam Metering machines.</li>
           <li>• Hydraulically powered single and multi-daylight panel presses, side or end feed, with specifications including powered infeed and outfeed drives, guarding and also heating.</li>
           <li>• Mechanical drive parallel-acting presses.</li>
           <li>• Simple mechanical manually clamped 'oyster' presses.</li>
           <li>• Jig Preparation Tables.</li>
           <li>• Jig Transfer Tables.</li>
           <li>• Hydraulic Scissor Lift Tables for multi-daylight press applications.</li>
           <li>• Jig infeed and outfeed tables, jig return conveyors, all with powered drive options.</li>
           <li>• Standard jig system incorporating a panel lock system for 'off the shelf' manufacture of cold-room and building panels.</li>
           <li>• Panel lock supplies.</li>
           <li>• Design and fabrication of purpose-made jig systems for any application.</li>
           <li>• Extract and ventilation equipment.</li>
           <li>• Raw materials handling equipment.</li>
           <li>• Chemical systems and facing material supplies.</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Equipment;



