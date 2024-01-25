import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import "react-toastify/dist/ReactToastify.css";
import {  toast } from "react-toastify";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://thesis.test/api/login", {
        email,
        password,
      });

      const data = response.data;
      console.log(data);

      navigate("/home");

      toast.success("Login successful!");
      console.log("User Login Successful");
    } catch (error) {
      toast.error("Login failed");
    }
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" type="button" onClick={handleLogin}>
              Login
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;