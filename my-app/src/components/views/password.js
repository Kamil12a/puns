import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useRef, useState } from "react";
export function Password() {
  const [password, setPassword] = useState(null);
  useEffect(() => {
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
