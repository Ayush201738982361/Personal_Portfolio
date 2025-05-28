import "../App.css";

function AboutMe() {
  const name = "Ayush S Nair";
  const profession = "Software Developer";

  return (
    <div className="hero-container">
      <h1>I'm {name}</h1>
      <h2 className="profession">{profession}</h2>
    </div>
  );
}

export default AboutMe;
