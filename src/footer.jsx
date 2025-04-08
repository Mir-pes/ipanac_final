import { resourcesLinks, platformLinks, communityLinks } from "./constants";
import "./footer.css";

function Footer() {
    return (
        <div className="footer-container">
            <div className="footer-border"></div>
            <footer className="footer-content">
                <div className="footer-grid">
                    <div>
                        <h3 className="footer-heading">Explore</h3>
                        <ul className="footer-list">
                            {resourcesLinks.map((link, index) => (
                                <li key={index}>
                                    <a className="footer-link" href={link.href}>{link.text}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="footer-heading">Platform</h3>
                        <ul className="footer-list">
                            {platformLinks.map((link, index) => (
                                <li key={index}>
                                    <a className="footer-link" href={link.href}>{link.text}</a>
                                </li>
                            ))}
                        </ul>
                    </div>


                    <div>
                        <h3 className="footer-heading">Additional Services</h3>
                        <ul className="footer-list">
                            {communityLinks.map((link, index) => (
                                <li key={index}>
                                    <a className="footer-link" href={link.href}>{link.text}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
                <div className="copyright-section">
                    <p>© Copyright 2024 by ipanacrelocation.com</p>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
