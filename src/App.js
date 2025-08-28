import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import NotFoundSection from "./components/NotFoundSection";
import Footer from "./components/Footer";
import BookingPage from "./components/BookingPage";
import AboutPage from "./components/AboutPage";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero title="404 Error" currentPage="Error" />
                <NotFoundSection />
              </>
            }
          />
          <Route
            path="/booking"
            element={
              <>
                <Hero title="Booking" currentPage="Booking" />
                <BookingPage />
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <Hero title="About Us" currentPage="About" />
                <AboutPage />
              </>
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
