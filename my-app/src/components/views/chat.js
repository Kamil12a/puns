import { Card, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/chat.css";
import fire from "../../fire";
import { db } from "../../fire";
import { useRef, useState, useEffect } from "react";
import { getDrawer } from "../firebase/getDrawer";
import { restartGame } from "../firebase/restartGame";
export function Chat() {
  const messageRef = useRef(null);
  const [drawer, setDrawer] = useState();
  const [allGuessing, setAllGuesing] = useState([]);
  const [password, setPassword] = useState(null);
  const sendMessage = (event) => {
    event.preventDefault();
    if (messageRef.current.value === password && !drawer) {
      restartGame();
    } else if (messageRef.current.value != "" && !drawer) {
      db.collection("Comments").doc().set({
        message: messageRef.current.value,
        date: Date.now(),
        user: fire.auth().currentUser.uid,
      });
      messageRef.current.value = "";
    }
  };
  const getPassword = () => {
    db.collection("Passwords")
      .doc("Password")
      .onSnapshot((snap) => {
        setPassword(snap.data().password);
      });
  };

  useEffect(() => {
    getDrawer.then((data) => {
      setDrawer(data);
    });
    getPassword();
    db.collection("Comments").onSnapshot((querySnapshot) => {
      let allPasswordsObject = {};
      let allPasswordsArray = [];
      querySnapshot.forEach((doc) => {
        allPasswordsObject[doc.data().date] = doc.data();
      });

      Object.keys(allPasswordsObject)
        .sort()
        .forEach((key, index) => {
          allPasswordsArray.push(allPasswordsObject[key]);
        });
      setAllGuesing(allPasswordsArray);
    });
  }, []);
  return (
    <>
      <Form onSubmit={sendMessage}>
        <Card>
          <Card.Header>What is it? What do you think? GUESS!</Card.Header>
          <Card.Body className="chatContainer">
            <div className="textMessage">
              {allGuessing.map((comment, index) => {
                return (
                  <p key={index}>
                    {comment.user} {comment.message}
                  </p>
                );
              })}
            </div>
            <div className="btn-primary-chat">
              <Form.Group controlId="formBasicEmail">
                <Form.Control
                  autoComplete="off"
                  ref={messageRef}
                  type="text"
                  placeholder="Enter password"
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
