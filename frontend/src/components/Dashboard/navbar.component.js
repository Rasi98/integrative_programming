import React, { Component } from 'react';
import { Navbar, Button } from 'react-bootstrap';



export default class NavBar extends Component {

    render() {
        return (
            <div>
                <Navbar bg="dark">
                    <div className="container" style={{ height: "60px" }}>
                        <Navbar.Brand href="#home"><div style={{ color: "white" }}> Sensor Monitoring And Alert Management Platform</div></Navbar.Brand>
                    </div>
                </Navbar>



            </div>
        );
    }
}