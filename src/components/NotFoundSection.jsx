// import "./NotFoundSection.css"
import Button from "./Button"

const NotFoundSection = () => {
  return (
    <div className="not-found-section">
      <div className="not-found-container">
        {/* Illustration */}
        <div className="illustration">
          <div className="illustration-circle">
            <svg className="mountains" viewBox="0 0 320 320" fill="none">
              <path d="M50 200 L100 150 L150 180 L200 140 L250 160 L300 120 L320 130 L320 320 L0 320 L0 210 Z" fill="#10b981" opacity="0.3" />
              <path d="M0 220 L80 180 L140 200 L200 160 L280 180 L320 160 L320 320 L0 320 Z" fill="#059669" opacity="0.4" />
            </svg>
            <div className="tree tree-1"><div className="tree-top"></div><div className="tree-trunk"></div></div>
            <div className="tree tree-2"><div className="tree-top tree-top-large"></div><div className="tree-trunk"></div></div>
            <div className="tree tree-3"><div className="tree-top tree-top-small"></div><div className="tree-trunk tree-trunk-small"></div></div>
            <div className="cloud cloud-1"></div><div className="cloud cloud-2"></div><div className="cloud cloud-3"></div>
            <div className="error-text">404</div>
          </div>
        </div>

        {/* Content */}
        <h2 className="not-found-title">Ohh! Page Not Found</h2>
        <p className="not-found-description">
          We're sorry, but we can't seem to find the page you requested.
        </p>
        <Button className="back-home-btn">Back To Home</Button>
      </div>
    </div>
  )
}

export default NotFoundSection
