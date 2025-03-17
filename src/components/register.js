import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { submitRegister } from '../actions/authActions';
import { Form, Button } from 'react-bootstrap';

function Register() {
  const [details, setDetails] = useState({
    name: '',
    username: '',
    password: ''
  });

  const dispatch = useDispatch();

  // Update local state whenever an input changes
  const updateDetails = (event) => {
    setDetails({
      ...details,
      [event.target.id]: event.target.value
    });
  };

  // Handle form submission
  const register = (event) => {
    event.preventDefault(); // Prevent the page from refreshing
    dispatch(submitRegister(details));
  };

  return (
    <div className="register-container">
      <Form onSubmit={register} className="register-form bg-dark text-light p-4 rounded">
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Name"
            value={details.name}
            onChange={updateDetails}
          />
        </Form.Group>

        <Form.Group controlId="username">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            autoComplete="username"
            value={details.username}
            onChange={updateDetails}
          />
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            autoComplete="current-password"
            value={details.password}
            onChange={updateDetails}
          />
        </Form.Group>

        <Button type="submit" className="mt-3">Register</Button>
      </Form>
    </div>
  );
}

export default Register;
