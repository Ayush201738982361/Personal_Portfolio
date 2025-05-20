import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import MongoDBLogo from "../public/skills/MongoDB.jpeg";
import ReactLogo from "../public/skills/React-Logo.png";
import ExpressLogo from "../public/skills/Express.jpeg";
import NodeJS from "../public/skills/NodeJS.jpeg";
import Python from "../public/skills/Python.jpeg";
import Java from "../public/skills/Java.jpeg";
import JS from "../public/skills/javascript.jpeg";
import C from "../public/skills/C.jpeg";
import { TypingAnimation } from "@/components/magicui/typing-animation";

function Skills() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "100px",
          marginBottom: "40px",
        }}
      >
        <TypingAnimation
          style={{
            fontSize: "2rem",
            color: "#F5EEDD",
            fontFamily: "Retro New Version, sans-serif",
            fontWeight: "400",
            fontStyle: "italic",
            textShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
          }}
        >
          Skills
        </TypingAnimation>
      </div>
      <div>
        <center>
          <p
            style={{
              fontSize: "2rem",
              color: "#F5EEDD",
              fontFamily: "Retro New Version, sans-serif",
              fontWeight: "400",
              fontStyle: "italic",
              textShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
            }}
          >
            Tech Stack
          </p>
        </center>
      </div>
      <div className="skills-grid">
        {/* First Card*/}
        <Card sx={{ maxWidth: 350, borderRadius: "10px" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={MongoDBLogo}
              alt="mongodb"
            />
            <CardContent style={{ backgroundColor: "rgb(255, 255, 255)" }}>
              <center>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  style={{ color: "green" }}
                >
                  MongoDB
                </Typography>
              </center>
            </CardContent>
          </CardActionArea>
        </Card>

        {/* Second Card */}

        <Card sx={{ maxWidth: 350, borderRadius: "10px" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={ReactLogo}
              alt="react-logo"
            />
            <CardContent style={{ backgroundColor: "rgb(255, 255, 255)" }}>
              <center>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  style={{ color: "#00b4d8" }}
                >
                  React.js
                </Typography>
              </center>
            </CardContent>
          </CardActionArea>
        </Card>
        {/* Third Card  */}

        <Card sx={{ maxWidth: 350, borderRadius: "10px" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={ExpressLogo}
              alt="express"
            />
            <CardContent style={{ backgroundColor: "rgb(255, 255, 255)" }}>
              <center>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  style={{ color: "#ff9e00" }}
                >
                  Express.js
                </Typography>
              </center>
            </CardContent>
          </CardActionArea>
        </Card>

        {/* Fourth Card */}

        <Card sx={{ maxWidth: 350, borderRadius: "10px" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={NodeJS}
              alt="nodejs"
            />
            <CardContent style={{ backgroundColor: "rgb(255, 255, 255)" }}>
              <center>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  style={{ color: "#007200" }}
                >
                  Node.js
                </Typography>
              </center>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
      <center>
        <p
          style={{
            fontSize: "2rem",
            color: "#F5EEDD",
            fontFamily: "Retro New Version, sans-serif",
            fontWeight: "400",
            fontStyle: "italic",
            textShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
            marginTop: "50px",
          }}
        >
          Programming Languages
        </p>
      </center>
      {/* Programming Languages */}

      <div className="skills-grid">
        <Card sx={{ maxWidth: 350, borderRadius: "10px" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={Python}
              alt="Python"
            />
            <CardContent style={{ backgroundColor: "rgb(255, 255, 255)" }}>
              <center>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  style={{ color: "#102E50" }}
                >
                  Python
                </Typography>
              </center>
            </CardContent>
          </CardActionArea>
        </Card>
        {/* Second Langauge */}
        <Card sx={{ maxWidth: 350, borderRadius: "10px" }}>
          <CardActionArea>
            <CardMedia component="img" height="140" image={Java} alt="Java" />
            <CardContent style={{ backgroundColor: "rgb(255, 255, 255)" }}>
              <center>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  style={{ color: "#E55050" }}
                >
                  Java
                </Typography>
              </center>
            </CardContent>
          </CardActionArea>
        </Card>
        {/* Third Language */}
        <Card sx={{ maxWidth: 350, borderRadius: "10px" }}>
          <CardActionArea>
            <CardMedia component="img" height="140" image={JS} alt="JS" />
            <CardContent style={{ backgroundColor: "rgb(255, 255, 255)" }}>
              <center>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  style={{ color: "#FFB22C" }}
                >
                  JavaScript
                </Typography>
              </center>
            </CardContent>
          </CardActionArea>
        </Card>

        {/* Fourth Language */}

        <Card sx={{ maxWidth: 350, borderRadius: "10px" }}>
          <CardActionArea>
            <CardMedia component="img" height="140" image={C} alt="JS" />
            <CardContent style={{ backgroundColor: "rgb(255, 255, 255)" }}>
              <center>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  style={{ color: "#3D90D7" }}
                >
                  C/C++
                </Typography>
              </center>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </>
  );
}

export default Skills;
