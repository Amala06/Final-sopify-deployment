import React from "react";
import "./service_section2.css";
import img1 from "../../../Images/Service-s2-img1.jpg";
import img2 from "../../../Images/Service-s2-img2.png";
import img3 from "../../../Images/Service-s2-img3.png";
import { NavLink } from "react-router-dom";

const Service_section2 = () => {
  return (
    <>
      <div className="serivce_s2_mainContainer">
        <div className="serivce_s2_gridContainer">
          {/* DIV 1 */}
          {/* <NavLink */}
          <div className="serivce_s2_gridDiv">
            <div className="serivce_s2_gridDiv_imgDiv">
              <img className="serivce_s2_gridDiv_img" src={img1} alt="" />
            </div>
            <div className="serivce_s2_gridDiv_textDiv">
              <div className="serivce_s2_gridDiv_textDiv_head">SOP</div>
              <div className="serivce_s2_gridDiv_textDiv_text">
                Statement of Purpose: We craft customized, authentic Statements
                of Purpose for various academic and immigration needs including
                but not limited to Student Visa SOP, Spouse SOP, Tourist Visa
                SOP, Justification letter
              </div>
            </div>
          </div>

          {/* DIV 2 */}
          <div className="serivce_s2_gridDiv">
            <div className="serivce_s2_gridDiv_imgDiv">
              <img className="serivce_s2_gridDiv_img" src={img2} alt="" />
            </div>
            <div className="serivce_s2_gridDiv_textDiv">
              <div className="serivce_s2_gridDiv_textDiv_head">LOR</div>
              <div className="serivce_s2_gridDiv_textDiv_text">
                Letter of Recommendation: We provide content which you can get
                it signed from your seniors at work place or mentors from your
                alma-mater.
              </div>
            </div>
          </div>

          {/* DIV 3 */}
          <div className="serivce_s2_gridDiv">
            <div className="serivce_s2_gridDiv_imgDiv">
              <img className="serivce_s2_gridDiv_img" src={img3} alt="" />
            </div>
            <div className="serivce_s2_gridDiv_textDiv">
              <div className="serivce_s2_gridDiv_textDiv_head">Assignmnets</div>
              <div className="serivce_s2_gridDiv_textDiv_text">
                University Assignments: If you are feeling overwhelmed with
                daunting assignment requirements, fret not as we have got your
                back.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service_section2;
