import fire from "../../fire";
import { Button } from "react-bootstrap";
import { useState } from "react";
export function Logout({state,setState}) {
  const logoutUser = () => {
    fire
      .auth()
      .signOut()
      .then(() => {
          setState("innitial")
      })
      .catch((error) => {
      });
  };
  return (
    <>
      <Button style={{position:"absolute", top:"10px", right:"50px"}} onClick={logoutUser} variant="primary">
        Log out
      </Button>
    </>
  );
}
