import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./component/Navbar";
import HomePage from "./component/Home";
import AboutPage from "./component/About";
import SkillsSection from "./component/Skills";
import ProjectsSection from "./component/Project";
import ExperiencePage from "./component/Experience";
import ContactPage from "./component/Contact";
import Footer from "./component/Footer";



function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar/>
      <HomePage/>
      <AboutPage/>
      <ExperiencePage/>
      <ProjectsSection/>                  
      <SkillsSection/>
      <ContactPage/>
      <Footer/>
    </>
  );
}

export default App;
