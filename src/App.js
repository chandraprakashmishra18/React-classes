import "./styles/style.css";
import Navbar from "./components/nav-bar";
import HeroSection from "./components/herosection";
import Features from "./components/Features";
import Testimonials from "./components/testimonials";
import Footer from "./components/footer";
import Parent from "./propsPassing/Parent";
import Child from "./propsPassing/Child";
import UseStateOne from "./Hooks/UseStateOne";
import MultiCounter from "./Hooks/MultiCounter";
import DarkLightTheme from "./Hooks/DarkLightTheme";
import FormInput from "./Hooks/FormInput";
import ShowHide from "./Hooks/ShowHide";
import ToDoList from "./Hooks/ToDoList";


function App() {
  return (
    <>
      {/* <Navbar />
      <HeroSection />
      <Features />
      <Testimonials />
      <Footer /> */}
      {/* <Parent/>
      <Child/> */}
      {/* <UseStateOne/> */}
      {/* <MultiCounter/> */}
      <DarkLightTheme/>
      <FormInput/>
      <ShowHide/>
      <ToDoList/>

    </>
  );
}


// function App() {
//   const isLoggedIn = false;
//   return(
//     <div>
//       {isLoggedIn ? <h1>Welcome User </h1> : <h1>Please Login </h1>}
//     </div>
//   )
// }
export default App;