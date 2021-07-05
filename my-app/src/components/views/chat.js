import { Card, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/chat.css";
import { useRef, useState } from "react";
export function Chat() {
  const messageRef = useRef(null);
  const [allGuessing, setAllGuesing] = useState([]);
  const sendMessage = (event) => {
    event.preventDefault();
    let allGuess = allGuessing.concat([messageRef.current.value]);
    setAllGuesing(allGuess);
    messageRef.current.value = "";
  };
  return (
    <>
      <Form onSubmit={sendMessage}>
        <Card>
          <Card.Header>What is it? What do you think? GUESS!</Card.Header>
          <Card.Body className="chatContainer">
            <div className="textMessage">
              {allGuessing.map((message, index) => {
                return <p key={index}>{message}</p>;
              })}
            </div>
            <div className="btn-primary-chat">
              <Form.Group controlId="formBasicEmail">
                <Form.Control
                  autoComplete="off"
                  ref={messageRef}
                  type="text"
                  placeholder="Enter email"
                />
              </Form.Group>
              <Button type="submit" variant="primary">
                Send your idea
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Form>
    </>
  );
}
