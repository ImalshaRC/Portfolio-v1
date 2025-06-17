import React from "react";
import { Container } from "./styles";
import ChaminduImalsha from "../../assets/chamindu-imalsha.png";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import nodeIcon from "../../assets/node-icon.svg";
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import java from "../../assets/java.svg";

import mongoIcon from "../../assets/mongodb.svg";
import sqlIcon from "../../assets/sql-image.png";
import mysqlIcon from "../../assets/mysql-icon.svg";
import firebaseIcon from "../../assets/firebase.svg";
import dynamoDbIcon from "../../assets/DynamoDB.svg";
import awsIcon from "../../assets/aws.svg";
import dockerIcon from "../../assets/docker.svg";
import gitHubIcon from "../../assets/github-icon.svg";
import gitLabIcon from "../../assets/gitlab.svg";
import bitBucket from "../../assets/bitbucket.svg";
import kubernetesIcon from "../../assets/kubernetes.svg";
import nextjsIcon from "../../assets/nextjs.svg";
import nestjsIcon from "../../assets/nestjs.svg";
import springBootIcon from "../../assets/spring-boot.svg";
import pythonIcon from "../../assets/python.svg";
import NetCore from "../../assets/NETcore.svg";
import Azure from "../../assets/Azure.svg";
import MsSqlServer from "../../assets/ms_sql_server.png";

import ScrollAnimation from "react-animate-on-scroll";

const frontendSkills = [
  { src: reactIcon, alt: "React" },
  { src: nextjsIcon, alt: "Next.js" },
  { src: jsIcon, alt: "JavaScript" },
  { src: typescriptIcon, alt: "TypeScript" },
  { src: htmlIcon, alt: "HTML" },
  { src: cssIcon, alt: "CSS" },
];

const backendSkills = [
  { src: NetCore, alt: "NET Core" },
  { src: nodeIcon, alt: "Node.js" },
  { src: nestjsIcon, alt: "Nest.js" },
  { src: java, alt: "Java" },
  { src: springBootIcon, alt: "Spring Boot" },
  { src: pythonIcon, alt: "Python" },
];

const databaseSkills = [
  { src: sqlIcon, alt: "SQL" },
  { src: mysqlIcon, alt: "MySQL" },
  { src: MsSqlServer, alt: "MSSqlServer" },
  { src: mongoIcon, alt: "MongoDB" },
  { src: dynamoDbIcon, alt: "DynamoDB" },
  { src: firebaseIcon, alt: "Firebase" },
];

const toolsSkills = [
  { src: gitHubIcon, alt: "GitHub" },
  { src: gitLabIcon, alt: "GitLab" },
  { src: bitBucket, alt: "Bitbucket" },
  { src: awsIcon, alt: "AWS" },
  { src: dockerIcon, alt: "Docker" },
  { src: kubernetesIcon, alt: "Kubernetes" },
  { src: Azure, alt: "Azure" },
];

const createSkillElements = (skills: any[], delayOffset: number) =>
  skills.map((skill, index) => (
    <ScrollAnimation
      key={index}
      animateIn="fadeInUp"
      animateOut="fadeOutDown"
      delay={(delayOffset + index * 100) * 1}
    >
      <div className="hability">
        <img src={skill.src} alt={skill.alt} />
      </div>
    </ScrollAnimation>
  ));

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <p>
            Full-Stack Software Engineer with 2+ years of experience
            specializing in .NET Core and React/TypeScript, with additional
            skills in AngularJS, Node.js, Spring Boot, and NestJS. Experienced
            in developing scalable, high-performance web applications and
            managing cloud infrastructure on Azure and AWS platforms.
          </p>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeInLeft"
          delay={0.2 * 1000}
          style={{ marginTop: "2rem", marginBottom: "2rem" }}
        >
          <p>
            Strong background in microservices architecture, Microsoft Graph API
            integration, OAuth 2.0 implementation, and comprehensive database
            management (MySQL, MongoDB). Experienced with CI/CD and version
            control systems. Passionate about clean code practices, creative
            UI/UX design, and collaborating with cross-functional teams to
            deliver impactful solutions.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
          <h3>Skills</h3>
        </ScrollAnimation>

        {/* Frontend Skills */}
        <ScrollAnimation animateIn="fadeInUp" animateOut="fadeOutDown">
          <div className="skill-category">
            <h4>Frontend</h4>
            <div className="hard-skills">
              {createSkillElements(frontendSkills, 0.13)}
            </div>
          </div>
        </ScrollAnimation>

        {/* Backend Skills */}
        <ScrollAnimation animateIn="fadeInUp" animateOut="fadeOutDown">
          <div className="skill-category">
            <h4>Backend</h4>
            <div className="hard-skills">
              {createSkillElements(backendSkills, 0.18)}
            </div>
          </div>
        </ScrollAnimation>

        {/* Database Skills */}
        <ScrollAnimation animateIn="fadeInUp" animateOut="fadeOutDown">
          <div className="skill-category">
            <h4>Databases</h4>
            <div className="hard-skills">
              {createSkillElements(databaseSkills, 0.21)}
            </div>
          </div>
        </ScrollAnimation>

        {/* Tools & Platforms */}
        <ScrollAnimation animateIn="fadeInUp" animateOut="fadeOutDown">
          <div className="skill-category">
            <h4>Tools & Platforms</h4>
            <div className="hard-skills">
              {createSkillElements(toolsSkills, 0.24)}
            </div>
          </div>
        </ScrollAnimation>
      </div>

      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.2 * 1000}>
          <img
            src={ChaminduImalsha}
            alt="Chamindu Imalsha"
            style={{
              width: "100%",
              maxWidth: "400px",
              height: "auto",
            }}
          />
        </ScrollAnimation>
      </div>
    </Container>
  );
}
