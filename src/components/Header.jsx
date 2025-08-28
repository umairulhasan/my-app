// import "./Header.css"
import { Search, Menu, Phone, MapPin, Mail, Facebook, Twitter, Instagram } from "lucide-react"
import Button from "./Button"
import { Link } from "react-router-dom"
const Header = () => {
  return (
    <div className="header">
      {/* Top bar */}
      <div className="top-bar">
        <div className="container">
          <div className="top-bar-content">
            <div className="contact-info">
              <div className="contact-item"><MapPin className="icon" /><span>7631 Sabina Park, 115 Devon Isle, USA</span></div>
              <div className="contact-item"><Mail className="icon" /><span>info@domain.com</span></div>
            </div>
            <div className="contact-item"><Phone className="icon" /><span>(+1) 987 654 3210</span></div>
            <div className="social-icons">
              <Facebook className="social-icon" />
              <Twitter className="social-icon" />
              <Instagram className="social-icon" />
              <div className="behance-icon">Be</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="main-header">
        <div className="container">
          <div className="header-content">
            <div className="logo">
              <div className="logo-icon"><div className="logo-square"></div></div>
              <span className="logo-text">Fixyland</span>
            </div>

            <nav className="nav">
              <a href="#" className="nav-link">Home <span className="dropdown-arrow">▼</span></a>
              <a href="#" className="nav-link">Pages <span className="dropdown-arrow">▼</span></a>
              <a href="#" className="nav-link">Rooms & Suites <span className="dropdown-arrow">▼</span></a>
              <a href="#" className="nav-link">Services <span className="dropdown-arrow">▼</span></a>
              <a href="#" className="nav-link">Blog <span className="dropdown-arrow">▼</span></a>
              {/* <a href="#" className="nav-link">Contact</a> */}
               <Link to="/about" className="nav-link">Contact</Link>
            </nav>

            <div className="header-actions">
              <Button variant="ghost" size="icon"><Search className="icon" /></Button>
              <Button variant="ghost" size="icon" className="mobile-menu"><Menu className="icon" /></Button>
              {/* <Button className="book-btn">Book Your Stay →</Button> */}
              <Link to="/booking">
        <button className="book-btn">Book Your Stay</button>
      </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
