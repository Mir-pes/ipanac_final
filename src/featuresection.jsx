import { features } from "./constants";
import "./FeatureSection.css";

function FeatureSection() {
  return (
    <div className="feature-section">
      <div className="feature-container">
        <span className="service-badge">
          Our Services
        </span>
        
        <h2 className="heading">
          Easily transit from 
          <span className="gradient-text">
            {" "}one Location to another
          </span>
        </h2>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-item">
              <div className="flex">
                <div className="icon-container">
                  {feature.icon}
                </div>
              </div>
              <h5 className="feature-title">{feature.text}</h5>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FeatureSection;
