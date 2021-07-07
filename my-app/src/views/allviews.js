import { useState } from "react";
import { LogIn } from "./logIn";
import { Form, Button } from "react-bootstrap";
import { DrawField } from "./drawField";
import { Logout } from "../components/firebase/logout";
export function AllViews() {
  const [state, setState] = useState("innitial");
  const startGame=()=>{
      setState("loaded")
  }
  return (
    <>
      {state === "innitial" && <LogIn state={state} setState={setState} />}
      {state === "loading" && (
        <>
          <Button onClick={startGame} style={{position:"absolute",top:"40%",right:"50%"}} variant="secondary">
            {" "}
            START GAME
          </Button>
        </>
      )}
      {state === "loaded" && (
        <>
          <Logout state={state} setState={setState}/>
          <DrawField />
        </>
      )}
    </>
  );
}
