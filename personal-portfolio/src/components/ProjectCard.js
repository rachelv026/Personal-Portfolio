import React from 'react';
import { Col } from "react-bootstrap";
import githubLogo from "../assets/github.svg"; 
import web from "../assets/screen.svg";

export const ProjectCard = ({ title, description, imgUrl, githubUrl, webUrl}) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <div className="button-container">
            {/* GitHub Button */}
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <button className="card-btn">
                <img src={githubLogo} alt="GitHub Logo" className="github-logo" />
                GitHub
              </button>
            </a>
            {/* Web Button */}
            <a href={webUrl} target="_blank" rel="noopener noreferrer">
              <button className="card-btn">
                <img src={web} alt="Web Link" className="github-logo" />
                Website
              </button>
            </a>
          </div>
        </div>
      </div>
    </Col>
  )
}