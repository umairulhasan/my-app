// import "./Footer.css"
import { Facebook, Twitter, Instagram } from "lucide-react"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Company Info */}
          <div className="footer-section">
            <div className="footer-logo">
              <div className="logo-icon">
                <div className="logo-square"></div>
              </div>
              <span className="logo-text">Fixyland</span>
            </div>
            <p className="footer-description">
              Nam libero tempore cum soluta nobis eligendi optio cumque nihil impedit quo minus maxime placeat facere
            </p>
            <div className="social-links">
              <Facebook className="social-icon" />
              <Twitter className="social-icon" />
              <Instagram className="social-icon" />
              <div className="behance-icon">Be</div>
            </div>
          </div>

          {/* Explore */}
          <div className="footer-section">
            <h3 className="footer-title">EXPLORE</h3>
            <div className="footer-links">
              <a href="#" className="footer-link">About Hotel</a>
              <a href="#" className="footer-link">Pricing</a>
              <a href="#" className="footer-link">Hotel Staff</a>
              <a href="#" className="footer-link">Latest News</a>
              <a href="#" className="footer-link">Contact Us</a>
            </div>
          </div>

          {/* Contact */}
          <div className="footer-section">
            <h3 className="footer-title">CONTACT</h3>
            <div className="footer-contact">
              <div className="contact-text">7631 Sabina Park, 115 Devon Isle, Louisiana, USA</div>
              <div className="contact-text">(+1) 987 654 3210</div>
              <div className="contact-text">info@domain.com</div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="footer-section">
            <h3 className="footer-title">NEWSLETTER</h3>
            <div className="newsletter">
              <div className="newsletter-input-wrapper">
                <input
                  type="email"
                  placeholder="Ex. info@domain.com"
                  className="newsletter-input"
                />
                <button className="newsletter-send">→</button>
              </div>
              <div className="newsletter-checkbox">
                <input type="checkbox" id="newsletter-consent" />
                <label htmlFor="newsletter-consent" className="checkbox-text">
                  I agree to all terms and policies
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="footer-bottom">
          <div className="copyright">
            © Copyright 2025 Fixyland. All Rights Reserved.
          </div>
          <div className="footer-bottom-links">
            <a href="#" className="footer-bottom-link">Terms and Conditions</a>
            <a href="#" className="footer-bottom-link">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
