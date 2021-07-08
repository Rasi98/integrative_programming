import React, { Component } from 'react'
import { Table, Card } from 'react-bootstrap';
import Moment from 'react-moment';


import axios from 'axios';

const siAPI1= axios.create({
    baseURL :`http://localhost:9090/sensor/getalertsofsensor`
  })


export default class AlertTable extends Component {

constructor(props){
  super(props);
  console.log("Alert" + this.props.sensorID)
  this.getAllSensorsReadings();
}

state={
  sensorReadings:[]
}

getAllSensorsReadings=()=>{
  siAPI1.get(`/1`).then(res=>{
      console.log(res.data)
      this.setState({
        sensorReadings:res.data
      })
  }).catch(err => {
   window.alert(err)
})
}


    render() {
        return (
          <div style={{marginTop:"20px",width:"640px", padding: "18px"}}>
<Card style={{ backgroundColor: "white", borderRadius:"10px"}}>
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
  {this.state.sensorReadings.map(r=>
    <tr>
      <td>1</td>
      <td><Moment format="YYYY/MM/DD">{r.date}</Moment></td>
      <td><Moment format="hh:mm:ss">{r.date}</Moment></td>
      <td>{r.temperaturevalue}</td>
    </tr>
  )}
    
   
  </tbody>
</Table>

            </div></Card.Body>
</Card> </div>
        )
    }
}
