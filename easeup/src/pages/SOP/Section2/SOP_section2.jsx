import React from "react";
import img1 from "../../../Images/SOP-s2-img1.jpg";
import img2 from "../../../Images/LOR-s2img2.jpeg";
import "./SOP_section2.css";
import { NavLink } from "react-router-dom";
const SOP_section2 = () => {
  return (
    <>
      <div className="SOP_s2-mainContainer">
        <div className="SOP_s2-gridContainer">
          <div className="SOP_s2-gridDiv1">
            <div className="SOP_s2-gridDiv1-imgDiv">
              <img className="SOP_s2-gridDiv1-img" src={img1} alt="" />
            </div>
            <div className="SOP_s2-gridDiv1-Head">
              SOP: Statement of Purpose
            </div>
            <div className="SOP_s2-gridDiv1-Text">
              The Statement of Purpose is a critical document that articulates
              your motivations and qualifications, demonstrating why you are the
              ideal candidate and deserving of consideration. It plays a pivotal
              role in your acceptance to a program, visa, or scholarship. A
              well-crafted Statement of Purpose can significantly improve
              chances of getting approved as in most cases, it is the only
              opportunity to interact with the admissions committee.
            </div>
            <div className="SOP_s2-gridDiv1-Head2">Why Choose us?</div>
            <div className="SOP_s2-gridDiv1-listDiv">
              <div className="SOP_s2-gridDiv1-listDiv-listItem">
                <span class="material-symbols-outlined SOP-tick-svg">
                  check_circle
                </span>
                <b>Over 5 years of experience</b>
              </div>
              <div className="SOP_s2-gridDiv1-listDiv-listItem">
                <span class="material-symbols-outlined SOP-tick-svg">
                  check_circle
                </span>
                <b>Helped over 6000 students specifically for SOPs</b>
              </div>
              <div className="SOP_s2-gridDiv1-listDiv-listItem">
                <span class="material-symbols-outlined SOP-tick-svg">
                  check_circle
                </span>
                <b>
                  We know the major reasons of rejection and how to address them
                </b>
              </div>
              <div className="SOP_s2-gridDiv1-listDiv-listItem">
                <span class="material-symbols-outlined SOP-tick-svg">
                  check_circle
                </span>
                <b>
                  We have a team which has cross-functional domain knowledge so
                  even if you are switching the courses, we have got you covered
                </b>
              </div>
              {/* <div className="SOP_s2-gridDiv1-listDiv-listItem">
                <span class="material-symbols-outlined SOP-tick-svg">
                  check_circle
                </span>
                <b>Professional Quality</b>
              </div> */}
              {/* <div className="SOP_s2-gridDiv1-listDiv-listItem">
                <span class="material-symbols-outlined SOP-tick-svg">
                  check_circle
                </span>
                <b>Drafted in impeccable English</b>
              </div> */}
            </div>
            <div className="SOP_s2-gridDiv1-Text">
              There are various kinds of Statement of Purpose that cater to your
              needs
            </div>
            <div className="SOP_s2-gridDiv1-head-Text">
              1. Student Visa SOP:{" "}
            </div>
            <div className="SOP_s2-gridDiv1-Text">
              A Student Visa Statement of Purpose (SOP) is a vital document that
              highlights an applicant's motivation, background, and suitability
              to study in a foreign country. It helps visa officers assess the
              applicant's genuine intention to study abroad and return to their
              home country after completing their education. A persuasive SOP
              can significantly increase the chances of obtaining the student
              visa, allowing the individual to pursue their educational goals in
              a new environment.
              <br />
              <b>Rates: ₹2000/- | US$ 45.00</b> 
            </div>
            <div className="SOP_s2-gridDiv1-head-Text">
              2. Tourist Visa SOP (2000):{" "}
            </div>
            <div className="SOP_s2-gridDiv1-Text">
              A Tourist Visa Statement of Purpose (SOP) is an essential document
              that outlines an applicant's intentions and reasons for visiting a
              foreign country for leisure purposes. It helps visa officers
              evaluate the applicant's credibility, financial stability, and
              commitment to returning to their home country after the trip. A
              well-structured and convincing SOP plays a crucial role in
              securing a tourist visa, enabling applicants to explore new
              destinations and immerse themselves in unique cultural
              experiences.
              <br />
              <b>Rates: ₹2500/- | US$ 35.00</b> 
            </div>
            <div className="SOP_s2-gridDiv1-head-Text">3. Spouse Visa SOP</div>
            <div className="SOP_s2-gridDiv1-Text">
              A Spouse Visa Statement of Purpose (SOP) is a critical document
              that explains an applicant's motivation and rationale for joining
              their partner in a foreign country. It assists visa officers in
              determining the genuineness of the relationship, the couple's
              commitment to each other, and the applicant's intentions upon
              arrival. A compelling and authentic SOP is crucial in obtaining a
              spouse visa, allowing married partners to unite and live together
              in their new home country.
              <br />
              <b>Rates: ₹2000/- | US$ 35.00</b> 
            </div>
            <div className="SOP_s2-gridDiv1-head-Text">4. Scholarship SOP</div>
            <div className="SOP_s2-gridDiv1-Text">
              A Scholarship Statement of Purpose (SOP) is an important document
              that presents an applicant's motivation, academic achievements,
              and suitability for a specific scholarship program. It enables the
              scholarship committee to assess the applicant's potential and
              dedication to their chosen field of study..
              <br />
              <b>Rates: ₹1500/- | US$ 35.00 </b> 
            </div>
            <div className="SOP_s2-gridDiv1-head-Text">5. College SOP</div>
            <div className="SOP_s2-gridDiv1-Text">
              A University Statement of Purpose (SOP) is a key document that
              outlines an applicant's motivation, academic background, and
              qualifications for pursuing a particular course or program at a
              university. It allows the admissions committee to evaluate the
              candidate's fit and potential contributions to the university
              community.
              <br />
              <b>Rates: ₹2000/- | US$ 35.00</b> 
            </div>
            <div className="SOP_s2-gridDiv1-head-Text">
              6. Justification letter
            </div>
            <div className="SOP_s2-gridDiv1-Text">
              A Justification Letter is a formal document written to address and
              clarify the reasons for the rejection. The letter aims to provide
              additional information and evidence to support the applicant's
              case, demonstrating their genuine intentions to study abroad and
              return to their home country after completing their education. A
              well-structured and persuasive Justification Letter can
              potentially sway the visa officer's decision and help the
              applicant secure their student visa to pursue their academic
              goals.
              <br />
              <b>Rates: ₹2500/- | US$ 35.00</b> 
            </div>
          </div>
          <div className="SOP_s2-gridDiv2">
            <div className="SOP_s2-gridDiv2-mainContainer">
              <div className="SOP_s2-gridDiv2-mainContainer-headContainer">
                <div className="SOP_s2-gridDiv2-mainContainer-head">
                  Get your sop today
                </div>
                <div className="SOP_s2-gridDiv2-mainContainer-Text">
                  Please give as much information as you can to ensure that the
                  draft is personalised and reflects your personality
                </div>
                <a href="/RegisterUser">
                  <div className="SOP_s2-gridDiv2-mainContainer-button">
                    SOP FORM
                  </div>
                </a>
              </div>
            </div>
            <NavLink className="Navlink" to="/lor">
              <div className="SOP_s2-gridDiv2-mainContainer-mainButton2">
                LOR: Letter of Recommendation
                <span class="material-symbols-outlined arrow-symbol-LOR">
                  chevron_right
                </span>
              </div>
            </NavLink>
            <NavLink className="Navlink" to="/assignment">
              <div className="SOP_s2-gridDiv2-mainContainer-mainButton2">
                Assignment
                <span class="material-symbols-outlined arrow-symbol-LOR2">
                  chevron_right
                </span>
              </div>
            </NavLink>
            <NavLink className="Navlink" to="/sop">
              <div className="SOP_s2-gridDiv2-mainContainer-mainButton">
                SOP: Statement of Purpose
                <span class="material-symbols-outlined arrow-symbol-LOR2">
                  chevron_right
                </span>
              </div>
            </NavLink>
            {/* <div className="SOP_s2-gridDiv2-mainContainer-mainDiv2">
              <div className="SOP_s2-gridDiv2-mainContainer-mainDiv2-imgDiv">
                <img
                  className="SOP_s2-gridDiv2-mainContainer-mainDiv2-img"
                  src={img2}
                  alt=""
                />
                <div className="SOP_s2-gridDiv2-mainContainer-mainDiv2-callIconDiv">
                  <span class="material-symbols-outlined LOR-callIcon">
                    call
                  </span>
                </div>
                <div className="SOP_s2-gridDiv2-mainContainer-mainDiv2-Text">
                  Have any Questions? Call us Now !
                </div>
                <div className="SOP_s2-gridDiv2-mainContainer-mainDiv2-Text2">
                  +91 70165 22535
                </div>
              </div>
            </div> */}

            <div className="Assignment_s2-gridDiv2-mainContainer-mainDiv2">
              <span class="material-symbols-outlined LOR-callIcon">call</span>
              <div className="Assignment_s2-gridDiv2-mainContainer-mainDiv2-Text SOP_contact1">
                Have any Questions? Call us Now !
              </div>
              <div className="Assignment_s2-gridDiv2-mainContainer-mainDiv2-Text2 SOP_contact2">
                +91 70165 22535
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SOP_section2;
