import React, { Component } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import axios from "axios";
import Swal from "sweetalert2";

const passregex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
const phoneregex = /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;
const nameregex = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/;
const emailregex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/

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
      fnameError:false,
      lnameError:false,
      phoneError:false,
      positionError:false,
      passwordError:false,
      emailError:false,
      positionError:false,
      usernameError:false
    };
  }

  componentDidMount() {
    const id=localStorage.getItem("id")
    axios.post("https://groupprojectmit.herokuapp.com/user/getDetails/"+id).then((res)=>{
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



  // onchange=(e)=>{
  //   this.setState({[e.target.name]:e.target.value})
  // }
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
      axios.post("https://groupprojectmit.herokuapp.com/user/updateDetails/"+idset,staffUser).then((res)=>{
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

  onChangefName= (event)=>{
    let f = event.target.value
    if(!nameregex.test(f)){
      this.setState({
        fnameError:true
      })
    }
    else{
       this.setState({
      fname:event.target.value,
      fnameError:false
    })
    }
   
  }
  onChangelName= (event)=>{
    let l = event.target.value
    if(!nameregex.test(l)){
      this.setState({
        lnameError:true
      })
    }
    else{
      this.setState({
      lname:event.target.value,
      lnameError:false
    })
    }
    
  }

  onchangePosition= (event)=>{
    let l = event.target.value
    if(!nameregex.test(l)){
      this.setState({
        positionError:true
      })
    }
    else{
      this.setState({
      position:event.target.value,
      positionError:false
    })
    }
    
  }

  onchangeUsername= (event)=>{
    let l = event.target.value
    if(!nameregex.test(l)){
      this.setState({
        usernameError:true
      })
    }
    else{
      this.setState({
      username:event.target.value,
      usernameError:false
    })
    }
    
  }

  onChangephoneNumber= (event)=>{
    let p = event.target.value;
    if(!phoneregex.test(p)){
      this.setState({
        phoneError:true
      })
      console.log("Error")
    }
    else{
      this.setState({
        phone:event.target.value,
      phoneError:false
    })
    console.log(this.state.phone)
    }
    
  }

  onChangePassword = (event) => {
    let p = event.target.value;
    if(!passregex.test(p)){
      this.setState({
        passworderror:true
      })
      console.log("Error")
    }
    else{
        this.setState({
      password: event.target.value,
      passworderror:false
    })
    }
  
  }

  onChangeemail= (event)=>{
    let e = event.target.value;
    if(!emailregex.test(e)){
      this.setState({
        emailError:true
      })
    }
    else{
       this.setState({
        email:event.target.value,
      emailError:false
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
                    onChange={this.onChangefName}
                    type="text"
                    Value={this.state.fname}
                  />
                  {this.state.fnameError ? 
              <div className="errorMsg" style={{color:"red", fontSize:"11px"}}>Enter a valid Name</div>
            :null}
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
                    onChange={this.onChangelName}
                    type="text"
                    Value={this.state.lname}
                  />
                                    {this.state.lnameError ? 
              <div className="errorMsg" style={{color:"red", fontSize:"11px"}}>Enter a valid Name</div>
            :null}
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
                    onChange={this.onChangeemail}
                    type="text"
                    Value={this.state.email}
                  />
                    {this.state.emailError ? 
              <div className="errorMsg" style={{color:"red", fontSize:"11px"}}>Enter a valid Email address</div>
            :null}
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="phone">
                  <Form.Label>Phone no.</Form.Label>
                  <Form.Control
                    id="phone"
                    disabled
                    name={"phone"}
                    onChange={this.onChangephoneNumber}
                    type="text"
                    Value={this.state.phone}
                  />
                        {this.state.phoneError ? 
              <div className="errorMsg" style={{color:"red", fontSize:"11px"}}>Enter a valid number</div>
            :null}
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
                    Value={this.state.notificationType}
                    as="select"
                    custom
                    onChange={this.onchangenotify}
                    name="notificationtype"
                  >
                    <option Value={"email"}>Email</option>
                    <option Value={"sms"}>SMS</option>
                    <option Value={"call"}>Call</option>
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
                    onChange={this.onchangePosition}
                    type="text"
                    Value={this.state.position}
                  />
                   {this.state.positionError ? 
              <div className="errorMsg" style={{color:"red", fontSize:"11px"}}>Enter a valid Position</div>
            :null}
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
                    onChange={this.onchangeUsername}
                    Value={this.state.username}
                  />
                                     {this.state.usernameError ? 
              <div className="errorMsg" style={{color:"red", fontSize:"11px"}}>Enter a valid Username</div>
            :null}
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
                    onChange={this.onChangePassword}
                    type="text"
                    Value={this.state.password}
                  />
                  {this.state.passwordError ? 
              <div className="errorMsg" style={{color:"red", fontSize:"11px"}}>Password should contain eight characters, at least one letter and one number</div>
            :null}

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
