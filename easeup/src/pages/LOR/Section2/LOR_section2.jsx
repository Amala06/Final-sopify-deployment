import React from "react";
import "./LOR_section2.css";
import img1 from "../../../Images/LOR-s2img1.jpg";
import img2 from "../../../Images/LOR-s2img2.jpeg";
import { NavLink } from "react-router-dom";

const LOR_section2 = () => {
  return (
    <>
      <div className="LOR_s2-mainContainer">
        <div className="LOR_s2-gridContainer">
          <div className="LOR_s2-gridDiv1">
            <div className="LOR_s2-gridDiv1-imgDiv">
              <img className="LOR_s2-gridDiv1-img" src={img1} alt="" />
            </div>
            <div className="LOR_s2-gridDiv1-Head">
              LOR: Letter Of Recommendation
            </div>
            <div className="LOR_s2-gridDiv1-Text">
              A Letter of Recommendation serves as a valuable supplement to your
              Statement of Purpose. It fortifies your application by offering
              insights into your achievements, projects, and personal
              attributes. Authenticated by teachers, professors, mentors, or
              managers, a Letter of Recommendation is applicable for both
              educational and professional pursuits. A well-crafted LOR
              effectively showcases your performance, accomplishments, and
              strengths, accurately reflecting your true capabilities. We
              specialize in drafting professional LORs that emphasize your
              unique qualities.
            </div>
            <div className="LOR_s2-gridDiv1-Text">
              Occasionally, teachers may struggle to articulate a student's
              accomplishments; our expertise ensures your achievements are
              effectively communicated.
            </div>
            <div className="LOR_s2-gridDiv1-head-Text">
              1. Academic Letter of Recommendation
            </div>
            <div className="LOR_s2-gridDiv1-Text">
              An Acedemic Letter of Recommendation (LoR) is a document that
              highlights a student's academic accomplishments, skills, and
              personal traits. Written by teachers, professors, or academic
              mentors, it serves as a testament to the student's capabilities
              and potential. The Educational LoR is commonly required during
              university admissions, scholarship applications, or academic
              program enrollment, and plays a crucial role in strengthening the
              applicant's profile and increasing their chances of acceptance.
              <br />
              <b>Rates: ₹1000/- | US$ 15.00</b> 
            </div>
            <div className="LOR_s2-gridDiv1-head-Text">
              2. Professional Letter Of Recommendation
            </div>
            <div className="LOR_s2-gridDiv1-Text">
              A Professional Letter of Recommendation (LoR) is a document that
              showcases an individual's work-related achievements, skills, and
              personal qualities. Authored by supervisors, managers, or
              colleagues, it attests to the individual's professional competence
              and potential. The Professional LoR is often required during job
              applications, promotions, admission in foreign Universities or
              even career development opportunities. It plays a key role in
              reinforcing the applicant's professional credibility and
              increasing their likelihood of success.
              <br />
              <b>Rates: ₹1000/- | US$ 15.00 </b> 
            </div>
          </div>
          <div className="LOR_s2-gridDiv2">
            <div className="LOR_s2-gridDiv2-mainContainer">
              <div className="LOR_s2-gridDiv2-mainContainer-headContainer">
                <div className="LOR_s2-gridDiv2-mainContainer-head">
                  Apply Now
                </div>
                <div className="LOR_s2-gridDiv2-mainContainer-Text">
                  Please fill all your information correctly to get an idea
                  about your proper requirement.
                </div>
                <div className="LOR_s2-gridDiv2-mainContainer-Text">
                  Chose from the below buttons to choose your LOR type Academic
                  or Professional
                </div>
                {/* <div className="LOR_s2-gridDiv2-mainContainer-button">
                  <div className="LOR_s2-gridDiv2-mainContainer-button-span1">
                    Academic
                  </div>
                  <div className="LOR_s2-gridDiv2-mainContainer-button-span2">
                    Professional
                  </div>
                </div> */}
                {/* <a href="/RegisterUser">
                  <div className="SOP_s2-gridDiv2-mainContainer-button lor_s2_button">
                    LOR FORM
                  </div>
                </a> */}
              </div>
            </div>
            <NavLink className="Navlink" to="/lor">
              <div className="LOR_s2-gridDiv2-mainContainer-mainButton">
                LOR: Letter of Recommendation
                <span class="material-symbols-outlined arrow-symbol-LOR">
                  chevron_right
                </span>
              </div>
            </NavLink>
            <NavLink className="Navlink" to="/assignment">
              <div className="LOR_s2-gridDiv2-mainContainer-mainButton2">
                Assignment
                <span class="material-symbols-outlined arrow-symbol-LOR2">
                  chevron_right
                </span>
              </div>
            </NavLink>
            <NavLink className="Navlink" to="/sop">
              <div className="LOR_s2-gridDiv2-mainContainer-mainButton2">
                SOP: Statement of Purpose
                <span class="material-symbols-outlined arrow-symbol-LOR2">
                  chevron_right
                </span>
              </div>
            </NavLink>
            {/* <div className="LOR_s2-gridDiv2-mainContainer-mainDiv2">
              <div className="LOR_s2-gridDiv2-mainContainer-mainDiv2-imgDiv">
                
                <img
                  className="LOR_s2-gridDiv2-mainContainer-mainDiv2-img"
                  src={img2}
                  alt=""
                />
                <div className="LOR_s2-gridDiv2-mainContainer-mainDiv2-callIconDiv">
                <span class="material-symbols-outlined LOR-callIcon" >call</span>
                </div>
                <div className="LOR_s2-gridDiv2-mainContainer-mainDiv2-Text">
                  Have any Questions?  Call us Now !
                </div>
                <div className="LOR_s2-gridDiv2-mainContainer-mainDiv2-Text2">
                +91 70165 22535
                </div>
              </div>
            </div> */}
            <div className="LOR_s2-gridDiv2-mainContainer-mainDiv2">
              <span class="material-symbols-outlined LOR-callIcon">call</span>
              <div className="LOR_s2-gridDiv2-mainContainer-mainDiv2-Text">
                Have any Questions? Call us Now !
              </div>
              <div className="LOR_s2-gridDiv2-mainContainer-mainDiv2-Text2">
                +91 70165 22535
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LOR_section2;
