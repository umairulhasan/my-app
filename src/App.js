import "./App.css"
import Header from "./components/Header"
import Hero from "./components/Hero"
import NotFoundSection from "./components/NotFoundSection"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <NotFoundSection />
      <Footer />
    </div>
  )
}

export default App
