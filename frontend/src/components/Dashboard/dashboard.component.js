import React, { Component } from 'react'
import Footer from './footer.component';
import SideNav from './sidenav.component';
import NavBar from './navbar.component';

export default class Dashboard extends Component {
    render() {
        return (
            <div style={{ backgroundColor: "purple", width: "100%", height: "100%" }}>
                <NavBar />

                <div class="row container" style={{ paddingTop: "100px", paddingLeft: "80px", paddingBottom: "100px" }}>

                    <SideNav />

                </div>

                <Footer />
            </div>
        );
    }
}

