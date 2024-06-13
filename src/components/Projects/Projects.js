import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import CinemAPP from "../../Assets/Projects/CinemAPP.png";
import chart from "../../Assets/Projects/chart.png";
import NFGym from "../../Assets/Projects/NFGym.png";
import RoBOT from "../../Assets/Projects/RoBOT.png";
import ChatAPP from "../../Assets/Projects/ChatAPP.png";
import edupage from "../../Assets/Projects/edupage.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CinemAPP}
              isBlog={false}
              title="Cinema React/Java Spring APP"
              description="This app is a cinema website where you can purchase movie tickets and conveniently pre-order snacks and drinks. It offers a seamless experience, allowing you to choose your seats, select your refreshments, and enjoy a hassle-free visit to the movies. Demo will be available soon."
              ghLink="https://github.com/Varga-Levente/Szoftverfejlesztes-mernokoknek"
              demoLink=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={NFGym}
              isBlog={false}
              title="GTA:V Roleplay Gym Website"
              description="This website for a GTA
roleplay server gym allowed employees to log sales and attendance, providing a streamlined system for tracking daily activities. Owners could monitor staff performance and maintain oversight, ensuring efficient management and smooth operations within the virtual fitness center. The roleplay server closed down, so the website is no longer available."
              ghLink="https://github.com/Varga-Levente/NFGym-Website"
              demoLink=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={RoBOT}
              isBlog={false}
              title="RoBOT Android App"
              description="This Android mobile app controls an ESP32-based robot using TCP/IP. The app offers dual control modes: you can steer the robot with on-screen buttons or by tilting your device, providing a versatile and intuitive user experience. The first button is the repository of the app, the second is the repository of the robot."
              ghLink="https://github.com/Varga-Levente/RoBOT-Controller-Android-APP"
              ghLink2="https://github.com/Varga-Levente/RoBOT"
              demoLink=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chart}
              isBlog={false}
              title="1-Bit BMP Graph Generator"
              description="This C program generates a 1-bit color depth BMP file visualizing the temporal variation of a randomly changing quantity. It operates in two modes: sender and receiver. In sender mode, the program generates the data, while in receiver mode, it displays the data. The program runs as a single executable but requires two processes, with inter-process communication achieved through file handling or network sockets."
              ghLink="https://github.com/Varga-Levente/rendszerkozeli-programozas-projekt?tab=readme-ov-file"
              demoLink=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ChatAPP}
              isBlog={false}
              title="Real Time Chat Application C#"
              description="This real-time chat app consists of three main components: the client, the server, and a Python API for user validation. The client connects to the server, which handles message forwarding and supports both text and file transfers. User authentication is managed by the server through the Python API, ensuring secure and efficient communication within the chat system. The first button is the repository of the client and server, the second is the API."
              ghLink="https://github.com/Varga-Levente/Tavkozlohalo-Chat"
              ghLink2="https://github.com/Varga-Levente/Tavkozlohalo_API"
              demoLink=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={edupage}
              isBlog={false}
              title="Education Page"
              description="This is a PHP website framework-free. The site is designed for tracking my university courses. Here you can find all my notes, lecture presentations, and useful links related to the subjects. "
              ghLink=""
              demoLink="https://edu.vlevente.me/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
