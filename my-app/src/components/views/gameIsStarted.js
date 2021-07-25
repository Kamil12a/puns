import { useState } from "react";
import { DrawField } from "../../views/drawField";
import { Logout } from "../firebase/logout";
import { db } from "../../fire";
import { useEffect } from "react";
export function GameIsStarted({ state, setState }) {
  const [waitingForGame, setWaitingStatus] = useState(false);
  const [time, setTime] = useState(10);
  const timer = () => {
    let timeCalc = 10;
    const timerRunner = setInterval(() => {
      timeCalc = timeCalc - 1;
      setTime(timeCalc);

      if (timeCalc === 0) {
        clearInterval(timerRunner);
        setWaitingStatus(true);
      }
    }, 100);
  };

  useEffect(() => {
    timer();
    db.collection("GameStatus")
      .doc("gamestatus")
      .get()
      .then((snap) => {
        if (!snap.data().gameStatus) {
          db.collection("GameStatus").doc("gamestatus").set({
            gameStatus:true
          });
          db.collection("UsersActive")
            .doc("Users")
            .get()
            .then((snap) => {
              let user = snap.data().users;
              user = user[Math.floor(Math.random() * user.length)];
              db.collection("UsersActive").doc("UserDrawing").set({
                user: user,
              });
            });
        }
      });
  }, []);

  return (
    <>
      {waitingForGame === false && (
        <div
          style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {" "}
          <p style={{ fontSize: "2em" }}>{time}</p>
        </div>
      )}
      {waitingForGame && (
        <>
          <Logout state={state} setState={setState} />
          <DrawField />
        </>
      )}
    </>
  );
}
