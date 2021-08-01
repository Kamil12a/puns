import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useRef, useState } from "react";
import fire from "../../fire";
import { db } from "../../fire";
export function Password() {
  const [password, setPassword] = useState(null);
  const getPassword = () => {
    db.collection("Passwords")
      .doc("Password")
      .onSnapshot((pass) => {
        if (!pass.data().password) {
          db.collection("Passwords")
            .doc("Passwords")
            .get()
            .then((passwords) => {
              let passArray = passwords.data().password;
              let passFinally =
                passArray[Math.floor(Math.random() * passArray.length)];
              setPassword(passFinally);

              db.collection("Passwords").doc("Password").set({
                password: passFinally,
              });
            });
        } else {
          setPassword(pass.data().password);
        }
      });
  };
  useEffect(() => {
    getPassword();
  }, []);

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Card.Title style={{ position: "absolute", top: "20px" }}>
          {password}
        </Card.Title>
      </div>
    </>
  );
}
