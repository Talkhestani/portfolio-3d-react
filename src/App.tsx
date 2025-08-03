import Experiences from "./components/Experiences";
import About from "./components/sections/About";
import Footer from "./components/sections/Footer";
import Hero from "./components/sections/Hero";
import Navbar from "./components/sections/Navbar";
import Projects from "./components/sections/Projects";
import Testimonial from "./components/Testimonial";

function App() {
  return (
    <div className="container mx-auto max-w-7xl">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experiences />
      <Testimonial />
      <Footer />
    </div>
  )
}

export default App
