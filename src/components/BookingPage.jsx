import { useState, useEffect } from "react";
import "../App.css";

const BookingPage = () => {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    roomType: "",
    roomSize: "",
    checkIn: "",
    checkOut: "",
    message: ""
  });
  const [submitStatus, setSubmitStatus] = useState({ loading: false, error: null, success: false });

  useEffect(() => {
    fetchHotels();
  }, []);

  const fetchHotels = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/hotels');
      if (!response.ok) {
        throw new Error('Failed to fetch hotels');
      }
      const data = await response.json();
      setHotels(data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus({ loading: true, error: null, success: false });

    try {
      const response = await fetch('http://localhost:5000/api/appointments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Failed to submit appointment');
      }

      setSubmitStatus({ loading: false, error: null, success: true });
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        roomType: "",
        roomSize: "",
        checkIn: "",
        checkOut: "",
        message: ""
      });
    } catch (err) {
      setSubmitStatus({ loading: false, error: err.message, success: false });
    }
  };

  return (
    <div>
      {/* Booking Form Section */}
      <section className="booking-form-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">STAY WITH US</span>
            <h2>Make An Appointment</h2>
          </div>

          <div className="booking-content">
            <form className="booking-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>First Name</label>
                  <input 
                    type="text" 
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="Ex. first name" 
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input 
                    type="text" 
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Ex. last name" 
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Email</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Ex. info@domain.com" 
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input 
                    type="tel" 
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    placeholder="Ex. (+1) 987 654 3210" 
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Select Type</label>
                  <select 
                    name="roomType"
                    value={formData.roomType}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select Type</option>
                    <option value="Deluxe">Deluxe Room</option>
                    <option value="Junior">Junior Room</option>
                    <option value="Family">Family Room</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Select Room</label>
                  <select 
                    name="roomSize"
                    value={formData.roomSize}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select Room</option>
                    <option value="Single">Single Room</option>
                    <option value="Double">Double Room</option>
                    <option value="Suite">Suite</option>
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Check In</label>
                  <input 
                    type="date" 
                    name="checkIn"
                    value={formData.checkIn}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Check Out</label>
                  <input 
                    type="date" 
                    name="checkOut"
                    value={formData.checkOut}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Message</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Ex. type message" 
                  rows={4}
                />
              </div>

              {submitStatus.success && (
                <div className="success-message">
                  Appointment booked successfully!
                </div>
              )}

              {submitStatus.error && (
                <div className="error-message">
                  Error: {submitStatus.error}
                </div>
              )}

              <button 
                className="book-appointment-btn" 
                type="submit"
                disabled={submitStatus.loading}
              >
                {submitStatus.loading ? "Booking..." : "Book Appointment"}
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
            </form>

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
            {loading ? (
              <p>Loading rooms...</p>
            ) : error ? (
              <p>Error: {error}</p>
            ) : (
              hotels.map((hotel) => (
                <div className="room-card" key={hotel._id}>
                  <div className="room-image">
                    <img
                      src={hotel.imageUrl || "/luxury-hotel-room-with-pool-view.png"}
                      alt={hotel.name}
                    />
                    <span className="price-tag">${hotel.pricePerNight} / Night</span>
                  </div>
                  <div className="room-content">
                    <h3>{hotel.name}</h3>
                    <div className="room-features">
                      <span className="feature">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                          <path d="M8 7c.5 0 .9-.4.9-.9S8.5 5.2 8 5.2s-.9.4-.9.9S7.5 7 8 7zm0 .9c-.6 0-1.8.3-1.8.9v.7h3.6v-.7c0-.6-1.2-.9-1.8-.9z" />
                        </svg>
                        {hotel.guests} Guests
                      </span>
                      <span className="feature">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                          <path d="M2 6h12v6H2V6zm1 1v4h10V7H3z" />
                        </svg>
                        {hotel.beds} {hotel.beds === 1 ? 'Bed' : 'Beds'}
                      </span>
                      <span className="feature">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                          <path d="M3 3h10v10H3V3zm1 1v8h8V4H4z" />
                        </svg>
                        {hotel.baths} Bath
                      </span>
                    </div>
                    <p>{hotel.description}</p>
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
              ))
            )}
          </div>
        </div>
      </section>

      {/* <Footer /> */}
    </div>
  );
};

export default BookingPage;
