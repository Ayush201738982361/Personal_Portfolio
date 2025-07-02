import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { CgWebsite } from "react-icons/cg";
import { IoBookSharp } from "react-icons/io5";
import { GrSecure } from "react-icons/gr";

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
        <h3 className="section-heading">Projects</h3>
      </div>

      <VerticalTimeline>
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
            BookER - Online Bookstore Marketplace
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
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#FE5D26", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #FE5D26" }}
          date="June 2025"
          iconStyle={{ background: "#FE5D26", color: "#fff" }}
          icon={<GrSecure />}
        >
          <h3 className="vertical-timeline-element-title">Secure.ai</h3>
          <h4 className="vertical-timeline-element-subtitle">
            MongoDB,Express.js,React.js,Node.js,LLM
          </h4>
          <p>
            Secure.AI is a full-stack web application designed to provide users
            with intelligent cybersecurity assistance through a seamless and
            secure interface. The platform is built using React.js for a dynamic
            and responsive frontend experience, while the backend is powered by
            Node.js and Express.js to deliver reliable API interactions and
            modular functionality. MongoDB is employed as the primary database,
            with Mongoose facilitating efficient object modeling and schema
            enforcement. The application includes a secure login and signup
            module backed by JWT (JSON Web Tokens) for authentication and
            session management. One of its core features allows users to upload
            zipped files, which are then unzipped and parsed through a Large
            Language Model (LLM) to detect and suggest cybersecurity
            improvements. Another key module is an AI-powered chatbot trained to
            answer questions related to cybersecurity threats, best practices,
            and regional laws and acts. Secure.AI also integrates NodeMailer to
            send automated welcome emails and future security alerts. RESTful
            APIs ensure smooth communication between client and server, while
            the platform’s modular design includes comprehensive documentation
            of cybersecurity acts and standard project features like dashboards
            and user profiles.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </>
  );
};

export default Projects;
