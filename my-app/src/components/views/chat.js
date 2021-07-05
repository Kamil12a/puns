import { Card, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/chat.css";
import { useRef,useState} from "react";
export function Chat() {
    const messageRef=useRef(null)
    const [allGuessing,setAllGuesing]=useState()
    const sendMessage=(event)=>{
        event.preventDefault()
        console.log(messageRef.current.value)
        messageRef.current.value=""
    }
  return (
    <>
      <Form onSubmit={sendMessage}>
        <Card>
          <Card.Header>What is it? What do you think? GUESS!</Card.Header>
          <Card.Body className="chatContainer">
            <div className="btn-primary-chat">
              <Form.Group controlId="formBasicEmail">
                <Form.Control ref={messageRef} type="text" placeholder="Enter email" />
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
