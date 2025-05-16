import aboutme from "../public/about.png";

function AboutMe() {
  return (
    <>
      <div className="about-container">
        <div className="text-section">
          <p>
            Hi there , My name is Ayush S Nair ! I'm a passionate Computer
            Science student with a keen interest in creating dynamic and
            responsive web applications. My expertise lies in using the MERN
            stack (MongoDB, Express.js, React.js, and Node.js), which allows me
            to build full-stack applications that are both powerful and
            scalable.
          </p>
        </div>
        <div className="image-section">
          <img src={aboutme} alt="about" />
        </div>
      </div>
    </>
  );
}

export default AboutMe;
