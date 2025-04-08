import { CheckCircle2 } from "lucide-react";
import Img from "./assets/src2.jpg";
import mission from "./assets/mission.png";
import { checklistItems } from "./constants";
import "./WhyChoose.css";
import { Link } from "react-router-dom";

function Workflow() {
  return (
    <div className="workflow-container">
      <div className="mission-container">
        <h3 className="statement-heading">
          Our Mission
        </h3>
        <div className="statement-container">
          <p className="statement-text">
            "At iPanac Relocation, we simplify the relocation journey by providing personalized, efficient, and reliable services. Our goal is to ensure a smooth transition for individuals and businesses, helping them settle with ease and confidence in their new home. Through expertise, dedication, and innovation, we make every move a positive experience."
          </p>
        </div>
      </div>

      <h2 className="workflow-heading">
        Why Choose
        <span className="gradient-text"> iPANAC?</span>
      </h2>
      
      <div style={{ 
        display: "flex", 
        flexDirection: "row", 
        alignItems: "flex-start", 
        gap: "40px", 
        margin: "40px 0"
      }}>
        <div style={{ flex: "1", maxWidth: "45%" }}>
          <img 
            src={Img} 
            alt="Relocation Services" 
            style={{ 
              width: "590px",
              height:"650px", 
              padding:"0 5px",
              borderRadius: "7px" 
            }} 
          />
        </div>
        
        <div style={{ flex: "1", maxWidth: "55%" }}>
          {checklistItems.map((item, index) => (
            <div className="checklist-item" key={index}>
              <div className="icon-wrapper">
                <CheckCircle2 size={20} />
              </div>
              <div className="item-content">
                <h4 className="item-content-title">
                  {item.title}
                </h4>
                <p className="item-content-description">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="vision-container">
        <h3 className="statement-heading">
          Our Vision
        </h3>
        <div className="statement-container">
          <p className="statement-text">
            "To be the leading global relocation partner, transforming the way people and businesses move by providing seamless, stress-free, and rewarding experiences. We envision a world where relocation is not a challenge but an opportunity—where individuals and organizations transition smoothly into new environments with confidence and ease. Through innovation, expertise, and personalized service, we aim to redefine global mobility, ensuring every move feels like a step toward a better future."
          </p>
        </div>
      </div>

      <div className="flash-message">
        
        For Free Survey and Quote -
      
        

        <Link to="/contact" className="contact-us">Contact Us</Link>
        
      </div>
    </div>
  );
}

export default Workflow;
