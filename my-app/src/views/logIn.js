// import { useEffect, useState, useRef } from "react";
import fire from "../fire";
import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/logIn.css";
import { useRef, useState } from "react";
import { DrawField } from "./drawField";
export function LogIn() {
  const emailRef = useRef(null);
  const buttonSignref = useRef(null);
  const buttonSubmit = useRef(null);
  const alertRef = useRef(null);
  const [password, setPassword] = useState("");
  const [showAlert, setAlert] = useState(false);
  const [signStatus, setSignStatus] = useState("signUp");
  const [state, setState] = useState("innitial");
  const createAcc = (email) => {
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        setState("loaded");
      })
      .catch((error) => {
        setAlert(true);
        let errorMessage = error.message;
        alertRef.current.innerText = errorMessage;
        signIn(email)
      });
  };
  const signIn = (email) => {
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        var user = userCredential.user;
        setState("loaded")
      })
      .catch((error) => {
        var errorMessage = error.message;
        setAlert(true)
        alertRef.current.innerText = errorMessage;
      });
  };
  const handleSign = (e) => {
    e.preventDefault();
    const email= emailRef.current.value
    if (signStatus === "signUp") {
      createAcc(email);
    } else {
      signIn(email);
    }
  };
  const changeSignStatus = () => {
    setAlert(false);
    if (signStatus === "signUp") {
      setSignStatus("signIn");
      buttonSignref.current.innerText = "Switch to sign up";
      buttonSubmit.current.innerText = "Sign In";
    } else {
      setSignStatus("signUp");
      buttonSignref.current.innerText = "Switch to sign in";
      buttonSubmit.current.innerText = "Sign Up";
    }
  };
  return (
    <>
      {state === "innitial" && (
        <section className="logInSection">
          <div className="logInContainer">
            <Form onSubmit={handleSign}>
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
              <Button
                ref={buttonSignref}
                variant="secondary"
                onClick={changeSignStatus}
              >
                Switch to sign in
              </Button>
              <Button ref={buttonSubmit} variant="primary" type="submit">
                Sign up
              </Button>
            </Form>
          </div>
        </section>
      )}
      {state === "loaded" && <DrawField />}
    </>
  );
}
