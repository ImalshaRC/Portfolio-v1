import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import ScrollAnimation from "react-animate-on-scroll";
import { Container } from "./styles";
import { education } from "../../constants"; // Make sure to export this data from constants

export function Education() {
  return (
    <Container id="Education">
      <ScrollAnimation animateIn="fadeInLeft" animateOut="flipOutY">
        <h2>Education</h2>
      </ScrollAnimation>

      <div className="timeline-container">
        <VerticalTimeline lineColor="#23ce6b">
          {education.map((edu, index) => (
            <ScrollAnimation
              key={index}
              animateIn="fadeInUp"
             animateOut="fadeOutDown"
              offset={50}
            >
              <VerticalTimelineElement
                contentStyle={{ background: "#2b2b2b", color: "#23ce6b" }}
                contentArrowStyle={{ borderRight: "8px solid #23ce6b" }}
                date={edu.date}
                dateClassName="custom-date"
                iconStyle={{
                  background: "#fff",
                  color: "#2b2b2b",
                  border: "2px solid #23ce6b",
                }}
                icon={
                  <div className="timeline-icon">
                    <img
                      src={edu.icon}
                      alt={edu.institution}
                      className="timeline-image"
                    />
                  </div>
                }
                position={index % 2 === 0 ? "left" : "right"}
                style={{ marginBottom: "2rem" }} // Add margin here
              >
                <h3 className="vertical-timeline-element-title">
                  {edu.degree}
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  {edu.institution}
                </h4>
                <ul>
                  {edu.points.map((point, idx) => (
                    <li key={idx} style={{ listStyleType: "disc" }}>
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            </ScrollAnimation>
          ))}
        </VerticalTimeline>
      </div>
    </Container>
  );
}
