import React from 'react';
import './App.css';
import { Card , Form, Button} from 'react-bootstrap';
import 'bootstrap';

function App() {
  return (
    <div>
      <h1 className='heading'>BMI Calculator</h1>
    <div  className="container">
      
    <Card className='card-style'>
      <p className='text'>Fill Below Details :</p>
      <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Enter Your Height (CM) :</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Enter Your Weight (KG)</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
   </Form>
    </Card>
     
    </div>
  
    </div>
  );
}

export default App;
