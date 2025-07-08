import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello, I am <span className="purple">Collin Ryan </span>
            from <span className="purple"> Chennai, India.</span>
            <br />
            I am currently a fresher looking for exciting opportunities
            <br />
            I have completed BTech in Computer Science and Engineering at Amrita Viswa Vidyapeetham
            Chennai.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "The most important thing is to be able to think what you want, not to say what you want."{" "}
          </p>
          <footer className="blockquote-footer">Collin</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
