import React, { Component } from "react";
import { ReactComponent as Logo } from "../../logo.svg";
import "./signin.css";
import axios from "axios";
import Swal from 'sweetalert2'


export default class SignIn extends Component {
  state = {
    username: "",
    password: "",
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const user={
      username:this.state.username,
      password:this.state.password
    }
    axios.post("https://groupprojectmit.herokuapp.com/user/signin",user).then((res)=>{
      console.log(res.data)
      const id=res.data
      if(id==="Okay"){
        this.unsuccessfulmessage("Login Unuccessfull");
      }
      else{
        //alert("wrong credentials!")
        localStorage.setItem("id",id);
        this.successfulmessage("Login Successfull");
        this.props.history.push('/dashboard')




      }
    })
        .catch((err)=>{
          console.log(err)
        })
  };

  successfulmessage = (msg) => {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: msg,
      showConfirmButton: false,
      timer: 1500
    })
  }
  unsuccessfulmessage = (msg) => {
    Swal.fire({
      position: 'center',
      icon: 'error',
      title: msg,
      showConfirmButton: false,
      timer: 1500
    })
  }


  render() {
    return (

      <div className="div-signin" style={{backgroundColor:"#e7d9ea"}}>
        <div className="div-signin-logo">
          <Logo />
        </div>
        <div>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="username"
              placeholder="Username"
              required
              onChange={this.handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              onChange={this.handleChange}
            />
            <button onSubmit={this.handleSubmit}>Sign In</button>
          </form>
        </div>
      </div>
    
    );
  }
}
