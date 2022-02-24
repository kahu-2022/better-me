import React from 'react'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function Login (props) {
  
    return (
  
        <Container id="main-container" className=" d-flex justify-content-center align-items-center" fluid>
          <Form id="signin-form" className="text-center p-3 w-60 my-auto">
            <p className="md-3 fs-3 fw-normal">Sign in</p>
            <Form.Group controlId="signin-email">
              <Form.Control type="email" size="lg" placeholder="email address" className="position-relative" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="signin-password">
              <Form.Control type="password" size="lg" placeholder="password" className="position-relative" />
            </Form.Group>

            <Form.Group className="d-flex justify-content-center mb-4" controlId="not-registered">
              <p>Not registered? <a href="#">Register Here</a></p>
            </Form.Group>

            <div className="d-flex">
              <Button variant="primary" size="lg">Sign in</Button>
            </div>
          </Form>
        </Container>
       
       
    )
  
}

export default Login