import React from "react";
import "./Assignment_section2.css";
import img1 from "../../../Images/Assignment-sec2-img1.jpg";
import img2 from "../../../Images/LOR-s2img2.jpeg";
import { NavLink } from "react-router-dom";
const Assignment_section2 = () => {
  return (
    <>
      <div className="Assignment_s2-mainContainer">
        <div className="Assignment_s2-gridContainer">
          <div className="Assignment_s2-gridDiv1">
            <div className="Assignment_s2-gridDiv1-imgDiv">
              <img className="Assignment_s2-gridDiv1-img" src={img1} alt="" />
            </div>
            <div className="Assignment_s2-gridDiv1-Head">Assignment</div>
            <div className="Assignment_s2-gridDiv1-Text">
              We provide exceptional quality assignments as per the guidelines
              across various subjects. Our meticulously researched and
              thoughtfully planned assignments adhere to the specific reference
              requirements of each university. By entrusting us with your
              assignments, you can focus on other best parts of foreign country
              such as immersing yourself in rich culture and earning the dough.
            </div>
            <div className="Assignment_s2-gridDiv1-Text">
              Our skilled writers specialize in a wide range of subjects,
              ensuring top-notch assignment quality and 100% authentic
              information. Their proficiency in conducting comprehensive
              research on relevant topics sets us apart. Our extensive
              experience equips us with an understanding of the current
              assignment standards and the high expectations of universities.
              Among the many subjects we offer assignments in, here are a few
              examples:
            </div>
            {/* LIST 1 */}
            <div className="Assignment_s2-gridDiv1-listDiv">
              <div className="Assignment_s2-gridDiv1-listDiv-listItem">
                <b>A. Marketing</b>
              </div>
              <div className="Assignment_s2-gridDiv1-listDiv-listItem">
                <b>B. Accounts</b>
              </div>
              <div className="Assignment_s2-gridDiv1-listDiv-listItem">
                <b>C. Statistics</b>
              </div>
              <div className="Assignment_s2-gridDiv1-listDiv-listItem">
                <b>D. Finance</b>
              </div>
              <div className="Assignment_s2-gridDiv1-listDiv-listItem">
                <b>E. HR</b>
              </div>
              <div className="Assignment_s2-gridDiv1-listDiv-listItem">
                <b>F. IT</b>
              </div>
              <div className="Assignment_s2-gridDiv1-listDiv-listItem">
                <b>G. Math</b>
              </div>
              <div className="Assignment_s2-gridDiv1-listDiv-listItem">
                and many more
              </div>
            </div>
            <div className="Assignment_s2-gridDiv1-Text">
              Get your assignments drafted by us for
            </div>

            {/* LIST 2 */}
            <div className="Assignment_s2-gridDiv1-listDiv">
              <div className="Assignment_s2-gridDiv1-listDiv-listItem">
                <span class="material-symbols-outlined SOP-tick-svg">
                  check_circle
                </span>
                <b>Top-notch quality</b>
              </div>
              <div className="Assignment_s2-gridDiv1-listDiv-listItem">
                <span class="material-symbols-outlined SOP-tick-svg">
                  check_circle
                </span>
                <b>100% Authentic</b>
              </div>
              <div className="Assignment_s2-gridDiv1-listDiv-listItem">
                <span class="material-symbols-outlined SOP-tick-svg">
                  check_circle
                </span>
                <b>Thoroughly Researched</b>
              </div>
              <div className="Assignment_s2-gridDiv1-listDiv-listItem">
                <span class="material-symbols-outlined SOP-tick-svg">
                  check_circle
                </span>
                <b>Well Structured</b>
              </div>
              <div className="Assignment_s2-gridDiv1-listDiv-listItem">
                <span class="material-symbols-outlined SOP-tick-svg">
                  check_circle
                </span>
                <b>University Approved Standards</b>
              </div>
              <div className="Assignment_s2-gridDiv1-listDiv-listItem">
                <span class="material-symbols-outlined SOP-tick-svg">
                  check_circle
                </span>
                <b>Experienced and Well-informed Writers</b>
              </div>
            </div>
          </div>
          {/* DIV 2 */}
          <div className="Assignment_s2-gridDiv2">
            <div className="Assignment_s2-gridDiv2-mainContainer">
              <div className="Assignment_s2-gridDiv2-mainContainer-headContainer">
                <div className="Assignment_s2-gridDiv2-mainContainer-head">
                  Apply Now
                </div>
                <div className="Assignment_s2-gridDiv2-mainContainer-Text">
                  Please fill all your information correctly to get an idea
                  about your proper requirement.
                </div>
                <a href="/RegisterUser">
                  <div className="Assignment_s2-gridDiv2-mainContainer-button">
                    Assignment Form
                  </div>
                </a>
              </div>
            </div>
            <NavLink className="Navlink" to="/lor">
              <div className="Assignment_s2-gridDiv2-mainContainer-mainButton2">
                LOR: Letter of Recommendation
                <span class="material-symbols-outlined arrow-symbol-LOR">
                  chevron_right
                </span>
              </div>
            </NavLink>
            <NavLink className="Navlink" to="/assignment">
              <div className="Assignment_s2-gridDiv2-mainContainer-mainButton">
                Assignment
                <span class="material-symbols-outlined arrow-symbol-LOR2">
                  chevron_right
                </span>
              </div>
            </NavLink>
            <NavLink className="Navlink" to="/sop">
              <div className="Assignment_s2-gridDiv2-mainContainer-mainButton2">
                SOP: Statement of Purpose
                <span class="material-symbols-outlined arrow-symbol-LOR2">
                  chevron_right
                </span>
              </div>
            </NavLink>

            {/* <div className="Assignment_s2-gridDiv2-mainContainer-mainDiv2">
              <div className="Assignment_s2-gridDiv2-mainContainer-mainDiv2-imgDiv">
                <img
                  className="Assignment_s2-gridDiv2-mainContainer-mainDiv2-img"
                  src={img2}
                  alt=""
                />
                <div className="Assignment_s2-gridDiv2-mainContainer-mainDiv2-callIconDiv">
                  <span class="material-symbols-outlined LOR-callIcon">
                    call
                  </span>
                </div>
                <div className="Assignment_s2-gridDiv2-mainContainer-mainDiv2-Text">
                  Have any Questions? Call us Now !
                </div>
                <div className="Assignment_s2-gridDiv2-mainContainer-mainDiv2-Text2">
                  +91 70165 22535
                </div>
              </div>
            </div> */}

            <div className="Assignment_s2-gridDiv2-mainContainer-mainDiv2">
              <span class="material-symbols-outlined LOR-callIcon">call</span>
              <div className="Assignment_s2-gridDiv2-mainContainer-mainDiv2-Text">
                Have any Questions? Call us Now !
              </div>
              <div className="Assignment_s2-gridDiv2-mainContainer-mainDiv2-Text2">
                +91 70165 22535
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Assignment_section2;
