import React, { Component } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import axios from "axios";
import Swal from "sweetalert2";

export default class UserAccount extends Component {
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

  componentDidMount() {
    const id=localStorage.getItem("id")
    axios.post("http://localhost:9090/user/getDetails/"+id).then((res)=>{
      this.setState({
        fname:res.data.firstname,
        lname:res.data.lastname,
        email:res.data.email,
        phone:res.data.telNo,
        notificationType:res.data.notificationType,
        position:res.data.position,
        username:res.data.username,
        password:res.data.password,
      })
    })
  }

  onchange=(e)=>{
    this.setState({[e.target.name]:e.target.value})
  }
  onchangenotify=(e)=>{
    this.setState({notificationType:e.target.value})
  }

  makeeditbale=()=> {
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
      const idset=localStorage.getItem("id")

      const staffUser={
        userId:idset,
        firstname:this.state.fname,
        lastname:this.state.lname,
        username:this.state.username,
        password:this.state.password,
        email:this.state.email,
        telNo:this.state.phone,
        notificationType:this.state.notificationType,
        position:this.state.position,
      }
      axios.post("http://localhost:9090/user/updateDetails/"+idset,staffUser).then((res)=>{
        console.log(res)
        const response=res.status;
        if(response===200){
          this.successfulmessage("Successfully Updated!");
        }
        else{
          this.unsuccessfulmessage("Unuccessfull!");
        }
      })
    }
  }

  successfulmessage = (msg) => {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: msg,
      showConfirmButton: false,
      timer: 1500
    })
  }
  unsuccessfulmessage = (msg) => {
    Swal.fire({
      position: 'top-end',
      icon: 'error',
      title: msg,
      showConfirmButton: false,
      timer: 1500
    })
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
            <h1
              style={{ marginBottom: "20px", fontSize: "large" }}
              className="text-center"
            >
              {this.state.fname + " " + this.state.lname}
            </h1>
            <Row>
              <Col>
                {" "}
                <Form.Group controlId="fname">
                  <Form.Label>First name</Form.Label>
                  <Form.Control
                    disabled
                    id="fname"
                    name={"fname"}
                    onChange={this.onchange}
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
                    name={"lname"}
                    onChange={this.onchange}
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
                    name={"email"}
                    onChange={this.onchange}
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
                    name={"phone"}
                    onChange={this.onchange}
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
                    onChange={this.onchangenotify}
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
                    name={"position"}
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
                    disabled
                    type="text"
                    name={"username"}
                    onChange={this.onchange}
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
                    name={"password"}
                    onChange={this.onchange}
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
                  Edit
                </button>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}
