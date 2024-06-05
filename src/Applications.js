import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Applications.css';


function Applications() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1095,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  


      return (
        <div className="Applications hidden">
          <section className="applications" id="applications">
            <h4 className="text-center">Polyurethane Insulation Applications</h4>
            <p className="description text-center">Our PU consultant team of senior industry specialists have extensive experience in processing all types of polyurethane chemicals and PU systems. We cover all applications, specialising in the processing of PU insulation-grade foams used in SIPs construction, transport, cold storage, insulated pipelines, domestic refrigeration and deep sea buoyancy. <strong>Our consultants provide impartial and independent advice in the following fields:</strong></p>
            <Slider {...settings}>
              <div className="grid-item grid-item-1">
                <div>
                  <img src="src/application-1.png" alt="" />
                </div>
                <ul className="text-center">
                  <li>Modern methods of construction</li>
                  <li>Low and zero carbon solutions</li>
                  <li>PassivHaus solutions</li>
                  <li>Low Global Warming Potential (GWP) solutions</li>
                  <li>Structurally insulated panels (SIPs)</li>
                  <li>Timber frame closed panel building systems</li>
                </ul>
              </div>
              <div className="grid-item grid-item-2">
                <div>
                  <img src="src/application-2.png" alt="" />
                </div>
                <ul className="text-center">
                  <li>Innovative hybrid building systems</li>
                  <li>Stressed skin panels</li>
                  <li>Metal faced cladding panels</li>
                  <li>Modular offsite construction</li>
                  <li>Prefabricated Prefinished Volumetric Construction (PPVC)</li>
                </ul>
              </div>
              <div className="grid-item grid-item-3">
                <div>
                  <img src="src/application-3.png" alt="" />
                </div>
                <ul className="text-center">
                  <li>Garden offices</li>
                  <li>Garden studios</li>
                  <li>Log cabins</li>
                  <li>Garden leisure buildings</li>
                  <li>Quick assembly disaster recovery shelters</li>
                </ul>
              </div>
              <div className="grid-item grid-item-4">
                <div>
                  <img src="src/application-4.png" alt="" />
                </div>
                <ul className="text-center">
                  <li>Cold store panels and doors</li>
                </ul>
              </div>
              <div className="grid-item grid-item-5">
                <div>
                  <img src="src/application-5.png" alt="" />
                </div>
                <ul className="text-center">
                  <li>Metal faced panel</li>
                </ul>
              </div>
              <div className="grid-item grid-item-6">
                <div>
                  <img src="src/application-6.png" alt="" />
                </div>
                <ul className="text-center">
                  <li>Rotational moulding</li>
                  <li>Deep sea flotation and buoyancy</li>
                </ul>
              </div>
              <div className="grid-item grid-item-7">
                <div>
                  <img src="src/application-7.png" alt="" />
                </div>
                <ul className="text-center">
                  <li>Insulated pipelines</li>
                  <li>Hot water storage</li>
                  <li>District heating</li>
                </ul>
              </div>
              <div className="grid-item grid-item-8">
                <div>
                  <img src="src/application-8.png" alt="" />
                </div>
                <ul className="text-center">
                  <li>Pentane and Liquid Blowing Agent (LBA) introduction including solstice</li>
                </ul>
              </div>
            </Slider>
          </section>
        </div>
      );
    }
    
    export default Applications;