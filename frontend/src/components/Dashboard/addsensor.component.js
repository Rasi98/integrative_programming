import React, { Component } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";

export default class AddSensor extends Component {
  render() {
    return (
      <div>
        <div
          style={{
            height: "100%",
            width: "1000px",
            backgroundColor: "#e7d9ea",
            borderRadius: "10px",
            padding: "20px",
          }}
        >
          <Container>
            <h1
              style={{ marginBottom: "20px", fontSize: "large" }}
              className="text-center"
            >
              Add New Sensor
            </h1>

            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Sensor Type</Form.Label>
                  <Form.Control as="select" custom name="sensortype">
                    <option value={"temperature"}>Temperature</option>
                    <option value={"humidity"} disabled>
                      Humidity
                    </option>
                    <option value={"pressure"} disabled>
                      Pressure
                    </option>
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label>Notification Type</Form.Label>
                  <Form.Control as="select" custom name="notification">
                    <option value={"email"}>Email</option>
                    <option value={"sms"}>SMS</option>
                    <option value={"call"}>Call</option>
                  </Form.Control>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group controlId="sensorid">
                  <Form.Label>Sensor ID</Form.Label>
                  <Form.Control type="text" placeholder="Enter sensor Id" />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="threshold">
                  <Form.Label>Threshold Value</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter threshold value (celcius)"
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group controlId="location">
                  <Form.Label>Location</Form.Label>
                  <Form.Control type="text" placeholder="Enter location" />
                </Form.Group>
              </Col>
              <Col></Col>
            </Row>
            <Row className="text-center" style={{ margin: "5px" }}>
              <Col className="text-center">
                <button
                  type="button"
                  className="btn btn-primary btn-sm "
                  style={{ width: "50%" }}
                >
                  Add
                </button>
              </Col>
            </Row>
            <Row className="text-center" style={{ margin: "5px" }}>
              <Col>
                <button
                  type="button"
                  className="btn btn-outline-secondary btn-sm"
                  style={{ width: "50%" }}
                >
                  clear
                </button>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}
