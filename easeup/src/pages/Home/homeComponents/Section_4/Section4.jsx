import React from "react";
import "./section4.css";

const Section4 = () => {
  return (
    <>
      <div className="s4-mainContainer">
        <div className="s4-headDiv">
          <div className="s4-headDiv-mainText">Why Choose Us?</div>
          <div className="s4-headDiv-Text">
            We understand your unique needs and priorities. Through close
            consultation, we gain deep insights into your objectives and what
            you want to achieve. We tailor our services and solutions based on
            your needs and goals.
          </div>
        </div>
        <div className="s4-div2">
          <div className="s4-div2-grid">
            {/* div 1 */}
            <div className="s4-div2-grid_div1">
              <span
                class="material-symbols-outlined s4-icon"
                style={{ color: "#d82f30" }}
              >
                verified_user
              </span>
              <div className="div-text">Plagiarism free content</div>
              <div className="div-text2">
                We provide genuine, customized content that is crafted entirely
                by our proficient writers from scratch.
              </div>
            </div>

            {/* div 2 */}
            <div className="s4-div2-grid_div1">
              <span
                class="material-symbols-outlined s4-icon"
                style={{ color: "#d82f30" }}
              >
                draft
              </span>
              <div className="div-text">Dmain Specific Writers</div>
              <div className="div-text2">
                Our team of specialized writers guarantees the production of
                materials with precise and pertinent technical details.
              </div>
            </div>

            {/* div 3 */}
            <div className="s4-div2-grid_div1">
              <span
                class="material-symbols-outlined s4-icon"
                style={{ color: "#d82f30" }}
              >
                local_shipping
              </span>
              <div className="div-text">Fast Delivery</div>
              <div className="div-text2">
                We can provide you the documents in merely 24 hours if required.
              </div>
            </div>

            {/* div 4 */}
            <div className="s4-div2-grid_div1">
              <span
                class="material-symbols-outlined s4-icon"
                style={{ color: "#d82f30" }}
              >
                published_with_changes
              </span>
              <div className="div-text">Personalisation</div>
              <div className="div-text2">
                Once we give you the draft, we do changes as per your inputs to
                further personalize the sop.
              </div>
            </div>
            {/* div 5 */}
            <div className="s4-div2-grid_div1">
              <span
                class="material-symbols-outlined s4-icon"
                style={{ color: "#d82f30" }}
              >
                badge
              </span>
              <div className="div-text">Professional Quality</div>
              <div className="div-text2">
                We provide content crafted by domain experts, ensuring that each
                draft is composed by experts in their respective fields.
              </div>
            </div>

            {/* div 6 */}
            <div className="s4-div2-grid_div1">
              <span
                class="material-symbols-outlined s4-icon"
                style={{ color: "#d82f30" }}
              >
                drive_file_rename_outline
              </span>
              <div className="div-text">Flawless Writing</div>
              <div className="div-text2">
                Impeccable English drafts undergo meticulous proofreading and
                quality assessment for exceptional linguistic precision before
                delivery.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section4;
