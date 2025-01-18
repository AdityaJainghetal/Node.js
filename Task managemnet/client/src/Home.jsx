import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



const Home = () => {
    <Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
    <Form.Select aria-label="Default select example">
      <option>Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select>
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>  
  
  
  
  
    return (
    <></>
  )
}

export default Home