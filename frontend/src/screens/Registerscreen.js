import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Form, Button, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../actions/userActions";
import Formcontainer from "../components/formcontainer";
function Registerscreen({ location, history }) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState(null);
  const dispatch = useDispatch();
  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;
  const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);
  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setErrors("password doesntmatch");
    } else {
      dispatch(register(name, email, password));
    }
  };
  return (
    <>
      <Container className="register_screen">
        <Formcontainer>
          <h1>Sign UP</h1>
          {errors && <h6>Password dont match</h6>}
          {error && <h4>{error.message}</h4>}
          {loading && <h3>Creating your account...</h3>}
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>

              <Form.Control
                type="name"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label>Email Address</Form.Label>

              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>

              <Form.Control
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="confirmPassword">
              <Form.Label>Confirm Password</Form.Label>

              <Form.Control
                type="password"
                placeholder="Enter password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Button type="submit" variant="primary">
              Register
            </Button>
          </Form>
          <Row className="py-3">
            <Col>
              HAve an account?{" "}
              <Link to={redirect ? `/login?redirect=${redirect}` : "/login"}>
                Login
              </Link>
            </Col>
          </Row>
        </Formcontainer>
      </Container>
    </>
  );
}

export default Registerscreen;
