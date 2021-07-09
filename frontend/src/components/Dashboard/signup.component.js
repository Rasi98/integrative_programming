import React, { Component } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import axios from "axios";

export default class AddUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      lname: "",
      email: "",
      phone: "",
      notificationType: "",
      position: "",
      username: "",
      password: "",
    };
  }

  onchange=(e)=>{
    this.setState({[e.target.name]: e.target.value})
  }

  Handlesubmit=()=>{
    const staffUser={
      firstname:this.state.fname,
      lastname:this.state.lname,
      username:this.state.username,
      password:this.state.password,
      email:this.state.email,
      telNo:this.state.phone,
      notificationType:this.state.notificationType,
      position:this.state.position,
    }
    console.log(staffUser);
    axios.post("http://localhost:9090/user/adduser",staffUser).then(r =>
    console.log(r.data)
    )}


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
                    name="fname"
                    id="fname"
                    type="text"
                    value={this.state.fname}
                    onChange={this.onchange}
                  />
                </Form.Group>
              </Col>
              <Col>
                {" "}
                <Form.Group controlId="lname">
                  <Form.Label>Last name</Form.Label>
                  <Form.Control
                    id="lname"
                    name="lname"
                    type="text"
                    value={this.state.lname}
                    onChange={this.onchange}

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
                    name="email"
                    type="text"
                    value={this.state.email}
                    onChange={this.onchange}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="phone">
                  <Form.Label>Phone no.</Form.Label>
                  <Form.Control
                    id="phone"
                    name="phone"
                    type="number"
                    value={this.state.phone}
                    onChange={this.onchange}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Notification Type</Form.Label>
                  <Form.Control
                    value={this.state.notificationType}
                    as="select"
                    custom
                    onChange={this.onchange}
                    name="notificationType"
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
                    name="position"
                    onChange={this.onchange}
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
                    name="username"
                    type="text"
                    value={this.state.username}
                    onChange={this.onchange}
                  />
                </Form.Group>
              </Col>
              <Col>
                {" "}
                <Form.Group controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    id="password"
                    name="password"
                    type="text"
                    value={this.state.password}
                    onChange={this.onchange}
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
                  onClick={this.Handlesubmit}
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
