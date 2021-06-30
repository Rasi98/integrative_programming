import React, { Component } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";

export default class AddUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //Hardcoded values for the moment
      fname: "Spencer",
      lname: "James",
      email: "james@gmail.com",
      phone: "0114525478",
      notificationType: "",
      position: "Manager",
      username: "admin",
      password: "admin",
    };
  }

  makeeditbale() {
    const btntext = document.querySelector("#btn").innerHTML;
    console.log(btntext);

    if (btntext === "Edit") {
      //Make disabled fields available to edit
      document.getElementById("fname").disabled = false;
      document.getElementById("lname").disabled = false;
      document.getElementById("email").disabled = false;
      document.getElementById("phone").disabled = false;
      document.getElementById("notify").disabled = false;
      document.getElementById("position").disabled = false;
      document.getElementById("username").disabled = false;
      document.getElementById("password").disabled = false;
      document.querySelector("#btn").innerHTML = "Save";
    } else if (btntext === "Save") {
      //save after edit
      document.getElementById("fname").disabled = true;
      document.getElementById("lname").disabled = true;
      document.getElementById("email").disabled = true;
      document.getElementById("phone").disabled = true;
      document.getElementById("notify").disabled = true;
      document.getElementById("position").disabled = true;
      document.getElementById("username").disabled = true;
      document.getElementById("password").disabled = true;
      document.querySelector("#btn").innerHTML = "Edit";
      console.log("user updated");
      //Write the code to update the user details
    }
  }

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
            <h1>Add Account</h1>
            <Row>
              <Col>
                {" "}
                <Form.Group controlId="fname">
                  <Form.Label>First name</Form.Label>
                  <Form.Control
                    disabled
                    id="fname"
                    type="text"
                    value={this.state.fname}
                  />
                </Form.Group>
              </Col>
              <Col>
                {" "}
                <Form.Group controlId="lname">
                  <Form.Label>Last name</Form.Label>
                  <Form.Control
                    id="lname"
                    disabled
                    type="text"
                    value={this.state.lname}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    id="email"
                    disabled
                    type="text"
                    value={this.state.email}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="phone">
                  <Form.Label>Phone no.</Form.Label>
                  <Form.Control
                    id="phone"
                    disabled
                    type="text"
                    value={this.state.phone}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Notification Type</Form.Label>
                  <Form.Control
                    id="notify"
                    disabled
                    value={this.state.notificationType}
                    as="select"
                    custom
                    name="notificationtype"
                  >
                    <option value={"email"}>Email</option>
                    <option value={"sms"}>SMS</option>
                    <option value={"call"}>Call</option>
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="position">
                  <Form.Label>Position</Form.Label>
                  <Form.Control
                    id="position"
                    disabled
                    type="text"
                    value={this.state.position}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                {" "}
                <Form.Group controlId="username">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    id="username"
                    disabled
                    type="text"
                    value={this.state.username}
                  />
                </Form.Group>
              </Col>
              <Col>
                {" "}
                <Form.Group controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    id="password"
                    disabled
                    type="text"
                    value={this.state.password}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row className="text-center" style={{ margin: "5px" }}>
              <Col className="text-center">
                <button
                  id="btn"
                  type="button"
                  className="btn btn-primary btn-sm "
                  style={{ width: "50%" }}
                  onClick={this.makeeditbale}
                >
                  Add Account
                </button>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}
