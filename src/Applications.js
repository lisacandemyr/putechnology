import React from 'react';
import ApplicationOne from "./img/application-1.png";
import ApplicationTwo from "./img/application-2.png";
import ApplicationThree from "./img/application-3.png";
import ApplicationFour from "./img/application-4.png";
import './Applications.css';


function Applications() {
  return (
    <div className="Applications">
      <section className="applications" id="applications">
        <h4 className="text-center">Polyurethane Insulation Applications</h4>
        <p className="description text-center">
          Our PU consultant team of senior industry specialists have extensive experience in processing all types of polyurethane chemicals and PU systems. We cover all applications, specialising in the processing of PU insulation-grade foams used in SIPs construction, transport, cold storage, insulated pipelines, domestic refrigeration and deep sea buoyancy. <strong>Our consultants provide impartial and independent advice in the following fields:</strong>
        </p>
        <div className="grid">
          <div className="grid-item grid-item-1 card-article">
            <img src={ApplicationOne} className="card-img" alt="" />

            <div className="card-data">
              <h2 className="card-title">Building Systems</h2>
              <ul>
                <li>• Modern methods of construction</li>
                <li>• Low and zero carbon solutions</li>
                <li>• PassivHaus solutions</li>
                <li>• Low Global Warming Potential (GWP) solutions</li>
                <li>• Structurally insulated panels (SIPs)</li>
                <li>• Timber frame closed panel building systems</li>
                <li>• Innovative hybrid building systems</li>
              </ul>
            </div>
          </div>
          <div className="grid-item grid-item-2 card-article">
            <img src={ApplicationTwo} className="card-img" alt="" />

            <div className="card-data">
              <h2 className="card-title">Construction Solutions</h2>
              <ul>
                <li>• Stressed skin panels</li>
                <li>• Metal faced cladding panels</li>
                <li>• Modular offsite construction</li>
                <li>• Prefabricated Prefinished Volumetric Construction (PPVC)</li>
              </ul>
            </div>
          </div>
          <div className="grid-item grid-item-3 card-article">
            <img src={ApplicationThree} className="card-img" alt="" />
            
            <div className="card-data">
              <h2 className="card-title">Garden Leisure Buildings</h2>
              <ul>
                <li>• Garden offices</li>
                <li>• Garden studios</li>
                <li>• Log cabins</li>
                <li>• Garden leisure buildings</li>
                <li>• Quick assembly disaster recovery shelters</li>
              </ul>
            </div>
          </div>
          <div className="grid-item grid-item-4 card-article">
            <img src={ApplicationFour} className="card-img" alt="" />

            <div className="card-data">
              <h2 className="card-title">Advanced Applications</h2>
              <ul>
                <li>• Cold store panels and doors</li>
                <li>• Rotational moulding</li>
                <li>• Deep sea flotation and buoyancy</li>
                <li>• Insulated pipelines</li>
                <li>• Hot water storage</li>
                <li>• District heating</li>
                <li>• Pentane and Liquid Blowing Agent (LBA) introduction including solstice</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Applications;