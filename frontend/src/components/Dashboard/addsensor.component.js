import React, { Component } from "react";
import axios from "axios";
import { Container, Row, Col, Form } from "react-bootstrap";
import Swal from "sweetalert2";

export default class AddSensor extends Component {
  constructor(props) {
    super(props);
    this.state = this.initialState;
    this.onChangeSensorId = this.onChangeSensorId.bind(this);
    this.onChangeLocation = this.onChangeLocation.bind(this);
    this.onChangeThresholdTemp = this.onChangeThresholdTemp.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  initialState = { sensorid: "", location: "", thresholdtemp: "" };

  onChangeSensorId(event) {
    this.setState({
      sensorid: event.target.value,
    });
  }

  onChangeLocation(event) {
    this.setState({
      location: event.target.value,
    });
  }

  successfulmessage = (msg) => {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: msg,
      showConfirmButton: false,
      timer: 1500,
    });
  };
  unsuccessfulmessage = (msg) => {
    Swal.fire({
      position: "top-end",
      icon: "error",
      title: msg,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  onChangeThresholdTemp(event) {
    this.setState({
      thresholdtemp: event.target.value,
    });
  }

  onSubmit = () => {
    console.log("asdasd");
    const sensor = {
      location: this.state.location,
      thresholdtemp: this.state.thresholdtemp,
      addedDate: Date.now(),
    };
    console.log(sensor);
    axios
      .post("http://localhost:9090/sensor/addsensor", {
        location: this.state.location,
        thresholdtemp: this.state.thresholdtemp,
        addedDate: Date.now(),
      })
      .then((res) => {
        console.log(res.data);

        if (res.data !== null) {
          this.successfulmessage("Sensor Added Successfull");
        } else {
          {
            this.unsuccessfulmessage("Unsuccessfull");
          }
        }
      })
      .catch((err) => console.error(err));
  };

  onReset = () => {
    this.setState({
      location: " ",
      thresholdtemp: " ",
    });
  };

  render() {
    const { sensorid, location, thresholdtemp } = this.state;
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
            </Row>
            <Row>
              <Col>
                <Form.Group controlId="location">
                  <Form.Label>Location</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter location"
                    autoComplete="off"
                    value={location}
                    onChange={this.onChangeLocation}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="threshold">
                  <Form.Label>Threshold Value</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter threshold value (celcius)"
                    autoComplete="off"
                    value={thresholdtemp}
                    onChange={this.onChangeThresholdTemp}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row className="text-center" style={{ margin: "5px" }}>
              <Col className="text-center">
                <button
                  type="button"
                  className="btn btn-primary btn-sm "
                  onClick={this.onSubmit}
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
                  onClick={this.onReset}
                  style={{ width: "50%" }}
                >
                  Clear
                </button>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}
