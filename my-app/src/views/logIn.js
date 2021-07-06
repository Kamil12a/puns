// import { useEffect, useState, useRef } from "react";
import fire from "../fire";
import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/logIn.css";
import { useRef, useState } from "react";
export function LogIn() {
  const emailRef = useRef(null);
  const alertRef = useRef(null);
  const [password, setPassword] = useState("");
  const [showAlert, setAlert] = useState(false);
  const handleSignup = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((error) => {
        setAlert(true);
        let errorMessage = error.message;
        alertRef.current.innerText = errorMessage;
      });
  };
  return (
    <>
      <section className="logInSection">
        <div className="logInContainer">
          <Form onSubmit={handleSignup}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                ref={emailRef}
                type="email"
                placeholder="Enter email"
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
              />
            </Form.Group>
            {showAlert && (
              <div
                ref={alertRef}
                className="alert alert-danger"
                role="alert"
              ></div>
            )}
            <Button variant="secondary">Switch to sign in</Button>
            <Button variant="primary" type="submit">
              Sign up
            </Button>
          </Form>
        </div>
      </section>
    </>
  );
}
