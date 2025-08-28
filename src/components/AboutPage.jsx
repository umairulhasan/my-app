import {
  Search,
  Menu,
  Phone,
  MapPin,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  ChevronDown,
  Send,
  Play,
  Utensils,
} from "lucide-react"
import Hero from "./Hero"

const AboutPage = () => {
  return (
    <div className="about-page">
      {/* Header */}
      
<Hero />
      

      {/* Outdoor Activities Section */}
      <section className="outdoor-activities">
        <div className="container">
          <div className="content-wrapper">
            <div className="text-content">
              <div className="section-label">LUXURY HOTEL</div>
              <h2>We Provide Outdoor Activities To All Visitors</h2>
              <p>
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                alteration in some form, by injected humour, or randomised words which don't look even.
              </p>

              <div className="features">
                <div className="feature-item">
                  <div className="feature-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M3 12h18m-9-9v18" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  </div>
                  <div className="feature-content">
                    <h4>The Best Swimming Pool</h4>
                    <p>
                      It is a long fact that a reader will be distracted by the readable content of a page when looking
                      at its layout.
                    </p>
                  </div>
                </div>

                <div className="feature-item">
                  <div className="feature-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
                      <path d="M12 1v6m0 6v6" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  </div>
                  <div className="feature-content">
                    <h4>The Best Stationary Bike</h4>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                  </div>
                </div>
              </div>

              <button className="discover-btn">Discover More</button>
            </div>

            <div className="image-content">
              <div className="image-collage">
                <img src="/luxury-hotel-outdoor-activities.png" alt="Outdoor Activities" />
                <div className="restaurant-card">
                  <Utensils size={32} />
                  <h4>Restaurants</h4>
                  <p>Dorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis facilisis nunc.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="statistics-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">305 +</div>
              <div className="stat-label">Luxury Rooms</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">650 +</div>
              <div className="stat-label">Regular Guests</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">80 +</div>
              <div className="stat-label">Team Member</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">75 +</div>
              <div className="stat-label">Beaches</div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills-section">
        <div className="container">
          <div className="content-wrapper">
            <div className="text-content">
              <div className="section-label">OUR SKILLS</div>
              <h2>Why Choose for us?</h2>
              <p>
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                alteration in some form, by injected humour, or randomised words which don't look even.
              </p>

              <div className="skills-list">
                <div className="skill-item">
                  <div className="skill-header">
                    <span>Chef Master</span>
                    <span>96%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: "96%" }}></div>
                  </div>
                </div>

                <div className="skill-item">
                  <div className="skill-header">
                    <span>Design</span>
                    <span>92%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: "92%" }}></div>
                  </div>
                </div>

                <div className="skill-item">
                  <div className="skill-header">
                    <span>IT Solution</span>
                    <span>88%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: "88%" }}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="image-content">
              <div className="skills-images">
                <img src="/tropical-beach-resort.png" alt="Beach Resort" />
                <img src="/luxury-beach-cabana.png" alt="Beach Cabana" className="small-image" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="video-section">
        <div className="container">
          <div className="section-header">
            <div className="section-label">AMAZING EXPERIENCE</div>
            <h2>Relax And Enjoy With Our Hotel & Resort</h2>
          </div>

          <div className="video-player">
            <button className="play-button">
              <Play size={24} fill="currentColor" />
            </button>
          </div>
        </div>
      </section>

      {/* Expert Staff Section */}
      <section className="expert-staff">
        <div className="container">
          <div className="section-header">
            <div className="section-label">FIXYLAND STAFF</div>
            <h2>Expert Staff Persons</h2>
          </div>

          <div className="staff-grid">
            <div className="staff-card">
              <img src="/professional-chef-with-apron.png" alt="Michael Dean" />
              <div className="staff-info">
                <h4>Michael Dean</h4>
                <p>Chef Master</p>
              </div>
            </div>
            <div className="staff-card">
              <img src="/professional-hotel-manager-in-suit.png" alt="Arnold Taylor" />
              <div className="staff-info">
                <h4>Arnold Taylor</h4>
                <p>Room Owner</p>
              </div>
            </div>
            <div className="staff-card">
              <img src="/assistant-chef-in-kitchen-uniform.png" alt="Michael Dean" />
              <div className="staff-info">
                <h4>Michael Dean</h4>
                <p>Assistant Chef</p>
              </div>
            </div>
            <div className="staff-card">
              <img src="/hotel-supervisor-in-professional-attire.png" alt="Michael Dean" />
              <div className="staff-info">
                <h4>Michael Dean</h4>
                <p>Supervisor</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Clients Section */}
      <section className="global-clients">
        <div className="container">
          <div className="section-header">
            <div className="section-label">OUR CLIENTS</div>
            <h2>We Have More Than 150+ Global Clients</h2>
          </div>

          <div className="clients-logos">
            <div className="client-logo">
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                <circle cx="30" cy="30" r="25" stroke="#666" strokeWidth="2" />
                <path d="M20 30h20M30 20v20" stroke="#666" strokeWidth="2" />
              </svg>
            </div>
            <div className="client-logo">
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                <rect x="15" y="15" width="30" height="30" stroke="#666" strokeWidth="2" />
                <circle cx="30" cy="30" r="8" fill="#666" />
              </svg>
            </div>
            <div className="client-logo">
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                <path d="M15 45L30 15L45 45H15Z" stroke="#666" strokeWidth="2" />
                <circle cx="30" cy="35" r="5" fill="#666" />
              </svg>
            </div>
            <div className="client-logo">
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                <circle cx="30" cy="30" r="20" stroke="#666" strokeWidth="2" />
                <rect x="25" y="25" width="10" height="10" fill="#666" />
              </svg>
            </div>
            <div className="client-logo">
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                <path d="M15 30L30 15L45 30L30 45L15 30Z" stroke="#666" strokeWidth="2" />
              </svg>
            </div>
            <div className="client-logo">
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                <ellipse cx="30" cy="30" rx="20" ry="15" stroke="#666" strokeWidth="2" />
                <line x1="15" y1="30" x2="45" y2="30" stroke="#666" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      

   
    </div>
  )
}

export default AboutPage
