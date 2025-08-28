// import "./Hero.css"

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-bg"><div className="hero-overlay"></div></div>
      <div className="hero-content">
        <h1 className="hero-title">404 Error</h1>
        <div className="breadcrumb">
          <a href="#" className="breadcrumb-link">Home</a>
          <span>/</span>
          <span className="breadcrumb-current">Error</span>
        </div>
      </div>
    </div>
  )
}

export default Hero
