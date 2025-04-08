import React from 'react';
import './about.css';
import aboutimg from "./assets/about.png";
import { Globe, Lock, Package, Shield, Brain, ArrowUpCircle, HandshakeIcon, Clock } from "lucide-react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="about-page">
        <div className="about">
          <h3 className="statement-heading">
            About iPANAC
          </h3>
          
          <p>iPANAC Relocation is a part of iPANAC consultancy LLC FZ:</p>

          <h6>We serve our clients in the following domains:</h6>
          <div className="domain-links">
            <a href="https://IPANACllc.com/" className="domain-link">iPANAC Immigration</a>
            <a href="https://IPANACaccounting.com/" className="domain-link">iPANAC Accounting & Tax</a>
            <a className="domain-link">iPANAC Relocation</a>
          </div>
          <br></br>
          <h3 className = "statement-heading">iPANAC Relocation</h3>
          <br></br>

          <div className="start-content">
            At iPANAC Relocation, we believe that moving to a new location should be an exciting journey, not a stressful one.
            <br></br>
            <br></br>
            Our mission is to provide a seamless and hassle-free relocation experience for individuals, families, and businesses looking to establish themselves in a new location.
              
            <div className="image-container">
              <img src={aboutimg} className="image"/>
            </div>
          </div>

{/*         <div className="Work-container">
          <div className="Work">
            How We Work With <br></br>Our Clients

            <Link to="/contact" className="contact">Contact Us</Link>
          </div>
          </div> */}

        {/* <div className="Clients">
          <div className="Client-content">
          <span>
            <span className="content">
            With expertise in immigration, visa processing, accounting, and anti-money laundering compliance,</span>
            <br></br>
            <span className="end-end">we offer end-to-end solutions that simplify the transition process. </span>
              <br></br>
              <br></br>
            Whether you're seeking a work permit, permanent residency, or business setup assistance, our team is <span className="end-end1">committed to guiding you every step of the way.</span>
          </span>
          </div>
        </div> */}

        <div className="story-container">
          <h3 className="statement-heading1">
            Our Story – Professional Serives with Personal Touch
          </h3>
          <div className="story-content">
            iPANAC Relocation was founded with a simple yet powerful vision: to make relocation effortless and stress-free.
            <br></br> 
            We understand that moving to a new location comes with uncertainties—finding a home, understanding legal requirements, 
            <br></br>
            and adapting to a new environment. 
            <br></br>
            Having personally experienced the challenges of relocation, our founders saw a 
            need for a trustworthy, client-centric service , assembling together a team which collectively consists of an experience over 20 years in relocation service,that prioritizes transparency,efficiency,and personalized care.
            <br></br>
            At iPANAC Relocation, we don’t just offer services—we build relationships. Our team takes the time to understand your goals, provide tailored solutions, and ensure that your journey is smooth and successful.
            <br></br>
            Whether you are an aspiring professional, an international student, or a business looking to expand, we are here to turn your relocation dreams into reality.
          </div>
        </div>

        <div className="our-core-values">
          <h2 className="statement-heading">Our Core Values</h2>
          <p className="values-subtitle">Our values shape the culture of our organization and define the character of our company.</p>
          
          <div className="values-grid">
            <div className="value-card">
              <div className="icon-container">
                <Package className="value-icon"/>
              </div>
              <h3>Customer-Centric Approach</h3>
              <p>We put our clients first, ensuring personalized and hassle-free relocation experiences tailored to their needs.</p>
            </div>
            
            <div className="value-card">
              <div className="icon-container">
                <Lock className="value-icon" />
              </div>
              <h3>Integrity & Transparency</h3>
              <p>Honesty and trust are at the heart of our services. We operate with full transparency, ensuring our clients feel informed and confident at every step.</p>
            </div>
            
            <div className="value-card">
              <div className="icon-container">
                <ArrowUpCircle className="value-icon" />
              </div>
              <h3>Excellence & Efficiency</h3>
              <p>We are committed to delivering top-quality relocation services with precision, professionalism, and attention to detail.</p>
            </div>
            
            <div className="value-card">
              <div className="icon-container">
                <Brain className="value-icon" />
              </div>
              <h3>Innovation & Adaptability</h3>
              <p>The relocation industry is ever-changing, and we embrace new technologies and processes to provide modern, efficient, and seamless solutions.</p>
            </div>
            
            <div className="value-card">
              <div className="icon-container">
                <Globe className="value-icon" />
              </div>
              <h3>Global Mindset</h3>
              <p>With a deep understanding of international relocation challenges, we bridge cultures and make global transitions easier for individuals and businesses.</p>
            </div>
            
            <div className="value-card">
              <div className="icon-container">
                <Clock className="value-icon" />
              </div>
              <h3>Reliability & Commitment</h3>
              <p>We are dedicated to delivering on our promises, ensuring smooth and stress-free relocations every time.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
