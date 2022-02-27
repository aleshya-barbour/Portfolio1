import React from "react";
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import './port.css';

export default function Portfolio() {
  return(
  <>
    <div className="header">
      Projects
    </div>

    <div className="contain">
    <Container className="container">
      <Row md={4}>
        <Col>1 of 3</Col>
        <Col xs={6}>2 of 3</Col>
        <Col>3 of 3</Col>
      </Row>
    </Container>
    </div>

    <div className="contain">
    <Container className="container">
      <Row md={4}>
        <Col>1 of 3</Col>
        <Col xs={6}>2 of 3</Col>
        <Col>3 of 3</Col>
      </Row>
    </Container>
    </div>

  </>
  )
}
