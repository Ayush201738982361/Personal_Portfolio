import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "../App.css";
import { IoSchool } from "react-icons/io5";
import { FaSchool } from "react-icons/fa6";
import "react-vertical-timeline-component/style.min.css";

function EducationTimeline() {
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
        <h3 className="section-heading">Education</h3>
      </div>
      {/* Timelines */}
      {/* First Timeline */}
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2012-2021"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<FaSchool />}
        >
          <h3 className="vertical-timeline-element-title">
            Ryan Internation School
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Udaipur,Rajasthan
          </h4>
          <p>
            Completed my 10th standard from Ryan International School (CBSE)
          </p>
        </VerticalTimelineElement>
        {/* Second Timeline */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2021 - 2022"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<FaSchool />}
        >
          <h3 className="vertical-timeline-element-title">MMPS</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Udaipur,Rajasthan
          </h4>
          <p>Completed my 12th standard from MMPS Udaipur,Rajasthan (CBSE)</p>
        </VerticalTimelineElement>
        {/* Third Timeline */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2023 - present"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<IoSchool />}
        >
          <h3 className="vertical-timeline-element-title">
            Christ (Deemed to be University)
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Bangalore,Karnataka
          </h4>
          <p>
            Currently persuing my Bachelor's in Computer Applications from
            Christ University,Bangalore
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </>
  );
}

export default EducationTimeline;
