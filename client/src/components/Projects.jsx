import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { LiaBlogSolid } from "react-icons/lia";
import { CgWebsite } from "react-icons/cg";
import { IoBookSharp } from "react-icons/io5";

import { TypingAnimation } from "@/components/magicui/typing-animation";

import "react-vertical-timeline-component/style.min.css";

const Projects = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "40px",
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
          Projects
        </TypingAnimation>
      </div>

      <VerticalTimeline>
        {/* First Project */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#FE5D26", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #FE5D26" }}
          date="September 2024"
          iconStyle={{ background: "#FE5D26", color: "#fff" }}
          icon={<LiaBlogSolid />}
        >
          <h3 className="vertical-timeline-element-title">Blogify</h3>
          <h4 className="vertical-timeline-element-subtitle">
            EJS, JavaScript, Node.js, Express.js, MongoDB
          </h4>
          <p>
            Created a robust blog website called Blogify focused on learning
            backend development. It enables users to create, edit, and view blog
            posts with a clean, user-friendly interface. Implemented RESTful
            APIs, secure backend logic using Node.js, efficient routing with
            Express.js, and server-side rendering with EJS. Integrated JWT for
            authentication and Crypto.js for password encryption.
          </p>
        </VerticalTimelineElement>

        {/* Second Project */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#F7374F", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #F7374F" }}
          date="October 2024"
          iconStyle={{ background: "#F7374F", color: "#fff" }}
          icon={<CgWebsite />}
        >
          <h3 className="vertical-timeline-element-title">WebScraper</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Python, BeautifulSoup, Pandas, Seaborn
          </h4>
          <p>
            Developed a Python script to scrape iPhone product names and prices
            from Amazon using BeautifulSoup and requests with custom headers for
            ethical scraping. Processed and cleaned the data using Pandas for
            structured analysis, handled missing or malformed entries, and
            visualized the price distribution using Matplotlib and Seaborn.
            Final results were exported to CSV and PNG files.
          </p>
        </VerticalTimelineElement>

        {/* Third Project */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#4635B1", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid #4635B1" }}
          date="December 2024"
          iconStyle={{ background: "#4635B1", color: "#fff" }}
          icon={<IoBookSharp />}
        >
          <h3 className="vertical-timeline-element-title">
            BookER - Online Bookstore Platform
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            MongoDB, Express.js, React.js, Node.js
          </h4>
          <p>
            BookER is a full-stack web application that enables users to
            seamlessly buy second-hand books and sell their old books. It
            leverages React.js for a dynamic and responsive frontend, and
            Node.js with Express.js for a robust backend architecture. MongoDB
            serves as the database for efficient data storage, with Mongoose for
            object modeling. The platform also integrates NodeMailer for
            automated welcome emails, JWT for secure authentication, and RESTful
            APIs for smooth client-server communication.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </>
  );
};

export default Projects;
