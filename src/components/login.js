import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { submitLogin } from '../actions/authActions';
import { Form, Button } from 'react-bootstrap';

function Login() {
  const [details, setDetails] = useState({
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
  const login = (event) => {
    event.preventDefault(); // Prevent the page from refreshing
    dispatch(submitLogin(details));
  };

  return (
    <div className="login-container">
      <Form onSubmit={login} className="login-form bg-dark text-light p-4 rounded">
        <Form.Group controlId="username" className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            autoComplete="username"
            value={details.username}
            onChange={updateDetails}
          />
        </Form.Group>

        <Form.Group controlId="password" className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            autoComplete="current-password"
            value={details.password}
            onChange={updateDetails}
          />
        </Form.Group>

        <Button type="submit">Sign in</Button>
      </Form>
    </div>
  );
}

export default Login;
