
import "../App.css";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";

// Custom Behance icon component
const BehanceIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z" />
  </svg>
);

const BookingPage = () => {
  return (
    <div>
      {/* <Header /> */}
      <Hero />

   {/* Booking Form Section */}
      <section className="booking-form-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">STAY WITH US</span>
            <h2>Make An Appointment</h2>
          </div>

          <div className="booking-content">
            <div className="booking-form">
              <div className="form-row">
                <div className="form-group">
                  <label>First Name</label>
                  <input type="text" placeholder="Ex. first name" />
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input type="text" placeholder="Ex. last name" />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" placeholder="Ex. info@domain.com" />
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input type="tel" placeholder="Ex. (+1) 987 654 3210" />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Select Type</label>
                  <select>
                    <option>Select Type</option>
                    <option>Deluxe Room</option>
                    <option>Junior Room</option>
                    <option>Family Room</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Select Room</label>
                  <select>
                    <option>Select Type</option>
                    <option>Single Room</option>
                    <option>Double Room</option>
                    <option>Suite</option>
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Check In</label>
                  <input type="date" placeholder="Select date" />
                </div>
                <div className="form-group">
                  <label>Check Out</label>
                  <input type="date" placeholder="Select date" />
                </div>
              </div>

              <div className="form-group">
                <label>Message</label>
                <textarea placeholder="Ex. type message" rows={4}></textarea>
              </div>

              <button className="book-appointment-btn">
                Book Appointment
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M6 12l6-6-6-6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>

            <div className="contact-card">
              <div className="contact-image">
                <img
                  src="/luxury-hotel-room-interior-with-modern-furniture.png"
                  alt="Contact"
                />
              </div>
              <div className="contact-info">
                <h3>(+1) 987 654 3210</h3>
                <p>Mon-Fri: 7:00 am - 3:00 pm</p>
                <p>24/7 Service Available</p>
                <button className="call-now-btn">
                  Call Us Now
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M6 12l6-6-6-6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Luxury Rooms Section */}
      <section className="luxury-rooms">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">OUR BEST ROOMS</span>
            <h2>Luxury Rooms and Resort</h2>
          </div>

          <div className="rooms-grid">
            <div className="room-card">
              <div className="room-image">
                <img
                  src="/luxury-hotel-room-with-pool-view.png"
                  alt="Deluxe Room"
                />
                <span className="price-tag">$800 / Night</span>
              </div>
              <div className="room-content">
                <h3>Deluxe Rooms</h3>
                <div className="room-features">
                  <span className="feature">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                    >
                      <path d="M8 7c.5 0 .9-.4.9-.9S8.5 5.2 8 5.2s-.9.4-.9.9S7.5 7 8 7zm0 .9c-.6 0-1.8.3-1.8.9v.7h3.6v-.7c0-.6-1.2-.9-1.8-.9z" />
                    </svg>
                    2 Guests
                  </span>
                  <span className="feature">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                    >
                      <path d="M2 6h12v6H2V6zm1 1v4h10V7H3z" />
                    </svg>
                    1 Bed
                  </span>
                  <span className="feature">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                    >
                      <path d="M3 3h10v10H3V3zm1 1v8h8V4H4z" />
                    </svg>
                    1 Bath
                  </span>
                </div>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered.
                </p>
                <button className="read-more-btn">
                  Read More
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M6 12l6-6-6-6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="room-card">
              <div className="room-image">
                <img
                  src="/modern-hotel-bedroom-with-city-view.png"
                  alt="Junior Room"
                />
                <span className="price-tag">$500 / Night</span>
              </div>
              <div className="room-content">
                <h3>Junior Rooms</h3>
                <div className="room-features">
                  <span className="feature">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                    >
                      <path d="M8 7c.5 0 .9-.4.9-.9S8.5 5.2 8 5.2s-.9.4-.9.9S7.5 7 8 7zm0 .9c-.6 0-1.8.3-1.8.9v.7h3.6v-.7c0-.6-1.2-.9-1.8-.9z" />
                    </svg>
                    2 Guests
                  </span>
                  <span className="feature">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                    >
                      <path d="M2 6h12v6H2V6zm1 1v4h10V7H3z" />
                    </svg>
                    2 Beds
                  </span>
                  <span className="feature">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                    >
                      <path d="M3 3h10v10H3V3zm1 1v8h8V4H4z" />
                    </svg>
                    1 Bath
                  </span>
                </div>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered.
                </p>
                <button className="read-more-btn">
                  Read More
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M6 12l6-6-6-6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="room-card">
              <div className="room-image">
                <img
                  src="/spacious-family-hotel-room-with-balcony.png"
                  alt="Family Room"
                />
                <span className="price-tag">$900 / Night</span>
              </div>
              <div className="room-content">
                <h3>Family Rooms</h3>
                <div className="room-features">
                  <span className="feature">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                    >
                      <path d="M8 7c.5 0 .9-.4.9-.9S8.5 5.2 8 5.2s-.9.4-.9.9S7.5 7 8 7zm0 .9c-.6 0-1.8.3-1.8.9v.7h3.6v-.7c0-.6-1.2-.9-1.8-.9z" />
                    </svg>
                    4 Guests
                  </span>
                  <span className="feature">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                    >
                      <path d="M2 6h12v6H2V6zm1 1v4h10V7H3z" />
                    </svg>
                    2 Beds
                  </span>
                  <span className="feature">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                    >
                      <path d="M3 3h10v10H3V3zm1 1v8h8V4H4z" />
                    </svg>
                    1 Bath
                  </span>
                </div>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered.
                </p>
                <button className="read-more-btn">
                  Read More
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M6 12l6-6-6-6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

   
      

      {/* <Footer /> */}
    </div>
  );
};

export default BookingPage;
