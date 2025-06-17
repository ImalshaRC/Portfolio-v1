import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import ScrollAnimation from "react-animate-on-scroll";
import { Container } from "./styles";
import { experiences } from "../../constants";

export function Work() {
  return (
    <Container id="Work">
      <ScrollAnimation animateIn="fadeInLeft" animateOut="flipOutY">
        <h2>Work Experience</h2>
      </ScrollAnimation>

      <div className="timeline-container">
        <VerticalTimeline lineColor="#0941F5">
          {experiences.map((experience, index) => (
            <ScrollAnimation
              key={index}
              animateIn="fadeInUp"
              animateOut="fadeOutDown"
              offset={50}
            >
              <VerticalTimelineElement
                contentStyle={{ background: "#2b2b2b", color: "#0941F5" }}
                contentArrowStyle={{ borderRight: "8px solid #0941F5" }}
                date={experience.date}
                dateClassName="custom-date"
                iconStyle={{
                  background: experience.iconBg,
                  color: "#2b2b2b",
                  border: "2px solid #0941F5",
                }}
                icon={
                  <div className="timeline-icon">
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className="timeline-image"
                    />
                  </div>
                }
                position={index % 2 === 0 ? "left" : "right"}
                className="vertical-timeline-element" // Add this class
              >
                <h3 className="vertical-timeline-element-title">
                  {experience.title}
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  {experience.company_name}
                </h4>
                <ul>
                  {experience.points.map((point, idx) => (
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
