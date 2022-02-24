import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

function Register () {
  const user = useSelector(state => state)
  const navigateTo = useNavigate()
  const [form, setForm] = useState({
    auth0Id: '',
    email: ''
  })

  useEffect(() => {
    setForm({
      auth0Id: user?.auth0Id,
      email: user?.email
    })
  }, [user])

 async function handleClick () {
	 await addUser(form)
	 navigateTo('/')
 }

  return (
    <>
			<Container id="main-container" className=" d-flex justify-content-center align-items-center" fluid>
				<Form id="signin-form" className="text-center p-3 w-60">
					<p className="md-3 fs-3 fw-normal">Register</p>
					<Form.Group htmlFor='username'controlId="signin-email">
						<Form.Control type="email" value={form.auth0Id} disabled={false} id="auth0Id" size="lg" placeholder="email address" className="position-relative" />
					</Form.Group>

					<Form.Group className="mb-3" controlId="signin-password">
						<Form.Control type="password" size="lg" placeholder="password" className="position-relative" />
					</Form.Group>

					<Form.Group className="d-flex justify-content-center mb-4" controlId="not-registered">
              <p>Already registered? <Link to="/">Log in!</Link></p>
          </Form.Group>

					<div className="d-flex">
						<Button type='button' variant="primary" size="lg" onClick={handleClick}>Register</Button>
					</div>
				
				</Form>
      </Container>

      
      {/* <GridForm>
        <ColOne htmlFor='username'>Auth0 Id:</ColOne>
        <ColTwo type='text'
          id='auth0Id'
          name='auth0Id'
          value={form.auth0Id}
          disabled={true}
        />

        <ColOne htmlFor='email'>Email:</ColOne>
        <ColTwo type='text'
          id='email'
          name='email'
          value={form.email}
          disabled={false}
        />
				
				<Button type='button' onClick={handleClick}>Register</Button>
      
      </GridForm> */}
    </>
  )
}

export default Register
