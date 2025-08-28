// import "./Hero.css"

const Hero = ({ title, currentPage }) => {
  return (
    <div className="hero">
      <div className="hero-bg"><div className="hero-overlay"></div></div>
      <div className="hero-content">
        <h1 className="hero-title">{title}</h1>
        <div className="breadcrumb">
          <a href="#" className="breadcrumb-link">Home</a>
          <span>/</span>
          <span className="breadcrumb-current">{currentPage}</span>
        </div>
      </div>
    </div>
  )
}

export default Hero
