import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Button , Card } from 'react-bootstrap';


export default class App extends Component {

    constructor() {
        super();
        this.state = {
            counter: 0
        }
    }

    increse = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }
    decrese=()=>{
      if (this.state.counter >0){ 
      this.setState({
        counter: this.state.counter - 1
        });
    }
    }

    reset = () => {
        this.setState({
            counter: 0
        })

    }
    render() {
        return (
            <div className="App">
<div style={{ width: '20rem',height: '10rem', marginLeft: "15px" }}>
<Card>
  <Card.Img variant="top"  src="/mycar.jpg" alt="car" />
  <Card.Body>
    <Card.Title style={{textAlign:"center"}}>mercedes 2021</Card.Title>
    <p style={{textAlign:"center"}} >Price: 100000$ <br /> model:2021</p>
    
    <p id="pp" > {this.state.counter}</p>

    <Button variant="primary" onClick={this.increse}>+</Button>
    <Button variant="primary" onClick={this.decrese} >-</Button>
    <Button variant="warning" onClick={this.reset} >Reset</Button>
  </Card.Body>
</Card>

</div>
            </div>
        )
    }
}