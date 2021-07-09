import React, { Component } from "react";
import { Navbar, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <Navbar bg="dark">
          <div className="container" style={{ height: "60px" }}>
            <Navbar.Brand href="#home">
              <div style={{ color: "white" }}>
                {" "}
                Sensor Monitoring And Alert Management Platform
              </div>
            </Navbar.Brand>
            <Container style={{ float: "right", width: "50px" }}>
              <Link to="/">
                <Button onClick={() => localStorage.clear()}>SignOut</Button>
              </Link>
            </Container>
          </div>
        </Navbar>
      </div>
    );
  }
}
