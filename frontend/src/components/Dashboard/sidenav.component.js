import React, { Component } from "react";
import { Icon, InlineIcon } from "@iconify/react";
import statsDownAlt from "@iconify-icons/gridicons/stats-down-alt";
import { Nav, Tab, Col, Row } from "react-bootstrap";
import SensorReadings from "./SensorStatistics/sensorreadings.component";
import bxsUserRectangle from "@iconify-icons/bx/bxs-user-rectangle";
import sensorIcon from "@iconify-icons/icons8/sensor";
import AddSensor from "./addsensor.component";
import UserAccount from "./userAccount.component";
import AddUser from "./signup.component";

export default class SideNav extends Component {
  render() {
    return (
      <div>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={8} md={8} lg={4}>
              <div style={{ backgroundColor: "#e7d9ea", borderRadius: "10px" }}>
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link
                      eventKey="first"
                      style={{
                        height: "80px",
                        paddingTop: "30px",
                        textAlign: "left",
                        fontWeight: "bolder",
                      }}
                    >
                      <Icon icon={statsDownAlt} height="2em" /> Sensor
                      statistics
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      eventKey="second"
                      style={{
                        height: "80px",
                        paddingTop: "30px",
                        textAlign: "left",
                        fontWeight: "bolder",
                      }}
                    >
                      <Icon icon={sensorIcon} height="2em" /> Add Sensor
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      eventKey="third"
                      style={{
                        height: "80px",
                        paddingTop: "30px",
                        textAlign: "left",
                        fontWeight: "bolder",
                      }}
                    >
                      <Icon icon={bxsUserRectangle} height="2em" /> My Account
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      eventKey="fourth"
                      style={{
                        height: "80px",
                        paddingTop: "30px",
                        textAlign: "left",
                        fontWeight: "bolder",
                      }}
                    >
                      <Icon icon={bxsUserRectangle} height="2em" /> Add Account
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </div>
            </Col>

            <Col sm={4} md={4} lg={8}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <SensorReadings name="AllSensors" />
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <AddSensor name="AddSensor" />
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <UserAccount name="UserAccount" />
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                  <AddUser name="AddAccount" />
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    );
  }
}
