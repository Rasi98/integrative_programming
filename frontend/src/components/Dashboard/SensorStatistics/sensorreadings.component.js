import React, { Component } from 'react'
import LineChartData from './linechartdata.component'
import { Form, Col, Card, Row } from 'react-bootstrap';
import AlertTable from './alerttable.component';
import axios from 'axios';
import { Table } from 'react-bootstrap';
import Moment from 'react-moment';
import Chart from "react-google-charts";

const siAPI1 = axios.create({
    baseURL: `http://localhost:9090/sensor`
})




export default class SensorReadings extends Component {

    constructor() {
        super()
        this.getAllSensors();
        //this.getAllSensorsReadings();
    }
    state = {
        sensorID: "",
        sensorlist: [],
        show: false,
        table: "",
        sensorReadings:[],
        readings:[]
    }

    showalert = (id) => {
        console.log(id)
        return (<AlertTable sensorID={id} />)
    }

    getAllSensors = () => {
        siAPI1.get("/getallsensors").then(res => {
            console.log(res.data)
            this.setState({
                sensorlist: res.data,
                sensorID: res.data[0].sensorid,
                show: true
            })
            siAPI1.get(`/getalertsofsensor/${res.data[0].sensorid}`).then(res=>{
                console.log(res.data)
                this.setState({
                  sensorReadings:res.data
                })
            }).catch(err => {
             window.alert(err)
          })
          siAPI1.get(`/getreadingsofsensor/${res.data[0].sensorid}`).then(res=>{
            console.log(res.data)
            this.setState({
              readings:res.data
            })
        }).catch(err => {
         window.alert(err)
      })
        }).catch(err => {
            window.alert(err)
        })
    }


    setSensorID = (event) => {

        event.preventDefault();
        this.setState({
            sensorID: event.target.value,
            show: true
        })
        this.getAllSensorsReadings(event.target.value);
        this.getReadings(event.target.value);
        console.log(this.show)
        //this.showalert(this.state.sensorID)
    }

    getAllSensorsReadings=(id)=>{
        siAPI1.get(`/getalertsofsensor/${id}`).then(res=>{
            console.log(res.data)
            this.setState({
              sensorReadings:res.data
            })
        }).catch(err => {
         window.alert(err)
      })
      }

    getReadings=(id)=>{
        siAPI1.get(`/getreadingsofsensor/${id}`).then(res=>{
            console.log(res.data)
            this.setState({
              readings:res.data
            })
            console.log(res.data)
        }).catch(err => {
         window.alert(err)
      })
    }


    render() {
        return (
            <div  >

                <div className="row" style={{ height: "100%", width: "1000px", backgroundColor: "#e7d9ea", borderRadius: "10px", padding: "20px" }}>
                    <Col>
                    <div style={{ backgroundColor: "white", borderRadius:"10px"}}>
                <Chart
                    width={'600px'}
                    height={'400px'}
                    chartType="LineChart"
                    borderRadius={'10px'}
                    loader={<div>Loading Chart</div>}
                    data={[
                        ['x', 'Tempreature'],
                        [0, 0],
                        [1, 10],
                        [2, 23],
                        [3, 17],
                        [4, 18],
                        [5, 9],
                        [6, 11],
                        [7, 27],
                        [8, 33],
                        [9, 40],
                        [10, 32],
                        [11, 35],
                    ]}
                    options={{
                        hAxis: {
                            title: 'Time',
                        },
                        vAxis: {
                            title: 'Tempreature',
                        },
                    }}
                    rootProps={{ 'data-testid': '1' }}
                />

            </div>
                    </Col>
                    <Col>
                        <Form.Control as="select" required onChange={this.setSensorID}>
                            {this.state.sensorlist.map(e =>
                                <option value={e.sensorid}>Sensor ID: {e.sensorid} Location: {e.location}</option>
                            )}


                        </Form.Control>
                        <div style={{ marginTop: "20px" }}>
                            <Card style={{ backgroundColor: "white", borderRadius: "10px" }}>
                                <Card.Body>
                                    <div>
                                        <Row>
                                            <Col>Sensor ID:</Col><Col>{this.state.sensorID} </Col><br />
                                        </Row>
                                        <Row>
                                            <Col>Tempreature:</Col><Col> 56 Celcius</Col>
                                        </Row>
                                    </div>

                                </Card.Body>
                            </Card>

                        </div>

                    </Col>
                    <div style={{ marginTop: "20px", width: "640px", padding: "18px" }}>
                        <Card style={{ backgroundColor: "white", borderRadius: "10px" }}>
                            <Card.Body>
                                <div>
                                    <Table striped bordered hover size="sm" >
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Date</th>
                                                <th>Time</th>
                                                <th>Tempreature</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.state.sensorReadings.map(r =>
                                                <tr>
                                                    <td>1</td>
                                                    <td><Moment format="YYYY/MM/DD">{r.date}</Moment></td>
                                                    <td><Moment format="hh:mm:ss">{r.date}</Moment></td>
                                                    <td>{r.temperaturevalue}</td>
                                                </tr>
                                            )}


                                        </tbody>
                                    </Table>

                                </div>
                                </Card.Body>
                        </Card> 
                        </div>
                </div>
            </div>
        )
    }
}
