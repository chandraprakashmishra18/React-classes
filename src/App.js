import "./styles/style.css";
import Navbar from "./components/nav-bar";
import HeroSection from "./components/herosection";
import Features from "./components/Features";
import Testimonials from "./components/testimonials";
import Footer from "./components/footer";
import Parent from "./propsPassing/Parent";
import Child from "./propsPassing/Child";

function App() {
  return (
    <>
      {/* <Navbar />
      <HeroSection />
      <Features />
      <Testimonials />
      <Footer /> */}
      <Parent/>
      <Child/>
    </>
  );
}

export default App;