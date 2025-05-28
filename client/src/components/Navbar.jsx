import { Button } from "@/components/ui/button";
import github from "../public/github.png";
import linkedin from "../public/linkedin.png";
import gmail from "../public/gmail.png";

function Navbar({ toggleSection }) {
  return (
    <nav
      className="navbar px-4 py-3"
      style={{
        background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div className="d-flex align-items-center w-100">
        <a
          className="navbar-brand me-auto"
          href="#"
          style={{ textDecoration: "none" }}
        ></a>
        <ul className="navbar-nav ms-auto d-flex flex-row gap-3 align-items-center">
          <li className="nav-item">
            <a href="https://github.com/Ayush201738982361">
              <img
                src={github}
                alt="git"
                style={{
                  width: "40px",
                  height: "40px",
                  transition: "transform 0.3s",
                  cursor: "pointer",
                }}
                className="hover-scale"
              />
            </a>
          </li>
          <li className="nav-item">
            <a href="https://www.linkedin.com/in/ayush2o3/">
              <img
                src={linkedin}
                alt="linkedin"
                style={{
                  width: "42px",
                  height: "42px",
                  transition: "transform 0.3s",
                  cursor: "pointer",
                }}
                className="hover-scale"
              />
            </a>
          </li>
          <li className="nav-item">
            <a href="mailto:ayushnair87@gmail.com">
              <img
                src={gmail}
                alt="gmail"
                style={{
                  width: "38px",
                  height: "38px",
                  transition: "transform 0.3s",
                  cursor: "pointer",
                }}
                className="hover-scale"
              />
            </a>
          </li>

          <li className="nav-item">
            <Button
              onClick={toggleSection}
              style={{
                height: "40px",
                borderRadius: "8px",
                color: "white",
                fontWeight: "600",
                padding: "10px 20px",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
              className="hover-scale"
            >
              Contact Me
            </Button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
