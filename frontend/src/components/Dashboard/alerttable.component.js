import React, { Component } from 'react'
import { Table,Form, Col, Card , Row} from 'react-bootstrap';

export default class AlertTable extends Component {
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
    <tr>
      <td>1</td>
      <td>2010/09/90</td>
      <td>19.00H</td>
      <td>67C</td>
    </tr>
    <tr>
    <td>1</td>
      <td>2010/09/90</td>
      <td>19.00H</td>
      <td>67C</td>
    </tr>
    <tr>
    <td>1</td>
      <td>2010/09/90</td>
      <td>19.00H</td>
      <td>67C</td>
    </tr>
    <tr>
    <td>1</td>
      <td>2010/09/90</td>
      <td>19.00H</td>
      <td>67C</td>
    </tr>
   
  </tbody>
</Table>

            </div></Card.Body>
</Card> </div>
        )
    }
}
