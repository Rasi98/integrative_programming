import React, { Component } from 'react'
import LineChartData from './linechartdata.component'
import { Form, Col, Card , Row} from 'react-bootstrap';
import AlertTable from './alerttable.component';



export default class SensorReadings extends Component {
    state = {
        sensorID: ""
    }
    render() {
        return (
            <div  >

                <div className="row" style={{ height: "100%", width: "1000px", backgroundColor: "#e7d9ea", borderRadius: "10px", padding: "20px" }}>
                    <Col>
                        <LineChartData sensorID="" />
                    </Col>
                    <Col>
                        <Form.Control as="select" required>
                            <option value="m1">Sensor - 1</option>
                            <option value="m2">Sensor - 2</option>
                            <option value="m3">Sensor - 3</option>
                            <option value="m4">Sensor - 4</option>
                            <option value="m5">Sensor - 5</option>

                        </Form.Control>
                        <div style={{marginTop:"20px"}}>
                            <Card style={{ backgroundColor: "white", borderRadius:"10px"}}>
                                <Card.Body>
                                    <div>
                                        <Row>
                                        <Col>Name :</Col><Col> Sensor 1 </Col><br/></Row>
                                        <Row>
                                        <Col>Tempreature:</Col><Col> 56 Celcius</Col>
                                        </Row>
                                    </div>

                                </Card.Body>
                            </Card>

                        </div>
                     
                    </Col>
                    <AlertTable/>
                </div>
            </div>
        )
    }
}
