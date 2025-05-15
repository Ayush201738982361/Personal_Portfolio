import { TypingAnimation } from "@/components/magicui/typing-animation";
import { Button } from "@/components/ui/button";
import github from "../public/github.png";
import linkedin from "../public/linkedin.png";
import gmail from "../public/gmail.png";

function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark px-4">
      <div className="d-flex align-items-center w-100">
        <a className="navbar-brand me-auto" href="#">
          <TypingAnimation
            style={{ fontSize: "2rem", color: "#FEBA17", fontFamily: "roboto" }}
          >
            Hi I am Ayush
          </TypingAnimation>
        </a>
        <ul className="navbar-nav ms-auto d-flex flex-row gap-3">
          <li className="nav-item">
            <img
              src={github}
              alt="git"
              style={{ width: "70px", height: "70px" }}
            />
          </li>
          <li className="nav-item">
            <img
              src={linkedin}
              alt="linkedin"
              style={{ width: "78px", height: "75px" }}
            />
          </li>
          <li className="nav-item">
            <img
              src={gmail}
              alt="gmail"
              style={{ width: "65px", height: "65px" }}
            />
          </li>
          <li className="nav-item">
            <Button
              style={{
                height: "45px",
                margin: "10px",
                borderRadius: "8px",
                color: "white",
                fontWeight: "bold",
                padding: "10px 20px",
              }}
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
