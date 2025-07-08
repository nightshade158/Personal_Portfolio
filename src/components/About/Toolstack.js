import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiVercel,
  SiQemu,
  SiNetlify,
  SiRender,
  SiUbuntu,
  SiComposer,
  SiAndroidstudio,
  SiVirtualbox,
  SiDocker,
  SiArchlinux,
  SiKalilinux,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiQemu />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNetlify />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRender />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiUbuntu/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiArchlinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiComposer/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaAws/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAndroidstudio/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVirtualbox/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiKalilinux/>
      </Col>
    </Row>
  );
}

export default Toolstack;
