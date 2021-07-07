import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { setData, getPassword } from "../../components/firebase/fetchPasswords";

export function Password() {
  const [password, setPassword] = useState(null);

  useEffect(() => {
    setData();
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
