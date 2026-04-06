import "./styles/style.css";
import Navbar from "./components/nav-bar";
import HeroSection from "./components/herosection";
import Features from "./components/Features";
import Testimonials from "./components/testimonials";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Features />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;