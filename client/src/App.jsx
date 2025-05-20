import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import EducationTimeline from "./components/EducationTimeline";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Form from "./components/Form";
import { useState, useRef } from "react";
import "./App.css";

function App() {
  const [section, renderSection] = useState(false);
  const formRef = useRef(null);

  const toggleSection = () => {
    renderSection((prev) => !prev);

    if (!section && formRef.current) {
      formRef.current.scrollIntoView({ behavior: "auto" });
    }
  };

  return (
    <>
      <Navbar toggleSection={toggleSection} />
      <AboutMe />
      <EducationTimeline />
      <Skills />
      <Projects />
      <div ref={formRef}>
        <Form></Form>
      </div>
    </>
  );
}

export default App;
