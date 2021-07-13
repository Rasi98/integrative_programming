import React, { Component } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import axios from "axios";
import Swal from "sweetalert2";

const passregex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
const phoneregex = /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;
const nameregex = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/;
const emailregex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/


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


  // onchange=(e)=>{
  //   this.setState({[e.target.name]: e.target.value})
  // }

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
    axios.post("https://groupprojectmit.herokuapp.com/user/adduser",staffUser).then((r) => {
      console.log(r.data)
      const response = r.data;
      if(response===null){
        this.unsuccessfulmessage("Unuccessfull!");
      }
      else{
        this.successfulmessage("Successfully Added!");
      }
    }).catch(err => {
      console.log(err)
   })
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


  onchangeNotificationType=(event)=>{
    this.setState({
      notificationType: event.target.value
    })
    console.log(this.state.notificationType)
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
        passwordError:true
      })
      console.log("Error")
    }
    else{
        this.setState({
      password: event.target.value,
      passwordError:false
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
                <Form.Group>
                  <Form.Label>First name</Form.Label>
                  <Form.Control
                   // //name="fname"
                    //id="fname"
                    type="text"
                    Value={this.state.fname}
                    onChange={this.onChangefName}
                  />
                     {this.state.fnameError ? 
              <div className="errorMsg" style={{color:"red", fontSize:"11px"}}>Enter a valid Name</div>
            :null}
                </Form.Group>
              </Col>
              <Col>
                {" "}
                <Form.Group>
                  <Form.Label>Last name</Form.Label>
                  <Form.Control
                    id="lname"
                    name="lname"
                    type="text"
                    Value={this.state.lname}
                    onChange={this.onChangelName}

                  />
                    {this.state.lnameError ? 
              <div className="errorMsg" style={{color:"red", fontSize:"11px"}}>Enter a valid Name</div>
            :null}
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    id="email"
                    name="email"
                    type="text"
                    Value={this.state.email}
                    onChange={this.onChangeemail}
                  />
                    {this.state.emailError ? 
              <div className="errorMsg" style={{color:"red", fontSize:"11px"}}>Enter a valid Email address</div>
            :null}
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label>Phone no.</Form.Label>
                  <Form.Control
                    id="phone"
                    name="phone"
                    type="text"
                    Value={this.state.phone}
                    onChange={this.onChangephoneNumber}
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
                    Value={this.state.notificationType}
                    as="select"
                    custom
                    onChange={this.onchangeNotificationType}
                    name="notificationType"
                  >
                    <option Value={"email"}>Email</option>
                    <option Value={"sms"}>SMS</option>
                    <option Value={"call"}>Call</option>
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label>Position</Form.Label>
                  <Form.Control
                    id="position"
                    name="position"
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
                <Form.Group>
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    id="username"
                    name="username"
                    type="text"
                    Value={this.state.username}
                    onChange={this.onchangeUsername}
                  />
                     {this.state.usernameError ? 
              <div className="errorMsg" style={{color:"red", fontSize:"11px"}}>Enter a valid Username</div>
            :null}
                </Form.Group>
              </Col>
              <Col>
                {" "}
                <Form.Group>
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    id="password"
                    name="password"
                    type="text"
                    Value={this.state.password}
                    onChange={this.onChangePassword}
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
