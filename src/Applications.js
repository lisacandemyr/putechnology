import React from 'react';
import ApplicationOne from "./img/application-1.png";
import ApplicationTwo from "./img/application-2.png";
import ApplicationThree from "./img/application-3.png";
import ApplicationFour from "./img/application-4.png";
import './Applications.css';

const applicationsData = [
  {
    img: ApplicationOne,
    title: "Building Systems",
    items: [
      "Modern methods of construction",
      "Low and zero carbon solutions",
      "PassivHaus solutions",
      "Low Global Warming Potential (GWP) solutions",
      "Structurally insulated panels (SIPs)",
      "Timber frame closed panel building systems",
      "Innovative hybrid building systems"
    ]
  },
  {
    img: ApplicationTwo,
    title: "Construction Solutions",
    items: [
      "Stressed skin panels",
      "Metal faced cladding panels",
      "Modular offsite construction",
      "Prefabricated Prefinished Volumetric Construction (PPVC)"
    ]
  },
  {
    img: ApplicationThree,
    title: "Garden Leisure Buildings",
    items: [
      "Garden offices",
      "Garden studios",
      "Log cabins",
      "Garden leisure buildings",
      "Quick assembly disaster recovery shelters"
    ]
  },
  {
    img: ApplicationFour,
    title: "Advanced Applications",
    items: [
      "Cold store panels and doors",
      "Rotational moulding",
      "Deep sea flotation and buoyancy",
      "Insulated pipelines",
      "Hot water storage",
      "District heating",
      "Pentane and Liquid Blowing Agent (LBA) introduction including solstice"
    ]
  }
];

function Applications() {
  return (
    <div className="Applications">
      <section className="applications fade-in" id="applications">
        <h4 className="text-center">PU Insulation Applications</h4>
        <p className="description text-center">
          Our PU consultant team of senior industry specialists have extensive experience in processing all types of polyurethane chemicals and PU systems. We cover all applications, specialising in the processing of PU insulation-grade foams used in SIPs construction, transport, cold storage, insulated pipelines, domestic refrigeration and deep sea buoyancy. <strong>Our consultants provide impartial and independent advice in the following fields:</strong>
        </p>
        <div className="grid">
          {applicationsData.map((application, index) => (
            <div key={index} className={`grid-item grid-item-${index + 1} card-article`}>
              <img src={application.img} className="card-img" alt={application.title} />
              <div className="card-data">
                <h2 className="card-title">{application.title}</h2>
                <ul>
                  {application.items.map((item, idx) => (
                    <li key={idx}>• {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Applications;