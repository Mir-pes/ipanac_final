import React, { useState } from "react";
import "./Navbar.css"; // Import the CSS file
import { Menu, X, InstagramIcon, LinkedinIcon, FacebookIcon, MapPin, Phone, Mail } from "lucide-react"; // Add MapPin, Phone, and Mail icons
import { Link } from "react-router-dom";
import img from "./assets/IpanacRelocationLogo.png";

function Navbar() {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
    const [showAddress, setShowAddress] = useState(false);
    const [showPhone, setShowPhone] = useState(false);
    const [showEmail, setShowEmail] = useState(false);

    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    };

    return (
        <nav className="navbar">
            <div className={`navbar-content ${mobileDrawerOpen ? 'mobileDrawerOpen' : ''}`}>
                {/* Logo and Title */}
                <div className="logo-container">
                    <div className="logo-wrapper">
                        <img className="logo" src={img} alt="IPANAC Relocation logo" />
                        {/* <Link to="/" className="title">IPANAC Relocation</Link> */}
                    </div>
                    <div className="mobile-menu-button">
                        <button onClick={toggleNavbar}>
                            {mobileDrawerOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>

                {/* Navigation Links */}
                <div className="nav-links">
                    <Link to="/about" className="nav-item">About Us</Link>
                    <Link to="/services" className="nav-item">Services</Link>
                    <Link to="/contact" className="nav-item">Contact Us</Link>
                </div>

                {/* Sign In & Register Buttons */}
                <div className="auth-buttons">
                    <Link to="/enquire" className="sign-in">Enquire</Link>
                    <Link to="/quickquote" className="register">Quick Quote</Link>
                </div>
            </div>

            <div className="container">
                {/* Contact Info Section */}
                <div className="contact-info">
                    <div className="contact-icons-wrapper">
                        <div className={`contact-item address-item ${showAddress ? 'moved' : ''}`}>
                            <MapPin
                                className="contact-icon-address"
                                size={20}
                                onClick={() => setShowAddress(!showAddress)}
                            />
                            {showAddress && (
                                <span className={`address ${showAddress ? 'show' : ''}`}>
                                    104 | Khalid Bin Al Waleed Building | Dubai | UAE
                                </span>
                            )}
                        </div>
                        <div className={`contact-item phone-item ${showPhone ? 'moved' : ''}`}>
                            <Phone
                                className="contact-icon"
                                size={20}
                                onClick={() => setShowPhone(!showPhone)}
                            />
                            {showPhone && (
                                <span className={`phone ${showPhone ? 'show' : ''}`}>
                                    +971-4-3272129
                                </span>
                            )}
                        </div>
                        <div className={`contact-item email-item ${showEmail ? 'moved' : ''}`}>
                            <Mail
                                className="contact-icon"
                                size={20}
                                onClick={() => setShowEmail(!showEmail)}
                            />
                            {showEmail && (
                                <span className={`emailid ${showEmail ? 'show' : ''}`}>
                                    relocation@ipanacllc.com
                                </span>
                            )}
                        </div>
                    </div>
                    <div className="email-and-social">
                        <div className="social-handles">
                            <a href="https://www.instagram.com/ipanacrelocation/" target="_blank" rel="noopener noreferrer">
                                <InstagramIcon className="social-icon" size={20} />
                            </a>
                            <a href="https://www.linkedin.com/company/ipanac-relocation/" target="_blank" rel="noopener noreferrer">
                                <LinkedinIcon className="social-icon" size={20} />
                            </a>
                            <a href="https://www.facebook.com/profile.php?id=61574697290210/" target="_blank" rel="noopener noreferrer">
                                <FacebookIcon className="social-icon" size={20} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
