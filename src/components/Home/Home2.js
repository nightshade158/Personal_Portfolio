import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
<p className="home-about-body">
  I am a passionate and versatile{" "}
  <i>
    <b className="purple">
      Software Developer, OS Architect, Full Stack Developer, DevOps Engineer, Cloud Architect, Android Developer
    </b>
  </i>{" "}
  with experience in turning ideas into real-world solutions through{" "}
  <i>
    <b className="purple">C++, Python, Java</b>
  </i>.
  <br />
  <br />
  I have hands-on experience building{" "}
  <i>
    <b className="purple">Full-Stack Applications</b>
  </i>{" "}
  using{" "}
  <i>
    <b className="purple">Node.js, React.js</b>
  </i>{" "}
  and designing and optimizing{" "}
  <i>
    <b className="purple">Backend Systems, APIs</b>
  </i>{" "}
  for <b className="purple">performance, scalability, and security</b>.
  <br />
  <br />
  My expertise spans{" "}
  <i>
    <b className="purple">Cloud Architecture, DevOps</b>
  </i>{" "}
  where I deploy, manage, and monitor scalable{" "}
  <i>
    <b className="purple">cloud solutions, CI/CD pipelines</b>
  </i>{" "}
  to streamline development workflows and ensure operational efficiency.
  <br />
  <br />
  I also create{" "}
  <i>
    <b className="purple">Android Applications</b>
  </i>{" "}
  and develop{" "}
  <i>
    <b className="purple">Security-Focused Tools, secure systems</b>
  </i>{" "}
  to deliver robust, end-to-end solutions across multiple platforms.
  <br />
  <br />
  Constantly curious and always learning, I explore new technologies, optimize processes, and bridge the gap between{" "}
  <i>
    <b className="purple">innovative ideas</b>
  </i>{" "}
  and{" "}
  <i>
    <b className="purple">practical, high-quality implementations</b>
  </i>{" "}
  to make a meaningful impact.
</p>

          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>CONNECT WITH ME ON</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/nightshade158"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/Night_shade158"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/j-collin-ryan-235609270/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/collin._ryan"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
