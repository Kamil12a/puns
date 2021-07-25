import { useState } from "react";
import { LogIn } from "./logIn";


import { StartGameButton } from "../components/buttons/startGameButton";
import { GameIsStarted } from "../components/views/gameIsStarted";
export function AllViews() {
  const [state, setState] = useState("innitial");
 
  
  return (
    <>
      {state === "innitial" && <LogIn state={state} setState={setState} />}
      {state === "loading" && (
        <>
          <StartGameButton setState={setState} />
        </>
      )}
      {state === "loaded" && (
        <>
        <GameIsStarted state={state} setState={setState}/>
          
        </>
      )}
    </>
  );
}
