import { useState, useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import EducationTimeline from "./components/EducationTimeline";
import Skill from "./components/Skill";
import Projects from "./components/Projects";
import Form from "./components/Form";
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
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar toggleSection={toggleSection} />
                <AboutMe />
                <EducationTimeline />
                <Skill />
                <Projects />
                <div ref={formRef}>
                  <Form></Form>
                </div>
              </>
            }
          />
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
