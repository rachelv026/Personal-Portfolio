// Projects.js
import React from 'react';
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard'; 
import bbb from '../assets/bbb.png';
import contacts from '../assets/purrfectContacts.png';
import pattern from '../assets/pattern.jpeg';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects = [
    {
      title: "Bite By Byte",
      description: "A Learn-to-Cook Web App made using a MERN stack",
      imgUrl: bbb,
      githubUrl: "https://github.com/rachelv026/Bite-By-Byte",
      webUrl: "https://bitebybyte-9e423411050b.herokuapp.com/",
    },
    {
      title: "Purrfect Contacts",
      description: "Contact manager Web App made using LAMP stack",
      imgUrl: contacts,
      githubUrl: "https://github.com/rachelv026/Purrfect-Contacts"
    },
    {
      title: "Pattern Hollow",
      description: "Discover and save crochet patterns, organized by difficulty level, to your personal account",
      imgUrl: pattern,
      githubUrl: "https://github.com/rachelv026/Pattern-Hollow"
    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">2024</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">2025</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>Coming soon :)</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      {/* <img className="background-image-right" src={colorSharp2}></img> */}
    </section>
  );
};
