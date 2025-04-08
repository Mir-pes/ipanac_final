// Services.jsx
import React from "react";
import { FaGlobe, FaTruck, FaBox, FaWarehouse, FaPaw, FaBuilding } from "react-icons/fa";
import "./services.css"; // Import the CSS file

const services = [
  { title: "International Relocation", icon: <FaGlobe />, description: "Seamless international moving solutions tailored to your needs." },
  { title: "Local Relocation in the GCC", icon: <FaTruck />, description: "Effortless local moving services within the GCC region." },
  { title: "Packing & Unpacking Services", icon: <FaBox />, description: "Professional packing and unpacking services for your valuables." },
  { title: "Storage Solutions", icon: <FaWarehouse />, description: "Secure and flexible storage options for short or long-term needs." },
  { title: "Pet Relocation", icon: <FaPaw />, description: "Safe and stress-free pet relocation services." },
  { title: "Corporate Relocation", icon: <FaBuilding />, description: "Comprehensive office and business relocation services." },
];

function ServicesPage() {
  return (
    <div className="container">
      <h1 className="page-title">Our Services</h1>
      <p className="page-description">
        We offer top-tier relocation services, including international and local moves, packing, storage, and corporate solutions.
      </p>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h2 className="service-title">{service.title}</h2>
            <p className="service-description">{service.description}</p>
            <button className="button">Request a Free Consultation</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServicesPage;